const orderObject = new function(){
    this.id = null,
    this.customer = {
        customerName: null,
        customerCode: null,
        delivery: null,
        deliveryCode: null,
        seller: null,
        bank: null,
        payment: null,
        billNo: null
    },
    this.product = [{
        productId: null,
        brand: null,
        size: null,
        productType: null,
        content: [{
            contentId: null,
            contentName: null,
            contentPiece: null,
            readySizeSelected: false,
            contentReadySize: null,
            contentHeight: null,
            contentWidth: null,
            weightSelected: false,
            contentWeight: null,
            contentSticth: null
        }],
        pack: null,
        productDesign: [{
            designId: null,
            designGroups: null,
            designPatterns: null,
            designColors: null,
            amount: null,
        }],
        pricing: {
            totalNumber: this.product.productDesign.reduce((total, val) => total + val.amount, 0),
            unitSize: null,
            price: null,
            curreneyUnit: null,
            totalPrice: orderObject.p
        }
    }]

  }
  
  export default orderObject;