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