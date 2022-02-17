// Copyright (c) 2021 LG Electronics, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import { types } from "./types";
import { Device } from "../services";
import mockDeviceList from "../../assets/mock/deviceList.json";

const getDeviceListRequest = () => {
  return {
    type: types.FETCH_DEVICE_LIST_REQUEST,
  };
};

const setDeviceListSuccess = (deviceList) => {
  return {
    type: types.FETCH_DEVICE_LIST_SUCCESS,
    payload: deviceList,
  };
};

const setDeviceListError = (errMessage) => {
  return {
    type: types.FETCH_DEVICE_LIST_ERROR,
    payload: errMessage,
  };
};

const getDeviceList =
  ({ subscribe }) =>
  (dispatch) => {
    dispatch(getDeviceListRequest());
    /*
    if(!window.plam){
      dispatch(setDeviceListSuccess(mockDeviceList.pluginList));
    }
    else*/
    {
      Device.getDeviceList({
        subscribe: subscribe,
        onSuccess: (res) => {
          dispatch(setDeviceListSuccess(res.pluginList));
        },
        onFailure: (err) => {
          dispatch(setDeviceListSuccess(err.errorText));
        },
      });
    }
  };

const setCurrentDevice = (device) => {
  return {
    type: types.SET_CURRENT_DEVICE,
    payload: device,
  };
};

export {
  setCurrentDevice,
  getDeviceList,
  getDeviceListRequest,
  setDeviceListSuccess,
  setDeviceListError,
};
