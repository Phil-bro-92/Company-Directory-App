$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(1000)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
$(document).ready(function () {
  populateTable();
  populateDeptTable();
  populateLocationTable();
  populateDepartments();
  populateLocations();
});
$("#addEmployeeBtn").on("click", function () {
  $("#addEmployeeForm input").val("");
});
$("#addDepartmentBtn").on("click", function () {
  $("#addDepartmentForm input").val("");
});
$("#addLocationBtn").on("click", function () {
  $("#addLocationForm input").val("");
});
$("#addEmployeeForm").submit(function (e) {
  e.preventDefault();
  addEmployee();
  $(`#myTable tr`).remove();
  setTimeout(function () {
    populateTable();
  }, 500);
  $(`#addEmployeeModal`).modal("hide");
  $("#addEmployeeForm").trigger("reset");
});
$("#addDepartmentForm").submit(function (e) {
  e.preventDefault();
  addDepartment();
  $(`#deptTable tr`).remove();
  setTimeout(function () {
    populateDeptTable();
  }, 500);
  $(`#addDepartmentModal`).modal("hide");
  $("#addDepartmentForm").trigger("reset");
});
$("#addLocationForm").submit(function (e) {
  e.preventDefault();
  addLocation();
  $(`#locationTable tr`).remove();
  setTimeout(function () {
    populateLocationTable();
  }, 500);
  $(`#addLocationModal`).modal("hide");
  $("#addLocationForm").trigger("reset");
});
$("#editEmployeeForm").submit(function (e) {
  e.preventDefault();
  editEmployee();
  $(`#myTable tr`).remove();
  setTimeout(function () {
    populateTable();
  }, 500);
  $("#editEmployeeModal").modal("hide");
});
$("#editDepartmentForm").submit(function (e) {
  e.preventDefault();
  editDepartment();
  $(`#deptTable tr`).remove();
  $(`#myTable tr`).remove();
  setTimeout(function () {
    populateDeptTable();
    populateTable();
  }, 500);
  $("#editDepartmentModal").modal("hide");
});
$("#editLocationForm").submit(function (e) {
  e.preventDefault();
  editLocation();
  $(`#locationTable tr`).remove();
  $(`#deptTable tr`).remove();
  $(`#myTable tr`).remove();
  setTimeout(function () {
    populateLocationTable();
    populateDeptTable();
    populateTable();
  }, 500);

  $("#editLocationModal").modal("hide");
});
$("#deleteDepartmentModal").click(function () {
  departmentDependency();
});
$("#deleteLocationModal").click(function () {
  locationDependency();
});
$("#deleteEmployee1").submit(function (e) {
  e.preventDefault();
  deleteEmployee();
  $(`#myTable tr`).remove();
  setTimeout(function () {
    populateTable();
  }, 500);
  $("#deleteEmployeeCheck").modal("hide");
});
$("#deleteDepartment1").submit(function (e) {
  e.preventDefault();
  deleteDepartment();
  $(`#deptTable tr`).remove();
  setTimeout(function () {
    populateDeptTable();
  }, 500);
  $("#deleteDepartmentCheck").modal("hide");
});
$("#deleteLocation1").submit(function (e) {
  e.preventDefault();
  deleteLocation();
  $(`#locationTable tr`).remove();
  setTimeout(function () {
    populateLocationTable();
  }, 500);
  $("#deleteLocationCheck").modal("hide");
});
$("#refreshBtn").on("click", function () {
  $("#searchBar").val("");
  $("#searchBar").hide();
  $(`#myTable tr`).remove();
  setTimeout(function () {
    populateTable();
  }, 100);
  $(`#deptTable tr`).remove();
  setTimeout(function () {
    populateDeptTable();
  }, 100);
  $(`#locationTable tr`).remove();
  setTimeout(function () {
    populateLocationTable();
  }, 100);
});
$("#upBtn").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 100);
});
$("#searchBar").on("keyup", function () {
  searchEmployee();
  searchLocation();
  searchDepartment();
});
$("#searchBtn").click(() => {
  $("#searchBar").toggle("slide");
});
function searchEmployee() {
  $.ajax({
    url: "php/searchPersonnel.php",
    type: "POST",
    dataType: "json",
    data: "name=" + $("#searchBar").val(),
    success: function (result) {
      const data = result.data.personnel;
      $("#myTable tr").hide();
      for (i = 0; i < data.length; i++) {
        $("#employee-" + data[i].id).show();
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function searchLocation() {
  $.ajax({
    url: "php/searchLocation.php",
    type: "POST",
    dataType: "json",
    data: "name=" + $("#searchBar").val(),
    success: function (result) {
      const data = result.data.personnel;
      $("#locationTable tr").hide();
      for (i = 0; i < data.length; i++) {
        $("#location-" + data[i].locationID).show();
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function searchDepartment() {
  $.ajax({
    url: "php/searchDepartment.php",
    type: "POST",
    dataType: "json",
    data: "name=" + $("#searchBar").val(),
    success: function (result) {
      const data = result.data.personnel;

      $("#deptTable tr").hide();
      for (i = 0; i < data.length; i++) {
        $("#department-" + data[i].id).show();
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function populateDepartments() {
  $.ajax({
    url: "php/getAllDepartments.php",
    type: "GET",
    dataType: "json",
    success: function (result) {
      const data = result.data;
      $("#departmentDropdown2").append(
        "<option selected disabled value=''>Department</option>"
      );
      for (i = 0; i < data.length; i++) {
        $("#departmentDropdown2").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
      $("#departmentDropdown3").append("<option disabled>Department</option>");
      for (i = 0; i < data.length; i++) {
        $("#departmentDropdown3").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
      $("#departmentDropdown4").append(
        "<option selected disabled>Department</option>"
      );
      for (i = 0; i < data.length; i++) {
        $("#departmentDropdown4").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function populateLocations() {
  $.ajax({
    url: "php/getAllLocations.php",
    type: "GET",
    dataType: "json",
    success: function (result) {
      const data = result.data;
      $("#locationDropdown3").append("<option disabled>Location</option>");
      for (i = 0; i < data.length; i++) {
        $("#locationDropdown3").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
      $("#locationDropdown4").append(
        "<option selected disabled value=''>Location</option>"
      );
      for (i = 0; i < data.length; i++) {
        $("#locationDropdown4").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
      $("#locationDropdown5").append(
        "<option selected disabled>Location</option>"
      );
      for (i = 0; i < data.length; i++) {
        $("#locationDropdown5").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
      $("#locationDropdown6").append(
        "<option selected disabled>Location</option>"
      );
      for (i = 0; i < data.length; i++) {
        $("#locationDropdown6").append(
          "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
        );
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function populateTable() {
  $.ajax({
    url: "php/getAll.php",
    type: "GET",
    dataType: "json",
    success: function (result) {
      const data = result.data;
      for (i = 0; i < data.length; i++) {
        $("#myTable").append(
          "<tr id='employee-" +
            data[i].id +
            "' onclick='loadEmployeeModalData(" +
            data[i].id +
            ")' data-toggle='modal' data-target='#editEmployeeModal'><td  class='employeeCells'><i class='fa-solid fa-person'></i> <b><span class='lastName'>" +
            data[i].lastName +
            "</span></b>, <span class='firstName'>" +
            data[i].firstName +
            "</span></td><td class='jobTitleCells'><i class='fa-solid fa-briefcase'></i> " +
            data[i].jobTitle +
            "</td><td class='emailCells'><i class='fa-solid fa-envelope en'></i> " +
            data[i].email +
            "</td><td class='departmentCells'><i class='fa-solid fa-city fc'></i><span value='" +
            data[i].departmentID +
            "'> " +
            data[i].department +
            "</span></td><td class='locationCells'><i class='fa-solid fa-location-dot ld'></i><span value='" +
            data[i].locationID +
            "'> " +
            data[i].location +
            "</span></td><td class='float-right'><button class='stopProp1-" +
            data[i].id +
            " deleteCells btn btn-danger' onclick='deleteEmployeeModal(" +
            data[i].id +
            ")'><i class='fa-regular fa-trash-can main-trash'></i></button></td></tr>"
        );
        $(".stopProp1-" + data[i].id).on("click", function (e) {
          e.stopPropagation();
        });
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function populateDeptTable() {
  $.ajax({
    url: "php/getAllDepartments.php",
    type: "GET",
    dataType: "json",
    success: function (result) {
      const data = result.data;
      for (i = 0; i < data.length; i++) {
        $("#deptTable").append(
          "<tr id='department-" +
            data[i].id +
            "'onclick='loadDepartmentModalData(" +
            data[i].id +
            ")' data-toggle='modal' data-target='#editDepartmentModal'><td><i class='fa-solid fa-city fc'></i><span value='" +
            data[i].id +
            "'> " +
            data[i].name +
            "</span></td>" +
            "<td class='locationCells1'><i class='fa-solid fa-location-dot ld'></i><span value='" +
            data[i].locationID +
            "'> " +
            data[i].location +
            "</span></td><td class='float-right'><button class='stopProp2-" +
            data[i].id +
            " deleteCells btn btn-danger' onclick='departmentDependency(" +
            data[i].id +
            ", " +
            '"' +
            data[i].name +
            '"' +
            ")'><i class='fa-regular fa-trash-can main-trash'></i></button></td></tr>"
        );
        $(".stopProp2-" + data[i].id).on("click", function (e) {
          e.stopPropagation();
        });
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function populateLocationTable() {
  $.ajax({
    url: "php/getAllLocations.php",
    type: "GET",
    dataType: "json",
    success: function (result) {
      const data = result.data;
      for (i = 0; i < data.length; i++) {
        $("#locationTable").append(
          "<tr id='location-" +
            data[i].id +
            "' onclick='loadLocationModalData(" +
            data[i].id +
            ")' data-toggle='modal' data-target='#editLocationModal'><td  class='col-10'><i class='fa-solid fa-location-dot ld'></i><span value='" +
            data[i].id +
            "'> " +
            data[i].name +
            "</span></td><td class='float-right'><button class='stopProp3-" +
            data[i].id +
            " btn btn-danger' onclick='locationDependency(" +
            data[i].id +
            ", " +
            '"' +
            data[i].name +
            '"' +
            ")'><i class='fa-regular fa-trash-can main-trash'></i></button></td></tr>"
        );
        $(".stopProp3-" + data[i].id).on("click", function (e) {
          e.stopPropagation();
        });
      }
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function addEmployee() {
  $.ajax({
    url: "php/insertEmployee.php",
    type: "POST",
    dataType: "json",
    data:
      "firstName=" +
      $("#newFirstName").val() +
      "&lastName=" +
      $("#newLastName").val() +
      "&jobTitle=" +
      $("#newJobTitle").val() +
      "&email=" +
      $("#newEmail").val() +
      "&departmentID=" +
      $("#departmentDropdown2").val(),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function addDepartment() {
  $.ajax({
    url: "php/insertDepartment.php",
    type: "POST",
    dataType: "json",
    data:
      "name=" +
      $("#newDepartment").val() +
      "&locationID=" +
      $("#locationDropdown4").val(),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function addLocation() {
  $.ajax({
    url: "php/insertLocation.php",
    type: "POST",
    dataType: "json",
    data: "name=" + $("#newLocation").val(),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function loadEmployeeModalData(id) {
  $.ajax({
    url: "php/getPersonnelByID.php",
    type: "GET",
    dataType: "json",
    data: "id=" + id,
    success: function (result) {
      const data = result.data.personnel[0];
      $("#editEmployeeID").val(id);
      $("#firstName").val(data.firstName).html();
      $("#firstName").attr("value", id);
      $("#lastName").val(data.lastName).html();
      $("#jobTitle").val(data.jobTitle).html();
      $("#email").val(data.email).html();
      $("#departmentDropdown3").val(data.departmentID).attr("value");
      $("#emailLink")
        .attr("href", "mailto:" + data.email)
        .html();
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function loadDepartmentModalData(id) {
  $.ajax({
    url: "php/getDepartmentByID.php",
    type: "GET",
    dataType: "json",
    data: "id=" + id,
    success: function (result) {
      const data = result.data.personnel[0];

      $("#editDepartment").val(data.departmentName).html();
      $("#editDepartment").attr("value", data.departmentID);
      $("#locationDropdown5").val(data.locationID).attr("value");
      $("#departmentDropdown4").val(data.departmentID).attr("value");
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function loadLocationModalData(id) {
  $.ajax({
    url: "php/getLocationByID.php",
    type: "GET",
    dataType: "json",
    data: "id=" + id,
    success: function (result) {
      const data = result.data[0][0];

      $("#editLocation").val(data.name).html();
      $("#editLocation").attr("value", data.id);
      $("#locationDropdown6").val(data.id).attr("value");
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function editEmployee() {
  $.ajax({
    url: "php/updatePersonnel.php",
    type: "POST",
    dataType: "json",
    data:
      "firstName=" +
      $("#firstName").val() +
      "&lastName=" +
      $("#lastName").val() +
      "&jobTitle=" +
      $("#jobTitle").val() +
      "&email=" +
      $("#email").val() +
      "&departmentID=" +
      $("#departmentDropdown3").val() +
      "&ID=" +
      $("#firstName").attr("value"),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function editDepartment() {
  $.ajax({
    url: "php/updateDepartment.php",
    type: "POST",
    dataType: "json",
    data:
      "name=" +
      $("#editDepartment").val() +
      "&locationID=" +
      $("#locationDropdown5").val() +
      "&departmentID=" +
      $("#editDepartment").attr("value"),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function editLocation() {
  $.ajax({
    url: "php/updateLocation.php",
    type: "POST",
    dataType: "json",
    data:
      "name=" +
      $("#editLocation").val() +
      "&ID=" +
      $("#editLocation").attr("value"),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function departmentDependency(id, dept) {
  $.ajax({
    type: "POST",
    url: "php/getDepartmentDependency.php",
    data: "id=" + id,
    success: function (result) {
      const data = result.data[0];
      if (data.employeeCount === 0) {
        deleteDepartmentModal(id);
      } else {
        $("#dependencyDepartmentName").html(dept);
        $("#EmployeeNumber").html(data.employeeCount);
        $("#dependencyDepartmentCheck").modal("show");
      }
    },
    error: function (errorThrown) {
      alert(errorThrown);
    },
  });
}
function locationDependency(id, loc) {
  $.ajax({
    type: "POST",
    url: "php/getLocationDependency.php",
    data: "id=" + id,
    success: function (result) {
      const data = result.data[0];
      if (data.departmentCount === 0) {
        deleteLocationModal(id);
      } else {
        $("#dependencyLocationName").html(loc);
        $("#departmentNumber").html(data.departmentCount);
        $("#dependencyLocationCheck").modal("show");
      }
    },
    error: function (errorThrown) {
      alert(errorThrown);
    },
  });
}
function deleteEmployeeModal(id) {
  $.ajax({
    url: "php/getPersonnelByID.php",
    type: "GET",
    dataType: "json",
    data: "id=" + id,
    success: function (result) {
      const data = result.data.personnel[0];
      $("#deleteFirstName").html(data.firstName);
      $("#deleteLastName").html(data.lastName);
      $("#deleteEmployeeCheck").val(data.id);
      $("#deleteEmployeeCheck").modal("show");
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function deleteDepartmentModal(id) {
  $.ajax({
    url: "php/getDepartmentByID.php",
    type: "GET",
    dataType: "json",
    data: "id=" + id,
    success: function (result) {
      const data = result.data.personnel[0];
      console.log(result);
      $("#deleteDepartmentName").html(data.departmentName);
      $("#deleteDepartmentCheck").val(data.departmentID);
      $("#deleteDepartmentCheck").modal("show");
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function deleteLocationModal(id) {
  $.ajax({
    url: "php/getLocationByID.php",
    type: "POST",
    dataType: "json",
    data: "id=" + id,
    success: function (result) {
      const data = result.data[0][0];

      $("#deleteLocationName").html(data.name);
      $("#deleteLocationCheck").val(data.id);
      $("#deleteLocationCheck").modal("show");
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function deleteEmployee() {
  $.ajax({
    url: "php/deletePersonnelByID.php",
    type: "POST",
    dataType: "json",
    data: "id=" + $("#deleteEmployeeCheck").val(),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function deleteDepartment() {
  $.ajax({
    url: "php/deleteDepartmentByID.php",
    type: "POST",
    dataType: "json",
    data: "id=" + $("#deleteDepartmentCheck").val(),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
function deleteLocation() {
  $.ajax({
    url: "php/deleteLocationByID.php",
    type: "POST",
    dataType: "json",
    data: "id=" + $("#deleteLocationCheck").val(),
    success: function () {},
    error: function (errorThrown) {
      console.log(errorThrown);
    },
  });
}
