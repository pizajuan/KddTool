Template.newDataset.helpers({
	completeName: function() {
		if(Meteor.user()){
			return (Meteor.user().profile.name+' '+Meteor.user().profile.lastName);
		}
	}
});

Template.newDataset.events({
	'submit form'(event, template) {
	    event.preventDefault();
	    var name = template.find('#name').value;
	    var description = template.find('#description').value;
	    var nRows = template.find('#numberRows').value;
	    var nFields = template.find('#numberFields').value;
	    // var user = template.find('.author').value;
	    var dirCluster = template.find('#address').value;
	    var dataset =
	    {
	    	name: name,
			desc: description,
			num_rows: nRows,
			num_fields: nFields,
			address: dirCluster
	    }
    // console.log('dataset created');
    	console.log(dataset);
    	// DataSets.insert(dataset);
    	Meteor.call('insertDataset', dataset);
    	Meteor.call('createDatasetInHDFS','nombre_dataset');
    	FlowRouter.go('datasets');
   //  DataSets.insert(Meteor.userId(),
   //  	{
	  //   	'name': name,
			// 'desc': description,
			// 'num_rows': nRows,
			// 'num_fields': nFields,
			// 'address': dirCluster,
			// 'author': Meteor.userId()
	  //   });

  	},

	'click .btn-back' (event, template) {
    	event.preventDefault();
   		FlowRouter.go('datasets');
  },
})