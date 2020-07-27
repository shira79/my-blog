import { createClient } from "contentful";

class ContentfulAdapter {
  constructor() {
    this.client = createClient({
      space: process.env.VUE_APP_TF_SPACE_ID,
      accessToken: process.env.VUE_APP_CTF_ACCESS_TOKEN
    });
  }

  getTop(){
    return this.client.getEntry('4OnpxVgQFBiX8lgvVGfyL4');
  }

  getAboutMe(){
    return this.client.getEntry('1FrXSeuQRry6jFapXaZZcv');
  }

  getBlogs(){
    return this.client.getEntries({
      'content_type': 'blog'
    })
  }

  getBlog(id){
    return this.client.getEntry(id);
  }


}

export default new ContentfulAdapter();