exportPDFData() {
    var startTime = this.getDateFormatHeader(this.startDate);
    var endTime = this.getDateFormatHeader(this.endDate);
    var driver_label = this.get_label(this.driver, this.driverList, 'Driver');
    var Vname = this.employeeName;
    var Vid = this.selectedID;
    var lang = this.language;
    let options = {};
    if (lang == 'English') {
      if (this.selectedID == 'All') {
        var columns = [
          { title: 'Employee', dataKey: 'UserName' },
          { title: 'Vehicles', dataKey: 'Vehicles' },
          { title: 'Working Hours', dataKey: 'Duration' },
          { title: 'Distance', dataKey: 'Distance' },
          { title: 'First Active Time', dataKey: 'firstActiveTime' },
          { title: 'Last Active Time', dataKey: 'lastActiveTime' },
          { title: 'Date', dataKey: 'Date' },
        ];
      } else {
        var columns = [
          { title: 'Vehicles', dataKey: 'Vehicles' },
          { title: 'Working Hours', dataKey: 'Duration' },
          { title: 'Distance', dataKey: 'Distance' },
          { title: 'First Active Time', dataKey: 'firstActiveTime' },
          { title: 'Last Active Time', dataKey: 'lastActiveTime' },
          { title: 'Date', dataKey: 'Date' },
        ];
      }
    } else {
      if (this.selectedID == 'All') {
        var columns = [
          { title: 'اسم السائق', dataKey: 'employeeName' },
          { title: 'مجموعة', dataKey: 'Vehicles' },
          { title: 'المدة الزمنية', dataKey: 'Duration' },
          { title: 'أقصى سرعة الوقت', dataKey: 'Distance' },
          { title: 'مسافه: بعد', dataKey: 'firstActiveTime' },
          { title: 'آخر وقت نشط', dataKey: 'lastActiveTime' },
          { title: 'وقت', dataKey: 'Date' },
        ];
      } else {
        var columns = [
          { title: 'مجموعة', dataKey: 'Vehicles' },
          { title: 'المدة الزمنية', dataKey: 'Duration' },
          { title: 'أقصى سرعة الوقت', dataKey: 'Distance' },
          { title: 'مسافه: بعد', dataKey: 'firstActiveTime' },
          { title: 'آخر وقت نشط', dataKey: 'lastActiveTime' },
          { title: 'وقت', dataKey: 'Date' },
        ];
      }
    }
    var doc: any = new jsPDF({
      orientation: 'landscape',
    });
    if (lang == 'English') {
      var header = function (data: any) {
        doc.setFontSize(13);
        doc.setTextColor(40);

        doc.addImage(
          environment.logoImage,
          'JPEG',
          data.settings.margin.left,
          4,
          60,
          25
        );
        doc.setFont(undefined, 'bold');
        if (Vid == 'All') {
          doc.text(160, 10, 'ELD Report Report - All Employees', 'center');
          Vname = 'All';
        } else doc.text(160, 10, 'ELD Report Report - ' + Vname, 'center');

        doc.setFont(undefined, 'normal');
        doc.setFontSize(11);

        doc.text(
          'Date : ' + startTime + ' - ' + endTime,
          data.settings.margin.left,
          42
        );
      };

      options = {
        didDrawPage: header,
        margin: {
          top: 45,
        },
        headStyles: {
          fontSize: 9,
          font: '',
          fontStyle: 'normal',
          halign: '',
        },
        bodyStyles: {
          fontSize: 8,
          halign: 'left',
          overflow: 'linebreak',
        },

        styles: { overflow: 'linebreak' },
        startY: 45,
        showHead: 'everyPage', // 'everyPage', 'firstPage', 'never',
      };

      doc.setFontSize(8);
      doc.autoTable(columns, this.records, options);
      doc.save('ELD-Report.pdf');
    } else {
      var header = (data: any) => {
        doc.setFontSize(13);
        doc.setTextColor(40);

        doc.addImage(
          environment.logoImage,
          'JPEG',
          data.settings.margin.left,
          4,
          60,
          25
        );
        doc.setFont('Amiri-Regular', 'bold');
        if (this.selectedID == 'All') {
          doc.text(160, 10, 'تقرير ملخص يومي - جميع المركبات', 'center');
          var change = true;
          Vname = 'All';
        } else {
          doc.text(160, 10, 'تقرير ملخص يومي -' + Vname, 'center');
          change = false;
        }

        doc.setFont('Amiri-Regular');
        doc.setFontSize(11);
        doc.text('مركبة : ' + Vname, data.settings.margin.left, 32);
        doc.setFont(undefined, 'normal');
        doc.setFontSize(11);
        doc.text(' سائق : ' + driver_label, data.settings.margin.left, 37);
        doc.text(
          'تاريخ : ' + startTime + ' - ' + endTime,
          data.settings.margin.left,
          42
        );
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7);
      };

      options = {
        didDrawPage: header,
        margin: {
          top: 45,
        },
        headStyles: {
          fontSize: 9,
          font: 'Amiri-Regular',
          fontStyle: 'normal',
          halign: '',
        },
        columnStyles: {
          2: {
            cellWidth: 20,
          },
        },
        bodyStyles: {
          fontSize: 8,
          font: 'Amiri-Regular',
          halign: '',
          overflow: 'linebreak',
        },
        styles: { overflow: 'linebreak' },
        startY: 45,
        showHead: 'everyPage', // 'everyPage', 'firstPage', 'never',
      };

      doc.setFontSize(8);
      doc.autoTable(columns, this.records, options);
      doc.save('اليومي موجز تقرير.pdf');
    }
  }


