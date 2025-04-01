import { Client } from "@notionhq/client"

// Initializing a client
const notion = new Client({
	auth: process.env.NOTION_API_KEY,
})

export async function createNotionPage(databaseId: string, params: any) {
  try {
    console.log(`Creating Notion page...`);
    const response = await notion.pages.create({ parent: { database_id: databaseId }, properties: params });
    console.log(`Created Notion page successfully`);
    return response
  } catch (error) {
    console.error('Failed to create Notion page:', error instanceof Error ? error.stack : undefined);
    throw new Error('Failed to create Notion page');
  }
}

export async function updateNotionPage(pageId: string, params: any) {
  try {
    console.log(`Updating Notion page...`);
    const response = await notion.pages.update({ page_id: pageId, properties: params });
    console.log(`Updated Notion page successfully`);
    return response
  } catch (error) {
    console.error('Failed to update Notion page:', error instanceof Error ? error.stack : undefined);
    throw new Error('Failed to update Notion page');
  }
}

export async function queryNotionDatabase(databaseId: string, sorts?: any, filter?: any, pageSize?: any,) {
  try {
    console.log(`Querying Notion database...`);
    const response = await notion.databases.query({ database_id: databaseId, sorts, page_size: pageSize, filter });
    console.log(`Querying Notion database successfully`);
    return response
  } catch (error) {
    console.error('Failed to query Notion database:', error instanceof Error ? error.stack : undefined);
    throw new Error('Failed to query Notion database');
  }
}

export default notion