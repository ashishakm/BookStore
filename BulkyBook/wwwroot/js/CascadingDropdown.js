
    $(function () {
        $("#Product_CategoryId").change(function () {

            debugger;
            $.getJSON("/Admin/Product/GetSubCategory", { catId: $("#Product_CategoryId").val() }, function (d) {
                alert("Test");
                var row = "";
                //$("#Product_SubCategoryId").empty();
                $.each(d, function (i, v) {
                    row += "<option value=" + v.value + ">" + v.text + "</option>";
                    alert(v.value);
                });

                $("#Product_SubCategoryId").html(row);

            })
        })
            $("#Product_SubCategoryId").change(function () {
                debugger;
                $.getJSON("/Admin/Product/GetMiniCategory", {subCateId: $("#Product_SubCategoryId").val() }, function (d) {
                    var row = "";
                    //$("#Product.SubSubId").empty();
                    $.each(d, function (i, v) {
        row += "<option value=" + v.value + ">" + v.text + "</option>";
                    });
                    $("#Product.SubSubId").html(row);
                })
            })
        })