// 2.
exportdashboardData() {
    var startTime = this.getDateFormatHeader(this.startDate);
    var endTime = this.getDateFormatHeader(this.endDate);
    var driver_label = this.get_label(this.driver, this.driverList, 'Driver');
    var Vname = this.employeeName;
    var Vid = this.selectedID;
    var lang = this.language;
    let options = {};
    if (lang == 'English') {
      if (this.selectedID == 'All') {
        var columns = [
          { title: 'Employee', dataKey: 'UserName' },
          { title: 'Vehicles', dataKey: 'Vehicles' },
          { title: 'Working Hours', dataKey: 'Duration' },
          { title: 'Distance', dataKey: 'Distance' },
          { title: 'First Active Time', dataKey: 'firstActiveTime' },
          { title: 'Last Active Time', dataKey: 'lastActiveTime' },
          { title: 'Date', dataKey: 'Date' },
        ];
      } else {
        var columns = [
          { title: 'Vehicles', dataKey: 'Vehicles' },
          { title: 'Working Hours', dataKey: 'Duration' },
          { title: 'Distance', dataKey: 'Distance' },
          { title: 'First Active Time', dataKey: 'firstActiveTime' },
          { title: 'Last Active Time', dataKey: 'lastActiveTime' },
          { title: 'Date', dataKey: 'Date' },
        ];
      }
    } else {
      if (this.selectedID == 'All') {
        var columns = [
          { title: 'اسم السائق', dataKey: 'employeeName' },
          { title: 'مجموعة', dataKey: 'Vehicles' },
          { title: 'المدة الزمنية', dataKey: 'Duration' },
          { title: 'أقصى سرعة الوقت', dataKey: 'Distance' },
          { title: 'مسافه: بعد', dataKey: 'firstActiveTime' },
          { title: 'آخر وقت نشط', dataKey: 'lastActiveTime' },
          { title: 'وقت', dataKey: 'Date' },
        ];
      } else {
        var columns = [
          { title: 'مجموعة', dataKey: 'Vehicles' },
          { title: 'المدة الزمنية', dataKey: 'Duration' },
          { title: 'أقصى سرعة الوقت', dataKey: 'Distance' },
          { title: 'مسافه: بعد', dataKey: 'firstActiveTime' },
          { title: 'آخر وقت نشط', dataKey: 'lastActiveTime' },
          { title: 'وقت', dataKey: 'Date' },
        ];
      }
    }
    var doc: any = new jsdashboard({
      orientation: 'landscape',
    });
    if (lang == 'English') {
      var header = function (data: any) {
        doc.setFontSize(13);
        doc.setTextColor(40);

        doc.addImage(
          environment.logoImage,
          'JPEG',
          data.settings.margin.left,
          4,
          60,
          25
        );
        doc.setFont(undefined, 'bold');
        if (Vid == 'All') {
          doc.text(160, 10, 'ELD Report Report - All Employees', 'center');
          Vname = 'All';
        } else doc.text(160, 10, 'ELD Report Report - ' + Vname, 'center');

        doc.setFont(undefined, 'normal');
        doc.setFontSize(11);

        doc.text(
          'Date : ' + startTime + ' - ' + endTime,
          data.settings.margin.left,
          42
        );
      };

      options = {
        didDrawPage: header,
        margin: {
          top: 45,
        },
        headStyles: {
          fontSize: 9,
          font: '',
          fontStyle: 'normal',
          halign: '',
        },
        bodyStyles: {
          fontSize: 8,
          halign: 'left',
          overflow: 'linebreak',
        },

        styles: { overflow: 'linebreak' },
        startY: 45,
        showHead: 'everyPage', // 'everyPage', 'firstPage', 'never',
      };

      doc.setFontSize(8);
      doc.autoTable(columns, this.records, options);
      doc.save('ELD-Report.pdf');
    } else {
      var header = (data: any) => {
        doc.setFontSize(13);
        doc.setTextColor(40);

        doc.addImage(
          environment.logoImage,
          'JPEG',
          data.settings.margin.left,
          4,
          60,
          25
        );
        doc.setFont('Amiri-Regular', 'bold');
        if (this.selectedID == 'All') {
          doc.text(160, 10, 'تقرير ملخص يومي - جميع المركبات', 'center');
          var change = true;
          Vname = 'All';
        } else {
          doc.text(160, 10, 'تقرير ملخص يومي -' + Vname, 'center');
          change = false;
        }

        doc.setFont('Amiri-Regular');
        doc.setFontSize(11);
        doc.text('مركبة : ' + Vname, data.settings.margin.left, 32);
        doc.setFont(undefined, 'normal');
        doc.setFontSize(11);
        doc.text(' سائق : ' + driver_label, data.settings.margin.left, 37);
        doc.text(
          'تاريخ : ' + startTime + ' - ' + endTime,
          data.settings.margin.left,
          42
        );
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(7);
      };

      options = {
        didDrawPage: header,
        margin: {
          top: 45,
        },
        headStyles: {
          fontSize: 9,
          font: 'Amiri-Regular',
          fontStyle: 'normal',
          halign: '',
        },
        columnStyles: {
          2: {
            cellWidth: 20,
          },
        },
        bodyStyles: {
          fontSize: 8,
          font: 'Amiri-Regular',
          halign: '',
          overflow: 'linebreak',
        },
        styles: { overflow: 'linebreak' },
        startY: 45,
        showHead: 'everyPage', // 'everyPage', 'firstPage', 'never',
      };

      doc.setFontSize(8);
      doc.autoTable(columns, this.records, options);
      doc.save('اليومي موجز تقرير.pdf');
    }
  }
