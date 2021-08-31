import {Client} from '@notionhq/client'
import {NOTION_KEY, NOTION_DATABASE_ID} from './config.js'

const notion = new Client({ auth: NOTION_KEY })

const databaseId = NOTION_DATABASE_ID

async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California")
addItem("Yurts in Big Sur2, California2")