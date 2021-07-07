/**
 * @fileoverview Demo: Custom rule to ensure we run a certain function only once per parameter
 * @author Toastbroad
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/test-rule"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("test-rule", rule, {

    valid: [
        // give me some code that won't trigger a warning
        'getFoo(\'bar\'); getFoo(\'baz\');',
    ],

    invalid: [
        {
            code: 'getFoo(\'bar\'); getFoo(\'bar\');',
            errors: [{
                message: "no duplicates",
                type: "CallExpression",
            }]
        }
    ]
});
