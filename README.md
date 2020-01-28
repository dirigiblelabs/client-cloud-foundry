# Cloud Foundry Client for Eclipse Dirigible

[![Eclipse License](http://img.shields.io/badge/license-Eclipse-brightgreen.svg)](LICENSE)
[![GitHub contributors](https://img.shields.io/github/contributors/dirigiblelabs/client-cloud-foundry.svg)](https://github.com/dirigiblelabs/client-cloud-foundry/graphs/contributors)

## Overview
1. **Set-up:**
```
TBD
```

2. **Usage:**
```javascript
var response = require("http/v4/response");
var destinationService = require("cloud-foundry/services/destination");

var destination = destinationService.getDestination("my-destination");

response.print(JSON.stringify(destination));
```

## License

This project is copyrighted by [SAP SE](http://www.sap.com/) and is available under the [Eclipse Public License v 1.0](https://www.eclipse.org/legal/epl-v10.html). See [LICENSE](LICENSE) and [NOTICE.txt](NOTICE.txt) for further details.
