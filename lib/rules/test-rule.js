/**
 * @fileoverview Demo: Custom rule to ensure we run a certain function only once per parameter
 * @author Toastbroad
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Demo: Custom rule to ensure we run a certain function only once per parameter",
            category: "Demo: Custom eslint rule for our project",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        const declaredUserEventTypes = {};
        return ({
            CallExpression: (node) => {
                if (node.callee.name === 'getFoo') {
                    !!node.arguments.length && node.arguments.forEach(arg => {
                        if (declaredUserEventTypes[arg.value]) {
                            context.report({message: 'no duplicates', node});
                        } else {
                            declaredUserEventTypes[arg.value] = arg.value;
                        }
                    });
                }
            },
        });
        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
    }
};
