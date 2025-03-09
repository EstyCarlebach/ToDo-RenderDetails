
export const getAll = (req, res) => {
res.status(200).send(
    [
        {
          "cursor": "TPIG4ZQCScQ2b2luOTFyYzczZDJlbmtn",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-05T15:53:07.272625Z",
            "dashboardUrl": "https://dashboard.render.com/web/srv-cv476oin91rc73d2enkg",
            "id": "srv-cv476oin91rc73d2enkg",
            "name": "ToDo-Server",
            "notifyOnFail": "default",
            "ownerId": "tea-cv3gb3qn91rc739fjbr0",
            "repo": "https://github.com/EstyCarlebach/ToDo-Server",
            "rootDir": "",
            "serviceDetails": {
              "buildPlan": "starter",
              "env": "docker",
              "envSpecificDetails": {
                "dockerCommand": "",
                "dockerContext": ".",
                "dockerfilePath": "./Dockerfile"
              },
              "healthCheckPath": "",
              "maintenanceMode": {
                "enabled": false,
                "uri": ""
              },
              "numInstances": 1,
              "openPorts": null,
              "plan": "free",
              "previews": {
                "generation": "off"
              },
              "pullRequestPreviewsEnabled": "no",
              "region": "singapore",
              "runtime": "docker",
              "sshAddress": "srv-cv476oin91rc73d2enkg@ssh.singapore.render.com",
              "url": "https://todo-server-8y4z.onrender.com"
            },
            "slug": "todo-server-8y4z",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "web_service",
            "updatedAt": "2025-03-09T12:54:27.184797Z"
          }
        },
        {
          "cursor": "vglOup4SJ1tkMjVkczc4czczZTNvNWFn",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-05T12:41:44.645964Z",
            "dashboardUrl": "https://dashboard.render.com/static/srv-cv44d25ds78s73e3o5ag",
            "id": "srv-cv44d25ds78s73e3o5ag",
            "name": "ToDo-Client",
            "notifyOnFail": "default",
            "ownerId": "tea-cv3gb3qn91rc739fjbr0",
            "repo": "https://github.com/EstyCarlebach/ToDo-Client",
            "rootDir": "",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "buildPlan": "starter",
              "previews": {
                "generation": "off"
              },
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://todo-client-fgyc.onrender.com"
            },
            "slug": "todo-client-fgyc",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2025-03-09T12:58:24.780062Z"
          }
        },
        {
          "cursor": "L125ShEjQA4yNzhncGg2YzczOHM1M29n",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-04T16:58:06.041941Z",
            "dashboardUrl": "https://dashboard.render.com/static/srv-cv3j278gph6c738s53og",
            "id": "srv-cv3j278gph6c738s53og",
            "name": "To-Do-Client2",
            "notifyOnFail": "default",
            "ownerId": "tea-cv3gb3qn91rc739fjbr0",
            "repo": "https://github.com/EstyCarlebach/To-Do-Client",
            "rootDir": "",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "buildPlan": "starter",
              "previews": {
                "generation": "off"
              },
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://to-do-client2.onrender.com"
            },
            "slug": "to-do-client2",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2025-03-04T16:58:07.751442Z"
          }
        },
        {
          "cursor": "LdB-iY04R-dzM2QybmcxczczODB1cmEw",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-04T15:36:46.138278Z",
            "dashboardUrl": "https://dashboard.render.com/static/srv-cv3hs3d2ng1s7380ura0",
            "id": "srv-cv3hs3d2ng1s7380ura0",
            "name": "To-Do-Client1",
            "notifyOnFail": "default",
            "ownerId": "tea-cv3gb3qn91rc739fjbr0",
            "repo": "https://github.com/EstyCarlebach/To-Do-Client",
            "rootDir": "",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "buildPlan": "starter",
              "previews": {
                "generation": "off"
              },
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://to-do-client1.onrender.com"
            },
            "slug": "to-do-client1",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2025-03-04T15:56:56.248965Z"
          }
        },
        {
          "cursor": "LdB-iY04R-dsaHRkczc4czczYmRwMHJn",
          "service": {
            "autoDeploy": "yes",
            "branch": "main",
            "createdAt": "2025-03-04T15:22:47.786234Z",
            "dashboardUrl": "https://dashboard.render.com/static/srv-cv3hlhtds78s73bdp0rg",
            "id": "srv-cv3hlhtds78s73bdp0rg",
            "name": "To-Do-Client",
            "notifyOnFail": "default",
            "ownerId": "tea-cv3gb3qn91rc739fjbr0",
            "repo": "https://github.com/EstyCarlebach/To-Do-Client",
            "rootDir": "",
            "serviceDetails": {
              "buildCommand": "npm run build",
              "buildPlan": "starter",
              "previews": {
                "generation": "off"
              },
              "publishPath": "build",
              "pullRequestPreviewsEnabled": "no",
              "url": "https://to-do-client-n5l8.onrender.com"
            },
            "slug": "to-do-client-n5l8",
            "suspended": "not_suspended",
            "suspenders": [],
            "type": "static_site",
            "updatedAt": "2025-03-04T15:22:49.30168Z"
          }
        }
      ]
)
}
