class Mobile {
	constructor(IEMICode, SIMcard, Processor, InternalMemory, IsSingleSIM){
		this.IEMICode = IEMICode;
		this.SIMcard = SIMcard;
		this.Processor = Processor;
		this.InternalMemory = InternalMemory;
		this.IsSingleSIM = IsSingleSIM;
	}


	GetIEMICode(IEMICode){
		this.IEMICode = IEMICode;
		return "IEMI Code -" + IEMICode;
	}  
  
    Dial(){
    	return "Dial a number";
    }

    Receive(){
    	return "Receive a call";
    }

    SendMessage(){
    	return "Message Sent";  
    }
}

class Samsumg extends Mobile{  
    GetWIFIConnection(){  
        return "WIFI connected";  
    }  
  
    //This is one overloaded method which shows camera functionality as well but with its camera's different mode(panaroma)  
    CameraClick(CameraMode)  
    {  
        return "Camera clicked in " + CameraMode + " Mode";  
    }  
}

class Nokia extends Mobile{
    GetBlueToothConnection(){  
        return "Bluetooth connected";  
    }  
   
    //New implementation for this method which was available in Mobile Class  
    //This is runtime polymorphism  
    SendMessage(){  
        return "Message Sent to a group";  
    }
}