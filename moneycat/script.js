$(function () {
  var intotal = 0; //総合計
  var subtotal = 0; //小計
  $("#in1_1").val(0);
  $("#in2_1").val(0);
  $("#in2_2").val(0);
  $("#in2_3").val(0);

  $("#in1_1").on("blur", function () {
    console.log("in1 1=" + $("#in1_1").val());
    var value = $("#in1_1").val();
    $("#subtotal1_1").text(value);
    intotal =
      Number($("#subtotal1_1").text()) + Number($("#subtotal2_3").text());
    $("#total_in").text(intotal);
  });

  $("#btn1_1").on("click", function () {
    var value = 0;
    $("#in1_1").val(value);
    $("#subtotal1_1").text(value);
    intotal =
      Number($("#subtotal1_1").text()) + Number($("#subtotal2_3").text());
    $("#total_in").text(intotal);
  });

  $("#in2_1").on("blur", function () {
    subtotal =
      Number($("#in2_1").val()) +
      Number($("#in2_2").val()) +
      Number($("#in2_3").val());
    $("#subtotal2_3").text(subtotal);
    intotal =
      Number($("#subtotal1_1").text()) + Number($("#subtotal2_3").text());
    $("#total_in").text(intotal);
  });

  $("#in2_2").on("blur", function () {
    subtotal =
      Number($("#in2_1").val()) +
      Number($("#in2_2").val()) +
      Number($("#in2_3").val());
    $("#subtotal2_3").text(subtotal);
    intotal =
      Number($("#subtotal1_1").text()) + Number($("#subtotal2_3").text());
    $("#total_in").text(intotal);
  });

  $("#in2_3").on("blur", function () {
    subtotal =
      Number($("#in2_1").val()) +
      Number($("#in2_2").val()) +
      Number($("#in2_3").val());
    $("#subtotal2_3").text(subtotal);
    intotal =
      Number($("#subtotal1_1").text()) + Number($("#subtotal2_3").text());
    $("#total_in").text(intotal);
  });

  $("#btn2_1").on("click", function () {
    var value = 0;
    $("#in2_1").val(value);
    $("#in2_2").val(value);
    $("#in2_3").val(value);
    $("#subtotal2_3").text(value);
    intotal =
      Number($("#subtotal1_1").text()) + Number($("#subtotal2_3").text());
    $("#total_in").text(intotal);
  });

  $("#in1_1").on("focus", function () {
    if ($("#in1_1").val() == 0) {
      $("#in1_1").val("");
    }
  });

  $("#in2_1").on("focus", function () {
    if ($("#in2_1").val() == 0) {
      $("#in2_1").val("");
    }
  });

  $("#in2_2").on("focus", function () {
    if ($("#in2_2").val() == 0) {
      $("#in2_2").val("");
    }
  });

  $("#in2_3").on("focus", function () {
    if ($("#in2_3").val() == 0) {
      $("#in2_3").val("");
    }
  });

  // 支出
  $("#out1_1").val(0);
  $("#out2_1").val(0);
  $("#out2_2").val(0);
  $("#out2_3").val(0);
  $("#out3_1").val(0);
  $("#out3_2").val(0);
  $("#out3_3").val(0);
  $("#out3_4").val(0);
  $("#out4_1").val(0);
  $("#out4_2").val(0);
  $("#out4_3").val(0);
  $("#out5_1").val(0);
  $("#out5_2").val(0);
  $("#out5_3").val(0);
  $("#out5_4").val(0);
  $("#out5_5").val(0);
  $("#out6_1").val(0);
  $("#out7_1").val(0);
  $("#out8_1").val(0);
  $("#out1_1").on("blur", function () {
    var value = $("#out1_1").val();
    $("#out_subtotal1_1").text(value);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out1_1").on("focus", function () {
    if ($("#out1_1").val() == 0) {
      $("#out1_1").val("");
    }
  });

  $("#out2_1").on("blur", function () {
    // subtotal =
    //   (Number($("#out2_1").val()) +
    //     Number($("#out2_2").val()) +
    //     Number($("#out2_3").val())) *
    //   30;
    var value = $("#out2_1").val();
    $("#out_subtotal2_3").text(value);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out2_1").on("focus", function () {
    if ($("#out2_1").val() == 0) {
      $("#out2_1").val("");
    }
  });

  // $("#out2_2").on("blur", function () {
  //   subtotal =
  //     (Number($("#out2_1").val()) +
  //       Number($("#out2_2").val()) +
  //       Number($("#out2_3").val())) *
  //     30;
  //   $("#out_subtotal2_3").text(subtotal);
  //   outtotal =
  //     Number($("#out_subtotal1_1").text()) +
  //     Number($("#out_subtotal2_3").text()) +
  //     Number($("#out_subtotal3_4").text()) +
  //     Number($("#out_subtotal4_3").text()) +
  //     Number($("#out_subtotal5_5").text()) +
  //     Number($("#out_subtotal6_1").text()) +
  //     Number($("#out_subtotal7_1").text()) +
  //     Number($("#out_subtotal8_1").text());
  //   $("#total_out").text(outtotal);
  // });
  // $("#out2_2").on("focus", function () {
  //   if ($("#out2_2").val() == 0) {
  //     $("#out2_2").val("");
  //   }
  // });

  // $("#out2_3").on("blur", function () {
  //   subtotal =
  //     (Number($("#out2_1").val()) +
  //       Number($("#out2_2").val()) +
  //       Number($("#out2_3").val())) *
  //     30;
  //   $("#out_subtotal2_3").text(subtotal);
  //   outtotal =
  //     Number($("#out_subtotal1_1").text()) +
  //     Number($("#out_subtotal2_3").text()) +
  //     Number($("#out_subtotal3_4").text()) +
  //     Number($("#out_subtotal4_3").text()) +
  //     Number($("#out_subtotal5_5").text()) +
  //     Number($("#out_subtotal6_1").text()) +
  //     Number($("#out_subtotal7_1").text()) +
  //     Number($("#out_subtotal8_1").text());
  //   $("#total_out").text(outtotal);
  // });
  // $("#out2_3").on("focus", function () {
  //   if ($("#out2_3").val() == 0) {
  //     $("#out2_3").val("");
  //   }
  // });

  $("#out3_1").on("blur", function () {
    subtotal =
      Number($("#out3_1").val()) +
      Number($("#out3_2").val()) +
      Number($("#out3_3").val()) +
      Number($("#out3_4").val());
    $("#out_subtotal3_4").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out3_1").on("focus", function () {
    if ($("#out3_1").val() == 0) {
      $("#out3_1").val("");
    }
  });

  $("#out3_2").on("blur", function () {
    subtotal =
      Number($("#out3_1").val()) +
      Number($("#out3_2").val()) +
      Number($("#out3_3").val()) +
      Number($("#out3_4").val());
    $("#out_subtotal3_4").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out3_2").on("focus", function () {
    if ($("#out3_2").val() == 0) {
      $("#out3_2").val("");
    }
  });

  $("#out3_3").on("blur", function () {
    subtotal =
      Number($("#out3_1").val()) +
      Number($("#out3_2").val()) +
      Number($("#out3_3").val()) +
      Number($("#out3_4").val());
    $("#out_subtotal3_4").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out3_3").on("focus", function () {
    if ($("#out3_3").val() == 0) {
      $("#out3_3").val("");
    }
  });

  $("#out3_4").on("blur", function () {
    subtotal =
      Number($("#out3_1").val()) +
      Number($("#out3_2").val()) +
      Number($("#out3_3").val()) +
      Number($("#out3_4").val());
    $("#out_subtotal3_4").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out3_4").on("focus", function () {
    if ($("#out3_4").val() == 0) {
      $("#out3_4").val("");
    }
  });

  $("#out4_1").on("blur", function () {
    subtotal =
      Number($("#out4_1").val()) +
      Number($("#out4_2").val()) +
      Number($("#out4_3").val());
    $("#out_subtotal4_3").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out4_1").on("focus", function () {
    if ($("#out4_1").val() == 0) {
      $("#out4_1").val("");
    }
  });

  $("#out4_2").on("blur", function () {
    subtotal =
      Number($("#out4_1").val()) +
      Number($("#out4_2").val()) +
      Number($("#out4_3").val());
    $("#out_subtotal4_3").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out4_2").on("focus", function () {
    if ($("#out4_2").val() == 0) {
      $("#out4_2").val("");
    }
  });

  $("#out4_3").on("blur", function () {
    subtotal =
      Number($("#out4_1").val()) +
      Number($("#out4_2").val()) +
      Number($("#out4_3").val());
    $("#out_subtotal4_3").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out4_3").on("focus", function () {
    if ($("#out4_3").val() == 0) {
      $("#out4_3").val("");
    }
  });

  $("#out5_1").on("blur", function () {
    subtotal =
      Number($("#out5_1").val()) +
      Number($("#out5_2").val()) +
      Number($("#out5_3").val()) +
      Number($("#out5_4").val()) +
      Number($("#out5_5").val());
    $("#out_subtotal5_5").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out5_1").on("focus", function () {
    if ($("#out5_1").val() == 0) {
      $("#out5_1").val("");
    }
  });

  $("#out5_2").on("blur", function () {
    subtotal =
      Number($("#out5_1").val()) +
      Number($("#out5_2").val()) +
      Number($("#out5_3").val()) +
      Number($("#out5_4").val()) +
      Number($("#out5_5").val());
    $("#out_subtotal5_5").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out5_2").on("focus", function () {
    if ($("#out5_2").val() == 0) {
      $("#out5_2").val("");
    }
  });

  $("#out5_3").on("blur", function () {
    subtotal =
      Number($("#out5_1").val()) +
      Number($("#out5_2").val()) +
      Number($("#out5_3").val()) +
      Number($("#out5_4").val()) +
      Number($("#out5_5").val());
    $("#out_subtotal5_5").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out5_3").on("focus", function () {
    if ($("#out5_3").val() == 0) {
      $("#out5_3").val("");
    }
  });

  $("#out5_4").on("blur", function () {
    subtotal =
      Number($("#out5_1").val()) +
      Number($("#out5_2").val()) +
      Number($("#out5_3").val()) +
      Number($("#out5_4").val()) +
      Number($("#out5_5").val());
    $("#out_subtotal5_5").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out5_4").on("focus", function () {
    if ($("#out5_4").val() == 0) {
      $("#out5_4").val("");
    }
  });

  $("#out5_5").on("blur", function () {
    subtotal =
      Number($("#out5_1").val()) +
      Number($("#out5_2").val()) +
      Number($("#out5_3").val()) +
      Number($("#out5_4").val()) +
      Number($("#out5_5").val());
    $("#out_subtotal5_5").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out5_5").on("focus", function () {
    if ($("#out5_5").val() == 0) {
      $("#out5_5").val("");
    }
  });

  $("#out6_1").on("blur", function () {
    subtotal = Number($("#out6_1").val());
    $("#out_subtotal6_1").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out6_1").on("focus", function () {
    if ($("#out6_1").val() == 0) {
      $("#out6_1").val("");
    }
  });

  $("#out7_1").on("blur", function () {
    subtotal = Number($("#out7_1").val());
    $("#out_subtotal7_1").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });
  $("#out7_1").on("focus", function () {
    if ($("#out7_1").val() == 0) {
      $("#out7_1").val("");
    }
  });

  $("#out8_1").on("blur", function () {
    subtotal = Number($("#out8_1").val());
    $("#out_subtotal8_1").text(subtotal);
    outtotal =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal2_3").text()) +
      Number($("#out_subtotal3_4").text()) +
      Number($("#out_subtotal4_3").text()) +
      Number($("#out_subtotal5_5").text()) +
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal7_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#total_out").text(outtotal);
  });

  $("#out8_1").on("focus", function () {
    if ($("#out8_1").val() == 0) {
      $("#out8_1").val("");
    }
  });

  $("#kekka_btn").on("click", function () {
    console.log($("#total_in").text());
    console.log($("#total_out").text());
    $(".sim_kekka").addClass("active");
    subtract = Number($("#total_in").text()) - Number($("#total_out").text());
    console.log(subtract);
    if (subtract < 0) {
      subtract_msg = "見直しましょう";
      $("#kekka_msg span").addClass("minus");
      $("#kekka_msg span").removeClass("plus");
      $("#kekka_msg span").text(subtract);
    } else {
      subtract_msg = "もっと見直せる部分がないか見てみよう";
      $("#kekka_msg span").addClass("plus");
      $("#kekka_msg span").removeClass("minus");
      $("#kekka_msg span").text("+" + subtract);
    }

    $("#kekka_msg2").text(subtract_msg);

    var out_kekka1_1 = 0;
    var out_kekka2_3 = 0;
    var out_kekka4_3 = 0;
    var out_kekka5_5 = 0;
    var out_kekka6_1 = 0;
    var out_kekka7_1 = 0;
    var out_kekka8_1 = 0;

    // 仕送り
    $("#in_kekka1_1").text($("#subtotal1_1").text());
    // 収入
    $("#in_kekka2_3").text($("#subtotal2_3").text());
    // 家賃
    out_kekka1_1 =
      Number($("#out_subtotal1_1").text()) +
      Number($("#out_subtotal3_4").text());
    $("#out_kekka1_1").text(out_kekka1_1);
    // 食費
    out_kekka2_3 = $("#out_subtotal2_3").text();
    $("#out_kekka2_3").text(out_kekka2_3);
    // 光熱費
    // $("#out_kekka3_4").text($("#out_subtotal3_4").text());
    // 通信費
    out_kekka4_3 = $("#out_subtotal4_3").text();
    $("#out_kekka4_3").text(out_kekka4_3);
    // 交際費
    out_kekka5_5 = $("#out_subtotal5_5").text();
    $("#out_kekka5_5").text(out_kekka5_5);
    // 生活用品費
    out_kekka6_1 =
      Number($("#out_subtotal6_1").text()) +
      Number($("#out_subtotal8_1").text());
    $("#out_kekka6_1").text(out_kekka6_1);
    // 交通費
    out_kekka7_1 = $("#out_subtotal7_1").text();
    $("#out_kekka7_1").text(out_kekka7_1);
    // 保健医療費
    // $("#out_kekka8_1").text($("#out_subtotal8_1").text());

    // analyse();
    // });

    // function analyse(){
    var baseaverage = [
      {
        category: "全体収入",
        average: 129240,
        comment: "見直してみよう！→→→",
      },

      {
        category: "全体支出",
        average: 127500,
        comment: "見直してみよう！→→→",
      },

      {
        category: "住居費＋光熱費",
        average: 54130,
        comment: "見直してみよう！→→→",
      },

      {
        category: "食費",
        average: 25880,
        comment: "見直してみよう！→→→",
      },

      {
        category: "通信費",
        average: 3190,
        comment: "見直してみよう！→→→",
      },

      {
        category: "娯楽費",
        average: 15600,
        comment: "見直してみよう！→→→",
      },

      {
        category: "生活用品＋保健医療費",
        average: 7330,
        comment: "見直してみよう！→→→",
      },

      {
        category: "交通費",
        average: 4330,
        comment: "見直してみよう！→→→",
      },

      {
        category: "その他",
        average: 2290,
        comment: "見直してみよう！→→→",
      },

      {
        category: "貯金",
        average: 14740,
        comment: "見直してみよう！→→→",
      },
    ];

    $("#out_comment1_1").text("");
    $("#out_comment2_3").text("");
    $("#out_comment4_3").text("");
    $("#out_comment5_5").text("");
    $("#out_comment6_1").text("");
    $("#out_comment7_1").text("");

    if (out_kekka1_1 > baseaverage[2]["average"]) {
      $("#out_comment1_1").text(baseaverage[2]["comment"]);
    }
    if (out_kekka2_3 > baseaverage[3]["average"]) {
      $("#out_comment2_3").text(baseaverage[3]["comment"]);
    }
    if (out_kekka4_3 > baseaverage[4]["average"]) {
      $("#out_comment4_3").text(baseaverage[4]["comment"]);
    }
    if (out_kekka5_5 > baseaverage[5]["average"]) {
      $("#out_comment5_5").text(baseaverage[5]["comment"]);
    }
    if (out_kekka6_1 > baseaverage[6]["average"]) {
      $("#out_comment6_1").text(baseaverage[6]["comment"]);
    }
    if (out_kekka7_1 > baseaverage[7]["average"]) {
      $("#out_comment7_1").text(baseaverage[7]["comment"]);
    }
  });
});

