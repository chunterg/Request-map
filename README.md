Request-map
===========

Tools for ajax request debugging

## Features

  * Based on Express
  * Easy debugging

## How to use
1.Set the request url which you want to debug in config.json

    "getUserIdByName":{
		"req": {"name":"chunterg"},
		"res": {
				"success":{"data":"14","status":"ok"},
				"fail":{"message":"No match","status":"fail"}
				}
	}

2.start Request-map

	node the-tool-path/start

3.Open the url to debug

	http://localhost:3000/ajax/getUserIdByName/?name=chunterg
