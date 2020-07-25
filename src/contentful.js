import { createClient } from "contentful";

class ContentfulAdapter {
  constructor() {
    this.client = createClient({
      space: process.env.VUE_APP_TF_SPACE_ID,
      accessToken: process.env.VUE_APP_CTF_ACCESS_TOKEN
    });
  }

  async getAllData() {
    return this.client.getEntries();
  }

  async getAbout(){
    return this.client.getEntry('6Y7EIx73nUCWuoIWcsuM00');
  }

  async getProjects(){
      return this.client.getEntries({content_type: "project"});
  }
}

export default new ContentfulAdapter(); //Singleton