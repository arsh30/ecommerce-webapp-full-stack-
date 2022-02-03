//after making routes of product -> add features like filters, pagination, search on this basis of filter
class ApiFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  //search features
  // -> making function isme public static kuch nhi hota so direct aise access krege
  search() {
    //to access the keyword
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i", //i means case insensititive
          },
        }
      : {};

    console.log(keyword);
    this.query = this.query.find({ ...keyword }); //means jo product.find mila hai query me usi ko change krna hai
    //  or isi me catch krre hai
    return this;
  }
}
module.exports = ApiFeature;
