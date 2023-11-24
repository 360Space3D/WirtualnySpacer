var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano-m7-korytarz",
      "name": "pano m7 korytarz",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.034400110031711506,
          "pitch": 0.03711384457915479,
          "rotation": 0,
          "target": "2-pano-m7-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pano-m7-azienka",
      "name": "pano m7 łazienka",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.935196266221066,
          "pitch": 0.06657614129912304,
          "rotation": 0,
          "target": "2-pano-m7-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pano-m7-salon",
      "name": "pano m7 salon",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.72395311938849,
          "pitch": -0.007497962811916281,
          "rotation": 0,
          "target": "1-pano-m7-azienka"
        },
        {
          "yaw": -1.4739047020660578,
          "pitch": -0.023008790266487722,
          "rotation": 0,
          "target": "3-pano-m7-sypialnia"
        },
        {
          "yaw": -0.15479239272466216,
          "pitch": 0.02774436347645093,
          "rotation": 0,
          "target": "0-pano-m7-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pano-m7-sypialnia",
      "name": "pano m7 sypialnia",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9217058550530801,
          "pitch": 0.007649437801845238,
          "rotation": 0,
          "target": "2-pano-m7-salon"
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