$(document).on("animationend", ".steps", function () {
  $(".main_content").addClass("startscreen");
});

$(document).on("animationend", ".startscreen", function () {
  window.location.href = "main.html";
});

$(".iframe-open").modaal({
  type: "iframe",
  width: 1000,
  height: 600,
  overlay_close: true,
  before_open: function () {
    $("html").css("overflow-y", "hidden");
  },
  after_close: function () {
    $("html").css("overflow-y", "scroll");
  },
});

// ------------クイズ------------

const quiz = [
  {
    question:
      "Q1. 予算とは何ですか？",
    choices: ["お金をすべて使い切る計画", "収入と支出の計画", "借金を増やす計画", "貯金をしない計画"],
    correct: "収入と支出の計画",
  },

  {
    question:
      "Q2.毎月変動する支出とは？",
    choices: [
      "家賃",
      "水道光熱費",
      "食費",
      "携帯電話料金",
    ],
    correct: "食費",
  },

  {
    question:
      "Q3.予算を立てる際に考慮すべき主な項目は何ですか？",
    choices: [
      "欲しいものリスト",
      "友人との約束",
      "好きな映画",
      "収入と支出",
    ],
    correct: "収入と支出",
  },

  {
    question:
      "Q4.月々の予算がオーバーした場合、どのように対応しますか？",
    choices: [
      "クレジットカードを使って支払う",
      "友達に借りる",
      "来月の予算を減らす",
      "無視する",
    ],
    correct: "来月の予算を減らす",
  },

  {
    question:
      "Q5.予算を改善するための効果的な方法はどれですか？",
    choices: [
      "収入を増やす方法を考える",
      "全ての支出をクレジットカードで行う",
      "貯金をやめる",
      "友人からお金を借りる",
    ],
    correct: "収入を増やす方法を考える",
  },

  {
    question:
      "Q6.予算管理アプリの利用の利点は何ですか？",
    choices: [
      "お金を使いすぎるようになる",
      "収入と支出を簡単に可視化できる",
      "友達と同じものを買える",
      "毎月の支出を増やす",
    ],
    correct: "収入と支出を簡単に可視化できる",
  },

  {
    question:
      "Q7.クレジットカードとは何ですか？",
    choices: [
      "銀行口座のカード",
      "割引カード",
      "身分証明書",
      "現金を使わずに買い物ができるカード",
    ],
    correct: "現金を使わずに買い物ができるカード",
  },

  {
    question:
      "Q8.クレジットカードの利点は何ですか？",
    choices: [
      "全ての商品が無料になる",
      "銀行からお金を引き出すカード",
      "現金を持ち歩かなくて済む",
      "毎月の支払いが不要",
    ],
    correct: "現金を持ち歩かなくて済む",
  },

  {
    question:
      "Q9.クレジットカードの返済を遅延するとどうなりますか？",
    choices: [
      "返済額が減る",
      "利息がつかない",
      "信用が下がる",
      "カード会社から報奨金がもらえる",
    ],
    correct: "信用が下がる",
  },


  {
    question:
      "Q10.クレジットカードの利用限度額とは何ですか？",
    choices: [
      "カードを使える回数",
      "カードで借りることができる最大金額",
      "一度に使える最大額",
      "年間の使用回数",
    ],
    correct: "カードで借りることができる最大金額",
  },

  {
    question:
      "Q11.リボ払いとは何ですか？",
    choices: [
      "毎月一定額を支払う方法",
      "一括払いを指定する支払い方法",
      "無料で支払う方法",
      "毎月支払い額が変動する方法",
    ],
    correct: "毎月一定額を支払う方法",
  },

  {
    question:
      "Q12.クレジットカードの不正利用に対して行うべき最初の対応は何ですか？",
    choices: [
      "新しいカードを申請する",
      "現金を引き出す",
      "友人に相談する",
      "カード会社に連絡してカードを停止する",
    ],
    correct: "カード会社に連絡してカードを停止する",
  },

  {
    question:
      "Q13.契約とは何ですか？",
    choices: [
      "口約束",
      "法的に拘束力のある合意",
      "友達との約束",
      "一方的な指示",
    ],
    correct: "法的に拘束力のある合意",
  },

  {
    question:
      "Q14.契約が成立するためには何が必要ですか？",
    choices: [
      "口頭の同意だけ",
      "提案と受諾、対価、当事者の合意",
      "友達の証人",
      "手紙のやり取り",
    ],
    correct: "提案と受諾、対価、当事者の合意",
  },

  {
    question:
      "Q15.未成年者が契約を結ぶ際の注意点は何ですか？",
    choices: [
      "親または保護者の同意が必要",
      "自分で自由に契約できる",
      "友達の同意が必要",
      "特に注意点はない",
    ],
    correct: "親または保護者の同意が必要",
  },
];


  const quizLength = quiz.length;
  let quizIndex = 0;
  let score = 0;
  let title = "";
  let type = "";
  let icon = "";
  let text = "";

  const button = document.getElementsByTagName('button');
  const buttonLength = button.length;

  const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
      button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
      buttonIndex++;
    }
  }

  setupQuiz();

  const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
      type = "success";
      title = "正解！";
      text= "";
      icon = "success";
      score++;
    } else {
      type = "warning";
      title = "不正解！";
      text= "正解は「" + quiz[quizIndex].correct + "」です",
      icon = "warning";
    }

    Swal.fire({
      type: type,
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        quizIndex++;
      }
      if (quizIndex < quizLength) {
        setupQuiz();
      } else {
        Swal.fire({
          title: "終了！あなたの正解数は",
          text: quizLength + "問中" + score + '問です',
          icon: "",
        }).then((result) => {
          if (result.isConfirmed) {
            quizIndex = 0;
            score = 0;
            setupQuiz();
          }
        });
      }
    });
  }

  let handlerIndex = 0;
  while (handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
      clickHandler(e);
    });
    handlerIndex++;
  }
