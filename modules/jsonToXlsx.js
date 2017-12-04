/**
 * previous done utility, requires file-saver and xlsx from npm
 */
import XLSX from 'xlsx';
import fileSaver from 'file-saver';

/**
 * convert jsonObj to EXCEL .xlsx format file and return force download
 * @param {Object} jsonObj the json object to be converted to xlsx file. the property name will be in first row
 * @param {Object} props the workbook properties Author Subject CreatedDate etc.
 * @param {String} sheetName sheet name
 * @param {String} fileName file name including extension
 */
export function getXLSX(jsonObj, props, sheetName, fileName){
  var wb = XLSX.utils.book_new();
  wb.Props = props;

  var ws = XLSX.utils.json_to_sheet(jsonObj);
  wb.SheetNames.push(sheetName);
  wb.Sheets[sheetName] = ws;
  var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

  if(typeof ArrayBuffer !== 'undefined') {
    var buf = new ArrayBuffer(wbout.length);
    var view = new Uint8Array(buf);
    for (var i=0; i!=wbout.length; ++i) view[i] = wbout.charCodeAt(i) & 0xFF;
  } else {
    var buf = new Array(wbout.length);
    for (var i=0; i!=wbout.length; ++i) buf[i] = wbout.charCodeAt(i) & 0xFF;
  }

  return fileSaver.saveAs(new Blob([buf], { type: 'application/octet-stream' }), fileName);
}
