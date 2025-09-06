const Temple = require("../models/Temple");
const { uploadToImgBB } = require("./imgbbService");
class TempleService {
  async createTemple(data, files) {
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
      const templeData = {
        ...data,
        images: imageUrls,
        images_hi: imageHiUrls,
      };

      const temple = await Temple.create(templeData);
      return temple;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllTemples() {
    return await Temple.find();
  }

  async getTempleById(id) {
    return await Temple.findById(id);
  }

  async updateTemple(id, data, files) {
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

      const updatedTemple = await Temple.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      return updatedTemple;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteTemple(id) {
    return await Temple.findByIdAndDelete(id);
  }
}

module.exports = new TempleService();
