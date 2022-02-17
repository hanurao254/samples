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

import luna from './request';

const videoService = {

 getVideoList: ({uri, ...rest}) => {
  let params = {
   uri: uri
  };
  return luna('com.webos.service.mediaindexer', 'getVideoList', params)(rest);
 },

 getVideoMetaData: ({uri, ...rest}) => {
  let params = {
   uri: uri
  };
  return luna('com.webos.service.mediaindexer', 'getVideoMetadata ', params)(rest);
 }
};

export default videoService;
export {
 videoService
};
