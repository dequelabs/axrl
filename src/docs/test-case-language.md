---
path: '/docs/test-cases'
date: '2017-11-07'
title: 'AXRL as Test Case Language'
---

AXRL can be used to describe test cases for automated testing. By expressing test cases using the same language as the output format of accessibility tests we gain the ability to run automated tools against accessibility information produced by SMEs. This has a number of benefits:

- False positives become much easier to identify
- When writing new rules, those rules can be tested against existing data
- Machine learning can be applied to solver very specific accessibility issues

The following example shows how to describe a test case for the duplicate-id rule. The first UITestResult uses a page stored externally, the second UITestResult shows how to embed the content of a page into JSON.

```json
{
  "@type": "TestDescription",
  "@id": "axe-core:duplicate-id",
  "testResults": [{
    // Test on an external page
    "@type": "UITestResult",
    "outcome": "failed",
    "userInterface": "https://localhost:9876/tests/integration/duplicate-id.html",
    "nodeResults": [{
      "@type": "ApplicableNodeResult",
      "meetsRequirement": false,
      "targetNode": "#foo" // TODO: Figure out how to allow selectors in place of nodes in JSON-LD
    }, {
      "@type": "ApplicableNodeResult",
      "meetsRequirement": true,
      "targetNode": "#bar"
    }]
  }, {
    // Test on a page embedded in JSON
    "@type": "UITestResult",
    "outcome": "passed",
    "userInterface": {
      // TODO: This is probably defined by EARL somewhere, should use that
      "@type": "WebPageDescription",
      "url": "https://localhost:9876/tests/integration/duplicate-id.html",
      "mimetype": "text/html",
      "raw": "<!doctype>
<htmL lang=\"nl\">
  <script src=\"script.js\"></script>
  <div id=\"foo\"></div>
  <div id=\"bar\"></div>
</html>",
      "assets": [{
        "@type": "???",
        "url": "https://localhost:9876/tests/integration/script.js",
        "raw": "document.onload = function () {
  var shadow = document.querySelector('div').attachShadow({ mode: 'open' })
  shadow.innerHTML = '<div id=\"foo\"></div>'
}"
      }]
    },
    "nodeResults": [{
      "@type": "ApplicableNodeResult",
      "meetsRequirement": true, // fail
      "targetNode": "#foo"
    }]
  }]
}
```
