Template.details.helpers({
    show: function () {
      var url = Iron.Location.get().path;
      var id = url.slice(8,26);
      console.log("url === Id");
      console.log(id);
      return Sites.find({_id: id}).fetch();    
}
});