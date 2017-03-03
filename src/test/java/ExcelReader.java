import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Iterator;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRichTextString;
import org.apache.poi.xssf.usermodel.XSSFRow;

/*This method reads a cell value in provided excel sheet
* For example – calling method like pleaseReadXlsx(“mysheet.xlsx”, 0, 0, 0)
* It will read the value of first cell of the first sheet in the provided excel workbook provided as “mysheet.xlsx”.
* */

public class ExcelReader {

private static String cellValue ;

public static String pleaseReadXlsx(String fileName, int sheetIndex, int rowNum, int colNum)
{

InputStream inputStream = null;

XSSFWorkbook xssfWorkbook;
try {
inputStream = new FileInputStream(fileName);
try {
xssfWorkbook = new XSSFWorkbook(inputStream);
XSSFSheet sheet = xssfWorkbook.getSheetAt(sheetIndex);
//System.out.println(sheet.getSheetName());

XSSFRow xssfRow = sheet.getRow(rowNum);
XSSFCell xssfCell = xssfRow.getCell(colNum);
cellValue = xssfCell.getStringCellValue();
//System.out.println(cellValue);
inputStream.close();

} catch (IOException e) {
// TODO Auto-generated catch block
e.printStackTrace();
}
} catch (FileNotFoundException e) {
// TODO Auto-generated catch block
e.printStackTrace();
}

return cellValue;
}

public static void main(String[] args)
{
	ExcelReader.pleaseReadXlsx("C:\\Users\\ashish.sharma6\\Desktop\\JMX\\ExportExcel.xlsx", 0, 1, 1);
	
	
}
}