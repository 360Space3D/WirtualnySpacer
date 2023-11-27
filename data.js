var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano-m2-korytarz",
      "name": "pano m2 korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.2528368862348582,
        "pitch": -0.017214623832707332,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": 0.5006783738971734,
          "pitch": 0.054370736299617306,
          "rotation": 0.7853981633974483,
          "target": "2-pano-m2-salon"
        },
        {
          "yaw": 1.2583999539316864,
          "pitch": 0.06265600731386556,
          "rotation": 0,
          "target": "1-pano-m2-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pano-m2-azienka",
      "name": "pano m2 łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.30190947320665273,
        "pitch": 0.056210581386036296,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -1.2221648398814153,
          "pitch": 0.11890073113215927,
          "rotation": 0,
          "target": "0-pano-m2-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pano-m2-salon",
      "name": "pano m2 salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.9675466233797714,
        "pitch": 0.19513427474577583,
        "fov": 1.5616123048243022
      },
      "linkHotspots": [
        {
          "yaw": -2.4467491773255787,
          "pitch": 0.020113642415672928,
          "rotation": 4.71238898038469,
          "target": "0-pano-m2-korytarz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
