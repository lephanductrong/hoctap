var surveyJSON = {
 triggers: [{ type: "visible", name: "question1", operator: "notempty", questions: ["question2"] },
              { type: "visible", name: "question2", operator: "notempty", questions: ["question3"] },
              { type: "visible", name: "question3", operator: "notempty", questions: ["question4"] },
              { type: "visible", name: "question4", operator: "notempty", questions: ["question5"] },
              { type: "visible", name: "question5", operator: "notempty", questions: ["question6"] },
              { type: "visible", name: "question6", operator: "notempty", questions: ["question7"] },
              { type: "visible", name: "question7", operator: "notempty", questions: ["question8"] },
              { type: "visible", name: "question8", operator: "notempty", questions: ["question9"] },
              { type: "visible", name: "question9", operator: "notempty", questions: ["question10"] },
              { type: "visible", name: "question10", operator: "notempty", questions: ["question11"] },
              { type: "visible", name: "question11", operator: "notempty", questions: ["question12"] },
          
              
            ],
 pages: [
  {
   name: "loai_da",
   questions: [
    {
     type: "radiogroup",
     choices: [
      
      {
       text: "Rất thô ráp, tróc vảy và sạm lại",
       value: "1"
      },
      {
       text: "Căng",
       value: "2"
      },
      {
       text: "Đủ ẩm nhưng không phán chiếu ánh sáng",
       value: "3"
      },
      {
       text: "Bóng và phản chiếu ánh sáng",
       value: "4"
      }
     ],
     name: "question1",
     otherText: "other",
     visible: true,
     storeOthersAsComment: false,
     isRequired:true,
     title: "Sau khi rửa mặt, không bôi bất kì sản phẩm dưỡng ẩm, chống nắng, toner, phấn phủ hoặc các sản phẩm nào khác, khoảng 2-3 giờ sau soi gương dưới đèn sáng, bạn cảm thấy trán và gò má mình:"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Không bao giờ, hoặc chưa bao giờ để ý thấy điều đó",
       value: "1"
      },
      {
       text: "Thỉnh thoảng",
       value: "2"
      },
      {
       text: "Tương đối nhiều lần",
       value: "3"
      },
      {
       text: "Luôn luôn",
       value: "4"
      }
     ],
     name: "question2",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Trong các bức ảnh chụp, mặt bạn trông bóng"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Tróc vảy, mốc hoặc giả giả ở các nếp nhăn",
       value: "1"
      },
      {
       text: "Trơn tru",
       value: "2"
      },
      {
       text: "Bóng",
       value: "3"
      },
      {
       text: "Bị chảy và bóng",
       value: "4"
      },
      {
       text: "Tôi không dùng kem nền",
       value: "2.5"
      }
     ],
     name: "question3",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Hai đến ba giờ sau khi bôi kem nền, nhưng không bôi phấn phủ, lớp trang điểm của bạn trở nên:"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Cảm thấy rất khô và nứt nẻ",
       value: "1"
      },
      {
       text: "Cảm thấy căng",
       value: "2"
      },
      {
       text: "Cảm thấy bình thường",
       value: "3"
      },
      {
       text: "Thấy bóng nhờn, hoặc tôi chưa bao giờ thấy cần phải dùng dưỡng ẩm",
       value: "4"
      },
      {
       text: "Không biết",
       value: "2.5"
      }
     ],
     name: "question4",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Khi ở trong môi trường khô, nếu không bôi kem dưỡng ẩm hoặc chống nắng, da bạn sẽ:"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Không có",
       value: "1"
      },
      {
       text: "Chỉ có vài cái ở vùng chữ T (vùng trán và mũi)",
       value: "2"
      },
      {
       text: "Tương đối nhiều",
       value: "3"
      },
      {
       text: "Rất nhiều, vô số",
       value: "4"
      },
      {
       text: " Không biết (hãy nhìn kĩ lại và chỉ chọn e khi bạn không thể xác định điều này)",
       value: "2.5"
      }
     ],
     name: "question5",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Khi nhìn vào gương phóng đại, bạn thấy có bao nhiều lỗ chân lông to kích thước bằng đầu cái ghim hoặc lớn hơn?"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Không có",
       value: "1"
      },
      {
       text: "Chỉ có vài cái ở vùng chữ T (vùng trán và mũi)",
       value: "2"
      },
      {
       text: "Tương đối nhiều",
       value: "3"
      },
      {
       text: "Rất nhiều, vô số",
       value: "4"
      },
      {
       text: " Không biết (hãy nhìn kĩ lại và chỉ chọn e khi bạn không thể xác định điều này)",
       value: "2.5"
      }
     ],
     name: "question6",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Khi nhìn vào gương phóng đại, bạn thấy có bao nhiều lỗ chân lông to kích thước bằng đầu cái ghim hoặc lớn hơn?"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Khô",
       value: "1"
      },
      {
       text: "Thường",
       value: "2"
      },
      {
       text: "Hỗn hợp",
       value: "3"
      },
      {
       text: "Dầu",
       value: "4"
      }
     ],
     name: "question7",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Bạn tự đánh giá da bạn"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Cảm thấy khô hoặc nứt nẻ",
       value: "1"
      },
      {
       text: "Cảm thấy hơi khô nhưng không nứt nẻ",
       value: "2"
      },
      {
       text: "Cảm thấy bình thường",
       value: "3"
      },
      {
       text: "Cảm thấy dầu",
       value: "4"
      },
      {
       text: "Tôi không dùng xà bông hoặc sản phẩm rửa mặt tạo nhiều bọt (nếu vì khô thì chọn a)",
       value: "2.5"
      }
     ],
     name: "question8",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Khi bạn dùng xà bông hoặc sữa rửa mặt tạo bọt, da mặt bạn:"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Luôn luôn",
       value: "1"
      },
      {
       text: "Thỉnh thoảng",
       value: "2"
      },
      {
       text: "Hiếm khi",
       value: "3"
      },
      {
       text: "Không bao giờ",
       value: "4"
      }
     ],
     name: "question9",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Nếu không dùng kem dưỡng ẩm, da bạn cảm thấy căng"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Không bao giờ",
       value: "1"
      },
      {
       text: "Hiếm khi",
       value: "2"
      },
      {
       text: "Thỉnh thoảng",
       value: "3"
      },
      {
       text: "Luôn luôn",
       value: "4"
      }
     ],
     name: "question10",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Bạn bị bít lỗ chân lông (mụn đầu đen & mụn đầu trắng)"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Không bao giờ",
       value: "1"
      },
      {
       text: "Thỉnh thoảng",
       value: "2"
      },
      {
       text: "Thường hay thế",
       value: "3"
      },
      {
       text: "Luôn luôn",
       value: "4"
      }
     ],
     name: "question11",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Da mặt bạn dầu ở vùng chữ T"
    },
     {
     type: "radiogroup",
     choices: [
      
      {
       text: "Rất thô ráp, tróc vảy, hoặc sạm lại",
       value: "1"
      },
      {
       text: "Mịn màng",
       value: "2"
      },
      {
       text: "Hơi hơi bóng",
       value: "3"
      },
      {
       text: "Bóng và nhờn, hoặc tôi không dùng dưỡng ẩm",
       value: "4"
      }
     ],
     name: "question12",
     otherText: "other",
     storeOthersAsComment: false,
     isRequired:true,
     visible: false,
     title: "Hai đến ba giờ sau khi bôi dưỡng ẩm, da bạn:"
    }
   ],
   title: "Bảng khảo sát phân loại da"
  }
 ]
}