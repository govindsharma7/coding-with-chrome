/**
 * @fileoverview Renderer for JavaScript modification.
 *
 * @license Copyright 2018 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author carheden@google.com (Adam Carheden)
 */
goog.provide('cwc.renderer.internal.Javascript');

goog.require('cwc.ui.EditorContent');
goog.require('cwc.file.Files');
goog.require('cwc.framework.External');
goog.require('cwc.renderer.Helper');
goog.require('cwc.utils.Helper');


/**
 * @constructor
 * @param {!cwc.utils.Helper} helper
 * @struct
 * @final
 */
cwc.renderer.internal.Javascript = function(helper) {
  /** @type {!cwc.utils.Helper} */
  this.helper = helper;
};


/**
 * Initializes and defines the JavaScript renderer.
 */
cwc.renderer.internal.Javascript.prototype.init = function() {
  let renderer = this.render.bind(this);
  let rendererInstance = this.helper.getInstance('renderer', true);
  rendererInstance.setRenderer(renderer);
};


/**
 * @param {Object} editorContent
 * @param {!cwc.file.Files} libraryFiles
 * @param {!cwc.file.Files} frameworks
 * @param {cwc.renderer.Helper} rendererHelper
 * @return {!string}
 * @export
 */
cwc.renderer.internal.Javascript.prototype.render = function(
    editorContent,
    libraryFiles,
    frameworks,
    rendererHelper) {
  return rendererHelper.getHTML(undefined, undefined, undefined,
    editorContent[cwc.ui.EditorContent.DEFAULT]);
};
