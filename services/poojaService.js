const Pooja = require("../models/Pooja");
const { uploadToImgBB } = require("./imgbbService");

class PoojaService {
  async createPooja(data, files) {
    try {
      let imageUrls = [];
      let imageHiUrls = [];
      if (files?.images?.length > 0) {
        for (const file of files.images) {
          const url = await uploadToImgBB(file.path);
          imageUrls.push(url);
        }
      }
   
      if (files?.images_hi?.length > 0) {
        for (const file of files.images_hi) {
          const url = await uploadToImgBB(file.path);
          imageHiUrls.push(url);
        }
      }
      const poojaData = {
        ...data,
        images: imageUrls,
        images_hi: imageHiUrls,
      };

      return await Pooja.create(poojaData);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllPoojas() {
    return await Pooja.find();
  }

  async getPoojaById(id) {
    return await Pooja.findById(id);
  }

  async updatePooja(id, data, files) {
    try {
      let updateData = { ...data };

    if (files?.images?.length > 0) {
      let imageUrls = [];
      for (const file of files.images) {
        const url = await uploadToImgBB(file.path);
        imageUrls.push(url);
      }
      updateData.images = imageUrls;
    }

    if (files?.images_hi?.length > 0) {
      let imageHiUrls = [];
      for (const file of files.images_hi) {
        const url = await uploadToImgBB(file.path);
        imageHiUrls.push(url);
      }
      updateData.images_hi = imageHiUrls;
    }


      return await Pooja.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePooja(id) {
    return await Pooja.findByIdAndDelete(id);
  }
}

module.exports = new PoojaService();
