'use server'

import { createNotionPage, updateNotionPage, queryNotionDatabase } from "@/tools/notion/notion-server";
import { IResponse } from "@/interfaces";

const NOTION_CONTACT_DATABASE_ID = process.env.NOTION_CONTACT_DATABASE_ID || '';

type NotionContactParams = {
  userId: string;
  email: string;
  firstName?: string;
  lastName?: string;
  source: string;
  tags?: string;
};

export async function createNotionContactPage(params: NotionContactParams): Promise<IResponse<any>> {
  try {
    const { userId, email, firstName, lastName, source, tags } = params;
    
    const filterForExistingInActiveContact = {
      and: [
        {
          property: 'Email',
          "rich_text": {
            "contains": email
          }
        },
        {
          property: 'Status',
          "status": {
            "equals": "Inactive"
          }
        }
      ]
    }
    const existingInActiveContacts = await queryNotionDatabase(NOTION_CONTACT_DATABASE_ID, undefined, filterForExistingInActiveContact, undefined)
    if(existingInActiveContacts.results.length > 0) {
      console.log('Contact already exists but is inactive')
      // update inactive to active contact
      await updateNotionPage(existingInActiveContacts.results[0].id, {
        "Status": {
          "status": {
            "name": "Active"
          }
        },
      })
      return { success: true }
    }
    const filterForExistingContact = {
      property: 'Email',
      "rich_text": {
        "contains": email
      }
    }
    const existingContacts = await queryNotionDatabase(NOTION_CONTACT_DATABASE_ID, undefined, filterForExistingContact, undefined)
    if(existingContacts.results.length > 0) {
      console.log('Contact already exists')
      return { success: true }
    }
    const notionContactInsert = {
      "UserId": {
        "rich_text": [{
          "text": {
            "content": userId
          }
        }]
      },
      "Email": {
        "rich_text": [{
          "text": {
            "content": email
          }
        }]
      },
      "FirstName": {
        "rich_text": [{
          "text": {
            "content": firstName || ''
          }
        }]
      },
      "LastName": {
        "rich_text": [{
          "text": {
            "content": lastName || ''
          }
        }]
      },
      "Status": {
        "status": {
          "name": "Active"
        }
      },
      "Source": {
        "rich_text": [{
          "text": {
            "content": source || ''
          }
        }]
      },
      "Tags": {
        "rich_text": [{
          "text": {
            "content": tags || ''
          }
        }]
      },
    }
    await createNotionPage(NOTION_CONTACT_DATABASE_ID, notionContactInsert);
    return { success: true }
  } catch (error) {
    console.error('Failed to create Notion contact page:', error instanceof Error ? error.stack : undefined);
    throw new Error('Failed to create Notion contact page');
  }
}

export async function updateNotionContactPage(params: { userId: string; tags?: string }) {
  try {
    const filter = {
      property: 'UserId',
      "rich_text": {
        "contains": params.userId
      }
    }
    const contacts = await queryNotionDatabase(NOTION_CONTACT_DATABASE_ID, undefined, filter, undefined)
    const notionContactUpdate = {
      "Status": {
        "status": {
          "name": "Inactive"
        }
      },
    }
    await updateNotionPage(contacts.results[0].id, notionContactUpdate);
    return { success: true }
  } catch (error) {
    console.error('Failed to update Notion contact page:', error instanceof Error ? error.stack : undefined);
    throw new Error('Failed to update Notion contact page');
  }
}
