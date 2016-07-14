/**
 * Yeoman Generator Starter Kit
 *
 * Copyright © 2016-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator:app', () => {

  before(() => helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts({ someAnswer: true })
    .toPromise()
  );

  it('creates files', () => {
    assert.file(['dummy.txt']);
  });

});
