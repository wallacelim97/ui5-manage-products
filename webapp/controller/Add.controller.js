sap.ui.define([
	"opensap/manageproducts/ManageProducts/controller/BaseController",
	"sap/ui/core/routing/History"
], function(BaseController, History) {
	"use strict";
	
	return BaseController.extend("opensap.manageproducts.ManageProducts.controller.Add", {
		
		/* =========================================================== */
		/* Lifecycle Methods                                           */
		/* =========================================================== */
		
		/**
		 * Called when the add controller is instantiated.
		 * @public
		 */
		onInit: function() {
			//Register to the add route matched
			this.getRouter().getRoute("add").attachPatternMatched(this._onRouteMatched, this);
		},
		
		/* =========================================================== */
		/* Event Handlers                                           */
		/* =========================================================== */
		
		_onRouteMatched : function () {
			
		},
		
		onNavBack : function() {
			var oHistory = History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash();
				
			if (sPreviousHash !== undefined) {
				//The history contains a previous entry
				history.go(-1);
			} else {
				//Otherwise, go backwards with a forward history
				var bReplace = true;
				this.getRouter().navTo("worklist", {}, bReplace);
			}
		}
	});
});