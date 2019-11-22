/*
Mmodal Fluency test script that opens windows default calculator. 
Uses AutoIt extensions to interact with COM objects.

*/


fd.GetAutoIt.Run("win32calc.exe");  // Execute basic windows calculator

var $hWnd = fd.GetAutoIt.WinWait("[CLASS:CalcFrame]", "", 5);  // Wait 5 seconds for CalcFrame to appear

// If no calc frame detected, then output message
if ($hWnd != 1){
	fd.DebugOutput("Could not open Calculator");
	}
else{
	fd.DebugOutput("Calc Frame located");
	}

fd.GetAutoIt.WinActive($hWnd); // Activate Calculator window

fd.Wait(2);  // Pause before sending value

fd.GetAutoIt.Send('123456789')
// Expected output would be the number 123456789 entered on calculator
fd.Wait(10);  // Pause before next test

fd.GetAutoIt.WinClose("Win32calc.exe")  // Optional closing of calculator