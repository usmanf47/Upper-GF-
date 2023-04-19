var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.5254124695836246,
        "pitch": 0.021628030538607845,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 1.4822341715087024,
          "pitch": -0.023249442941182252,
          "rotation": 0,
          "target": "1-bar-area"
        },
        {
          "yaw": -0.43957636352168095,
          "pitch": 0.15671969359866011,
          "rotation": 5.497787143782138,
          "target": "4-bedroom-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bar-area",
      "name": "Bar Area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.7436635207521327,
        "pitch": 0.10399868737227891,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -2.6639793808110745,
          "pitch": 0.18702134327920916,
          "rotation": 0,
          "target": "0-lobby"
        },
        {
          "yaw": -1.7847703536226884,
          "pitch": 0.11676252006645171,
          "rotation": 0,
          "target": "3-kitchen"
        },
        {
          "yaw": 0.006463747346987958,
          "pitch": 0.08796491958274189,
          "rotation": 1.5707963267948966,
          "target": "2-dinning-area"
        },
        {
          "yaw": 1.1839830834757112,
          "pitch": 0.11391825571945446,
          "rotation": 0,
          "target": "2-dinning-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dinning-area",
      "name": "Dinning Area",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.776953052596694,
          "pitch": 0.1749980321119331,
          "rotation": 4.71238898038469,
          "target": "1-bar-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.941111379953229,
        "pitch": 0.006076506990027042,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -1.304458962093186,
          "pitch": 0.06469514950764932,
          "rotation": 0,
          "target": "1-bar-area"
        },
        {
          "yaw": -2.951439712658704,
          "pitch": 0.059563596836396115,
          "rotation": 1.5707963267948966,
          "target": "1-bar-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-",
      "name": "Bedroom ",
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
        "yaw": 0.9120199918507499,
        "pitch": 0.20631356268055434,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -3.012861460460595,
          "pitch": 0.21245821808490462,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Upper UG",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
