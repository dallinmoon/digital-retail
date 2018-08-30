// TABLES

$(document).ready(function (){
  var table = $('#usdTable1').DataTable({
    "lengthMenu": [[-1, 5, 10, 25, 50], ["All", 5, 10, 25, 50]],
    "pagingType": "simple_numbers",
    "language": {
      "lengthMenu": "Page Size: _MENU_",
      "info": "_START_ - _END_ of _TOTAL_",
      "paginate": {
        "previous": '<i class="fa fa-angle-left"></i>',
        "next": '<i class="fa fa-angle-right"></i>',
      }
    },
    'columnDefs': [
      {
          'targets': 0,
          'checkboxes': {
            'selectRow': true
          }
      }
    ],
    'select': {
      'style': 'multi'
    },
    'order': [[1, 'asc']]
  });

  var table = $('#usdTable2').DataTable({
    "lengthMenu": [[-1, 5, 10, 25, 50], ["All", 5, 10, 25, 50]],
    "pagingType": "simple_numbers",
    "language": {
      "lengthMenu": "Page Size: _MENU_",
      "info": "_START_ - _END_ of _TOTAL_",
      "paginate": {
        "previous": '<i class="fa fa-angle-left"></i>',
        "next": '<i class="fa fa-angle-right"></i>',
      }
    },
    'columnDefs': [
      {
          'targets': 0,
          'checkboxes': {
            'selectRow': true
          }
      }
    ],
    'select': {
      'style': 'multi'
    },
    'order': [[1, 'asc']],
    fixedHeader: true
  });
});