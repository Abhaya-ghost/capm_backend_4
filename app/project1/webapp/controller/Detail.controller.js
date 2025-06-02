sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
  ], function (Controller, History) {
    "use strict";
  
    return Controller.extend("project1.controller.Detail", {
      onInit: function () {
        const router = this.getOwnerComponent().getRouter();
        router.getRoute("detail").attachPatternMatched(this.onRouteMatched, this);
      },
  
      onRouteMatched: function (oEvent) {
        const id = decodeURIComponent(oEvent.getParameter("arguments").id);
        const sPath = `/OrderDetails(${id})`;
        this.getView().bindElement({ path: sPath });
      },
  
      onNavBack: function () {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();
  
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this.getOwnerComponent().getRouter().navTo("tilelist", {}, true);
        }
      }
    });
  });
  