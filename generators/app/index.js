'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yeomanGenerator = require('yeoman-generator');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Yeoman Generator Starter Kit
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

exports.default = _yeomanGenerator.Base.extend({
  prompting: function prompting() {
    var _this = this;

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the amazing ' + _chalk2.default.red('boilerplate') + ' generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      _this.props = props;
    });
  },
  writing: function writing() {
    this.fs.copy(this.templatePath('dummy.txt'), this.destinationPath('dummy.txt'));
  },
  install: function install() {
    this.installDependencies();
  }
});
//# sourceMappingURL=index.js.map