export namespace acreditamientoieps {
	
	export class AcreditamientoIeps10 {
	    Version: string;
	    Tar: string;
	
	    static createFrom(source: any = {}) {
	        return new AcreditamientoIeps10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Tar = source["Tar"];
	    }
	}
	export class AcreditamientoIeps {
	    AcreditamientoIeps10?: AcreditamientoIeps10[];
	
	    static createFrom(source: any = {}) {
	        return new AcreditamientoIeps(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AcreditamientoIeps10 = this.convertValues(source["AcreditamientoIeps10"], AcreditamientoIeps10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace acuentaterceros {
	
	export class TrasladoTerceros11 {
	    TipoImpuesto: string;
	    Impuesto: string;
	    Tasa: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoImpuesto = source["TipoImpuesto"];
	        this.Impuesto = source["Impuesto"];
	        this.Tasa = source["Tasa"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionTerceros11 {
	    TipoImpuesto: string;
	    Impuesto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoImpuesto = source["TipoImpuesto"];
	        this.Impuesto = source["Impuesto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestosTerceros11 {
	    Retenciones?: RetencionTerceros11[];
	    Traslados?: TrasladoTerceros11[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionTerceros11);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoTerceros11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CuentaPredialTerceros11 {
	    Numero: string;
	
	    static createFrom(source: any = {}) {
	        return new CuentaPredialTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	    }
	}
	export class ParteTerceros11 {
	    Cantidad: number;
	    Unidad?: string;
	    NoIdentificacion?: string;
	    Descripcion: string;
	    ValorUnitario?: number;
	    Importe?: number;
	    InformacionAduanera?: InformacionAduaneraTerceros11[];
	
	    static createFrom(source: any = {}) {
	        return new ParteTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduaneraTerceros11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class InformacionAduaneraTerceros11 {
	    Numero: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Aduana?: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduaneraTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Aduana = source["Aduana"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class InformacionFiscalTerceroTerceros11 {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionFiscalTerceroTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class ACuentaTerceros11 {
	    Version: string;
	    Rfc: string;
	    Nombre?: string;
	    InformacionFiscalTercero?: InformacionFiscalTerceroTerceros11;
	    InformacionAduanera?: InformacionAduaneraTerceros11;
	    Parte?: ParteTerceros11[];
	    CuentaPredial?: CuentaPredialTerceros11;
	    Impuestos: ImpuestosTerceros11;
	
	    static createFrom(source: any = {}) {
	        return new ACuentaTerceros11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.InformacionFiscalTercero = this.convertValues(source["InformacionFiscalTercero"], InformacionFiscalTerceroTerceros11);
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduaneraTerceros11);
	        this.Parte = this.convertValues(source["Parte"], ParteTerceros11);
	        this.CuentaPredial = this.convertValues(source["CuentaPredial"], CuentaPredialTerceros11);
	        this.Impuestos = this.convertValues(source["Impuestos"], ImpuestosTerceros11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ACuentaTerceros {
	    ACuentaTerceros11?: ACuentaTerceros11[];
	
	    static createFrom(source: any = {}) {
	        return new ACuentaTerceros(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ACuentaTerceros11 = this.convertValues(source["ACuentaTerceros11"], ACuentaTerceros11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	

}

export namespace addenda {
	
	export class AddendaReferenceIdentification {
	    Type: string;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaReferenceIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.Value = source["Value"];
	    }
	}
	export class AddendaAdditionalInformation {
	    ReferenceIdentification: AddendaReferenceIdentification;
	
	    static createFrom(source: any = {}) {
	        return new AddendaAdditionalInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ReferenceIdentification = this.convertValues(source["ReferenceIdentification"], AddendaReferenceIdentification);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaAlternatePartyIdentification {
	    Type: string;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaAlternatePartyIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.Value = source["Value"];
	    }
	}
	export class AddendaAlternateTradeItemIdentification {
	    Type: string;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaAlternateTradeItemIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.Value = source["Value"];
	    }
	}
	export class AddendaAmount {
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	    }
	}
	export class AddendaBaseAmount {
	    Amount: AddendaAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaBaseAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = this.convertValues(source["Amount"], AddendaAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaBuyer {
	    Gln: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaBuyer(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	    }
	}
	export class AddendaCurrency {
	    CurrencyISOCode: string;
	    CurrencyFunction: string;
	    RateOfChange: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaCurrency(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CurrencyISOCode = source["CurrencyISOCode"];
	        this.CurrencyFunction = source["CurrencyFunction"];
	        this.RateOfChange = source["RateOfChange"];
	    }
	}
	export class AddendaDescription {
	    Type: string;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaDescription(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.Value = source["Value"];
	    }
	}
	export class Hospedaje {
	    Folio: string;
	    Huesped: string;
	    Habitacion: string;
	    CheckIn: string;
	    CheckOut: string;
	    Reserva: string;
	    NoCoches: string;
	
	    static createFrom(source: any = {}) {
	        return new Hospedaje(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Folio = source["Folio"];
	        this.Huesped = source["Huesped"];
	        this.Habitacion = source["Habitacion"];
	        this.CheckIn = source["CheckIn"];
	        this.CheckOut = source["CheckOut"];
	        this.Reserva = source["Reserva"];
	        this.NoCoches = source["NoCoches"];
	    }
	}
	export class CargoNoFacturable {
	    Cargo: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new CargoNoFacturable(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cargo = source["Cargo"];
	        this.Importe = source["Importe"];
	    }
	}
	export class AddendaFacto {
	    GranTotal: number;
	    CargosNoFacturables: CargoNoFacturable[];
	    Hospedaje: Hospedaje;
	
	    static createFrom(source: any = {}) {
	        return new AddendaFacto(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.GranTotal = source["GranTotal"];
	        this.CargosNoFacturables = this.convertValues(source["CargosNoFacturables"], CargoNoFacturable);
	        this.Hospedaje = this.convertValues(source["Hospedaje"], Hospedaje);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaGrossPrice {
	    Amount: AddendaAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaGrossPrice(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = this.convertValues(source["Amount"], AddendaAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaInvoicedQuantity {
	    UnitOfMeasure: string;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaInvoicedQuantity(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UnitOfMeasure = source["UnitOfMeasure"];
	        this.Value = source["Value"];
	    }
	}
	export class AddendaNetAmount {
	    Amount: AddendaAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaNetAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = this.convertValues(source["Amount"], AddendaAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaTotalLineAmount {
	    NetAmount: AddendaNetAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTotalLineAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NetAmount = this.convertValues(source["NetAmount"], AddendaNetAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaTradeItemTaxAmount {
	    TaxPercentage: string;
	    TaxAmount: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTradeItemTaxAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TaxPercentage = source["TaxPercentage"];
	        this.TaxAmount = source["TaxAmount"];
	    }
	}
	export class AddendaTradeItemTaxInformation {
	    TaxTypeDescription: string;
	    TradeItemTaxAmount: AddendaTradeItemTaxAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTradeItemTaxInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TaxTypeDescription = source["TaxTypeDescription"];
	        this.TradeItemTaxAmount = this.convertValues(source["TradeItemTaxAmount"], AddendaTradeItemTaxAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaTransport {
	    MethodOfPayment: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTransport(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.MethodOfPayment = source["MethodOfPayment"];
	    }
	}
	export class AddendaPalletInformation {
	    PalletQuantity: string;
	    Description: AddendaDescription;
	    Transport: AddendaTransport;
	
	    static createFrom(source: any = {}) {
	        return new AddendaPalletInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PalletQuantity = source["PalletQuantity"];
	        this.Description = this.convertValues(source["Description"], AddendaDescription);
	        this.Transport = this.convertValues(source["Transport"], AddendaTransport);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaTradeItemDescriptionInformation {
	    Language: string;
	    LongText: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTradeItemDescriptionInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Language = source["Language"];
	        this.LongText = source["LongText"];
	    }
	}
	export class AddendaTradeItemIdentification {
	    Gtin: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTradeItemIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gtin = source["Gtin"];
	    }
	}
	export class AddendaLineItem {
	    Number: string;
	    Type: string;
	    TradeItemIdentification: AddendaTradeItemIdentification;
	    AlternateTradeItemIdentification: AddendaAlternateTradeItemIdentification;
	    TradeItemDescriptionInformation: AddendaTradeItemDescriptionInformation;
	    InvoicedQuantity: AddendaInvoicedQuantity;
	    GrossPrice: AddendaGrossPrice;
	    PalletInformation: AddendaPalletInformation;
	    TradeItemTaxInformation: AddendaTradeItemTaxInformation;
	    TotalLineAmount: AddendaTotalLineAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaLineItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Number = source["Number"];
	        this.Type = source["Type"];
	        this.TradeItemIdentification = this.convertValues(source["TradeItemIdentification"], AddendaTradeItemIdentification);
	        this.AlternateTradeItemIdentification = this.convertValues(source["AlternateTradeItemIdentification"], AddendaAlternateTradeItemIdentification);
	        this.TradeItemDescriptionInformation = this.convertValues(source["TradeItemDescriptionInformation"], AddendaTradeItemDescriptionInformation);
	        this.InvoicedQuantity = this.convertValues(source["InvoicedQuantity"], AddendaInvoicedQuantity);
	        this.GrossPrice = this.convertValues(source["GrossPrice"], AddendaGrossPrice);
	        this.PalletInformation = this.convertValues(source["PalletInformation"], AddendaPalletInformation);
	        this.TradeItemTaxInformation = this.convertValues(source["TradeItemTaxInformation"], AddendaTradeItemTaxInformation);
	        this.TotalLineAmount = this.convertValues(source["TotalLineAmount"], AddendaTotalLineAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class AddendaOrderIdentification {
	    ReferenceIdentification: AddendaReferenceIdentification;
	    ReferenceDate: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaOrderIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ReferenceIdentification = this.convertValues(source["ReferenceIdentification"], AddendaReferenceIdentification);
	        this.ReferenceDate = source["ReferenceDate"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class AddendaPayableAmount {
	    Amount: AddendaAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaPayableAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = this.convertValues(source["Amount"], AddendaAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class AddendaRequestForPaymentIdentification {
	    EntityType: string;
	    UniqueCreatorIdentification: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaRequestForPaymentIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.EntityType = source["EntityType"];
	        this.UniqueCreatorIdentification = source["UniqueCreatorIdentification"];
	    }
	}
	export class AddendaSeller {
	    Gln: string;
	    AlternatePartyIdentification: AddendaAlternatePartyIdentification;
	
	    static createFrom(source: any = {}) {
	        return new AddendaSeller(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	        this.AlternatePartyIdentification = this.convertValues(source["AlternatePartyIdentification"], AddendaAlternatePartyIdentification);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaSpecialInstruction {
	    Code: string;
	    Text: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaSpecialInstruction(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Code = source["Code"];
	        this.Text = source["Text"];
	    }
	}
	export class AddendaTax {
	    Type: string;
	    TaxPercentage: string;
	    TaxAmount: string;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTax(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.TaxPercentage = source["TaxPercentage"];
	        this.TaxAmount = source["TaxAmount"];
	    }
	}
	export class AddendaTotalAllowanceCharge {
	    AllowanceOrChargeType: string;
	    Amount: AddendaAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTotalAllowanceCharge(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AllowanceOrChargeType = source["AllowanceOrChargeType"];
	        this.Amount = this.convertValues(source["Amount"], AddendaAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AddendaTotalAmount {
	    Amount: AddendaAmount;
	
	    static createFrom(source: any = {}) {
	        return new AddendaTotalAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = this.convertValues(source["Amount"], AddendaAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	export class ExtraBuzonFiscal {
	    Valor: string;
	    Atributo: string;
	
	    static createFrom(source: any = {}) {
	        return new ExtraBuzonFiscal(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Valor = source["Valor"];
	        this.Atributo = source["Atributo"];
	    }
	}
	export class DestinoBuzonFiscal {
	    Nombre: string;
	    Estado: string;
	    Municipio: string;
	    Calle: string;
	    ClaveIdentificacion: string;
	
	    static createFrom(source: any = {}) {
	        return new DestinoBuzonFiscal(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Nombre = source["Nombre"];
	        this.Estado = source["Estado"];
	        this.Municipio = source["Municipio"];
	        this.Calle = source["Calle"];
	        this.ClaveIdentificacion = source["ClaveIdentificacion"];
	    }
	}
	export class ReceptorBuzonFiscal {
	    NoCliente: string;
	
	    static createFrom(source: any = {}) {
	        return new ReceptorBuzonFiscal(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NoCliente = source["NoCliente"];
	    }
	}
	export class TipoDocumentoBuzonFiscal {
	    Descripcion: string;
	    NombreCorto: string;
	
	    static createFrom(source: any = {}) {
	        return new TipoDocumentoBuzonFiscal(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Descripcion = source["Descripcion"];
	        this.NombreCorto = source["NombreCorto"];
	    }
	}
	export class BuzonFiscal {
	    Version: string;
	    TipoDocumento: TipoDocumentoBuzonFiscal;
	    Receptor: ReceptorBuzonFiscal;
	    Destino: DestinoBuzonFiscal;
	    Extra: ExtraBuzonFiscal[];
	
	    static createFrom(source: any = {}) {
	        return new BuzonFiscal(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoDocumento = this.convertValues(source["TipoDocumento"], TipoDocumentoBuzonFiscal);
	        this.Receptor = this.convertValues(source["Receptor"], ReceptorBuzonFiscal);
	        this.Destino = this.convertValues(source["Destino"], DestinoBuzonFiscal);
	        this.Extra = this.convertValues(source["Extra"], ExtraBuzonFiscal);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	export class EdicomGenericaElemento {
	    Etiqueta: string;
	    Descripcion: string;
	    Valor: string;
	
	    static createFrom(source: any = {}) {
	        return new EdicomGenericaElemento(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Etiqueta = source["Etiqueta"];
	        this.Descripcion = source["Descripcion"];
	        this.Valor = source["Valor"];
	    }
	}
	export class EdicomGenerica {
	    Elementos: EdicomGenericaElemento[];
	
	    static createFrom(source: any = {}) {
	        return new EdicomGenerica(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Elementos = this.convertValues(source["Elementos"], EdicomGenericaElemento);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	export class Inssist {
	    Referencia?: string;
	    Reservacion?: string;
	    OtrosCargos?: string;
	    ImportePagar?: string;
	    Terceros?: string;
	    ImporteRetenidoaCuentadeTerceros?: string;
	
	    static createFrom(source: any = {}) {
	        return new Inssist(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Referencia = source["Referencia"];
	        this.Reservacion = source["Reservacion"];
	        this.OtrosCargos = source["OtrosCargos"];
	        this.ImportePagar = source["ImportePagar"];
	        this.Terceros = source["Terceros"];
	        this.ImporteRetenidoaCuentadeTerceros = source["ImporteRetenidoaCuentadeTerceros"];
	    }
	}
	export class RBoschSapLineas {
	    Cantidad: string;
	    MontoLinea: string;
	    NoParte: string;
	    NoLinea: string;
	    Pedido: string;
	    PrecioNeto: string;
	    ReferenciaCliente: string;
	    UnidadMedida: string;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSapLineas(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.MontoLinea = source["MontoLinea"];
	        this.NoParte = source["NoParte"];
	        this.NoLinea = source["NoLinea"];
	        this.Pedido = source["Pedido"];
	        this.PrecioNeto = source["PrecioNeto"];
	        this.ReferenciaCliente = source["ReferenciaCliente"];
	        this.UnidadMedida = source["UnidadMedida"];
	    }
	}
	export class RBoschSapDetalle {
	    Lineas: RBoschSapLineas;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSapDetalle(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Lineas = this.convertValues(source["Lineas"], RBoschSapLineas);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RBoschSapShipTo {
	    Calle: string;
	    Ciudad: string;
	    CodigoPostal: string;
	    Estado: string;
	    Nombre: string;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSapShipTo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.Ciudad = source["Ciudad"];
	        this.CodigoPostal = source["CodigoPostal"];
	        this.Estado = source["Estado"];
	        this.Nombre = source["Nombre"];
	    }
	}
	export class RBoschSapBillTo {
	    Calle: string;
	    Ciudad: string;
	    CodigoPostal: string;
	    Email: string;
	    Estado: string;
	    Nombre: string;
	    Pais: string;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSapBillTo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.Ciudad = source["Ciudad"];
	        this.CodigoPostal = source["CodigoPostal"];
	        this.Email = source["Email"];
	        this.Estado = source["Estado"];
	        this.Nombre = source["Nombre"];
	        this.Pais = source["Pais"];
	    }
	}
	export class RBoschSapMoneda {
	    Moneda: string;
	    TipoCambio: string;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSapMoneda(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Moneda = source["Moneda"];
	        this.TipoCambio = source["TipoCambio"];
	    }
	}
	export class RBoschSapCabecera {
	    ClaveCli: string;
	    ClaveNum: string;
	    CondicionesPago: string;
	    Delivery: string;
	    Fecha: string;
	    Folio: string;
	    FolioErp: string;
	    ImporteTotalLetra: string;
	    Nodo: string;
	    Peso: string;
	    TelefX: string;
	    TotalFactura: string;
	    TotalNeto: string;
	    Moneda: RBoschSapMoneda;
	    BillTo: RBoschSapBillTo;
	    ShipTo: RBoschSapShipTo;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSapCabecera(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveCli = source["ClaveCli"];
	        this.ClaveNum = source["ClaveNum"];
	        this.CondicionesPago = source["CondicionesPago"];
	        this.Delivery = source["Delivery"];
	        this.Fecha = source["Fecha"];
	        this.Folio = source["Folio"];
	        this.FolioErp = source["FolioErp"];
	        this.ImporteTotalLetra = source["ImporteTotalLetra"];
	        this.Nodo = source["Nodo"];
	        this.Peso = source["Peso"];
	        this.TelefX = source["TelefX"];
	        this.TotalFactura = source["TotalFactura"];
	        this.TotalNeto = source["TotalNeto"];
	        this.Moneda = this.convertValues(source["Moneda"], RBoschSapMoneda);
	        this.BillTo = this.convertValues(source["BillTo"], RBoschSapBillTo);
	        this.ShipTo = this.convertValues(source["ShipTo"], RBoschSapShipTo);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RBoschSap {
	    Cabecera: RBoschSapCabecera;
	    Detalle: RBoschSapDetalle;
	
	    static createFrom(source: any = {}) {
	        return new RBoschSap(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cabecera = this.convertValues(source["Cabecera"], RBoschSapCabecera);
	        this.Detalle = this.convertValues(source["Detalle"], RBoschSapDetalle);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	export class RequestForPayment {
	    DeliveryDate: string;
	    ContentVersion: string;
	    DocumentStatus: string;
	    DocumentStructureVersion: string;
	    Type: string;
	    RequestForPaymentIdentification: AddendaRequestForPaymentIdentification;
	    SpecialInstructions: AddendaSpecialInstruction[];
	    OrderIdentification: AddendaOrderIdentification;
	    AdditionalInformation: AddendaAdditionalInformation;
	    Buyer: AddendaBuyer;
	    Seller: AddendaSeller;
	    Currency: AddendaCurrency;
	    LineItem: AddendaLineItem;
	    TotalAmount: AddendaTotalAmount;
	    TotalAllowanceCharge: AddendaTotalAllowanceCharge;
	    BaseAmount: AddendaBaseAmount;
	    Tax: AddendaTax;
	    PayableAmount: AddendaPayableAmount;
	
	    static createFrom(source: any = {}) {
	        return new RequestForPayment(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.DeliveryDate = source["DeliveryDate"];
	        this.ContentVersion = source["ContentVersion"];
	        this.DocumentStatus = source["DocumentStatus"];
	        this.DocumentStructureVersion = source["DocumentStructureVersion"];
	        this.Type = source["Type"];
	        this.RequestForPaymentIdentification = this.convertValues(source["RequestForPaymentIdentification"], AddendaRequestForPaymentIdentification);
	        this.SpecialInstructions = this.convertValues(source["SpecialInstructions"], AddendaSpecialInstruction);
	        this.OrderIdentification = this.convertValues(source["OrderIdentification"], AddendaOrderIdentification);
	        this.AdditionalInformation = this.convertValues(source["AdditionalInformation"], AddendaAdditionalInformation);
	        this.Buyer = this.convertValues(source["Buyer"], AddendaBuyer);
	        this.Seller = this.convertValues(source["Seller"], AddendaSeller);
	        this.Currency = this.convertValues(source["Currency"], AddendaCurrency);
	        this.LineItem = this.convertValues(source["LineItem"], AddendaLineItem);
	        this.TotalAmount = this.convertValues(source["TotalAmount"], AddendaTotalAmount);
	        this.TotalAllowanceCharge = this.convertValues(source["TotalAllowanceCharge"], AddendaTotalAllowanceCharge);
	        this.BaseAmount = this.convertValues(source["BaseAmount"], AddendaBaseAmount);
	        this.Tax = this.convertValues(source["Tax"], AddendaTax);
	        this.PayableAmount = this.convertValues(source["PayableAmount"], AddendaPayableAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace aerolineas {
	
	export class CargoAero10 {
	    CodigoCargo: string;
	    Importe: string;
	
	    static createFrom(source: any = {}) {
	        return new CargoAero10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CodigoCargo = source["CodigoCargo"];
	        this.Importe = source["Importe"];
	    }
	}
	export class OtrosCargosAero10 {
	    TotalCargos: string;
	    Cargo: CargoAero10[];
	
	    static createFrom(source: any = {}) {
	        return new OtrosCargosAero10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalCargos = source["TotalCargos"];
	        this.Cargo = this.convertValues(source["Cargo"], CargoAero10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Aerolineas10 {
	    Version: string;
	    Tua: string;
	    OtrosCargos?: OtrosCargosAero10[];
	
	    static createFrom(source: any = {}) {
	        return new Aerolineas10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Tua = source["Tua"];
	        this.OtrosCargos = this.convertValues(source["OtrosCargos"], OtrosCargosAero10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Aerolineas {
	    Aerolineas10?: Aerolineas10[];
	
	    static createFrom(source: any = {}) {
	        return new Aerolineas(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Aerolineas10 = this.convertValues(source["Aerolineas10"], Aerolineas10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	

}

export namespace cartaporte {
	
	export class DomicilioCartaPorte10 {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class ArrendatarioCartaPorte10 {
	    Rfc?: string;
	    Nombre?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    Domicilio?: DomicilioCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new ArrendatarioCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RemolqueCartaPorte10 {
	    Subtipo: string;
	    Placa: string;
	
	    static createFrom(source: any = {}) {
	        return new RemolqueCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Subtipo = source["Subtipo"];
	        this.Placa = source["Placa"];
	    }
	}
	export class IdentificacionVehicularCartaPorte10 {
	    ConfiguracionVehicular: string;
	    PlacaVm: string;
	    AnioModeloVm: string;
	
	    static createFrom(source: any = {}) {
	        return new IdentificacionVehicularCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ConfiguracionVehicular = source["ConfiguracionVehicular"];
	        this.PlacaVm = source["PlacaVm"];
	        this.AnioModeloVm = source["AnioModeloVm"];
	    }
	}
	export class AutotransporteCartaPorte10 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    NombreAseguradora: string;
	    NoPoliza: string;
	    IdentificacionVehicular: IdentificacionVehicularCartaPorte10;
	    Remolques?: RemolqueCartaPorte10[];
	
	    static createFrom(source: any = {}) {
	        return new AutotransporteCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPoliza = source["NoPoliza"];
	        this.IdentificacionVehicular = this.convertValues(source["IdentificacionVehicular"], IdentificacionVehicularCartaPorte10);
	        this.Remolques = this.convertValues(source["Remolques"], RemolqueCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RemolqueCartaPorte20 {
	    Subtipo: string;
	    Placa: string;
	
	    static createFrom(source: any = {}) {
	        return new RemolqueCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Subtipo = source["Subtipo"];
	        this.Placa = source["Placa"];
	    }
	}
	export class SegurosCartaPorte20 {
	    AseguradoraResponsabilidadCivil: string;
	    PolizaResponsabilidadCivil: string;
	    AseguradoraMedioAmbiente?: string;
	    PolizaMedioAmbiente?: string;
	    AseguradoraCarga?: string;
	    PolizaCarga?: string;
	    PrimaSeguro?: number;
	
	    static createFrom(source: any = {}) {
	        return new SegurosCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AseguradoraResponsabilidadCivil = source["AseguradoraResponsabilidadCivil"];
	        this.PolizaResponsabilidadCivil = source["PolizaResponsabilidadCivil"];
	        this.AseguradoraMedioAmbiente = source["AseguradoraMedioAmbiente"];
	        this.PolizaMedioAmbiente = source["PolizaMedioAmbiente"];
	        this.AseguradoraCarga = source["AseguradoraCarga"];
	        this.PolizaCarga = source["PolizaCarga"];
	        this.PrimaSeguro = source["PrimaSeguro"];
	    }
	}
	export class IdentificacionVehicularCartaPorte20 {
	    ConfiguracionVehicular: string;
	    PlacaVm: string;
	    AnioModeloVm: string;
	
	    static createFrom(source: any = {}) {
	        return new IdentificacionVehicularCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ConfiguracionVehicular = source["ConfiguracionVehicular"];
	        this.PlacaVm = source["PlacaVm"];
	        this.AnioModeloVm = source["AnioModeloVm"];
	    }
	}
	export class AutotransporteCartaPorte20 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    IdentificacionVehicular: IdentificacionVehicularCartaPorte20;
	    Seguros: SegurosCartaPorte20;
	    Remolques?: RemolqueCartaPorte20[];
	
	    static createFrom(source: any = {}) {
	        return new AutotransporteCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.IdentificacionVehicular = this.convertValues(source["IdentificacionVehicular"], IdentificacionVehicularCartaPorte20);
	        this.Seguros = this.convertValues(source["Seguros"], SegurosCartaPorte20);
	        this.Remolques = this.convertValues(source["Remolques"], RemolqueCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RemolqueCartaPorte30 {
	    Subtipo: string;
	    Placa: string;
	
	    static createFrom(source: any = {}) {
	        return new RemolqueCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Subtipo = source["Subtipo"];
	        this.Placa = source["Placa"];
	    }
	}
	export class SegurosCartaPorte30 {
	    AseguradoraResponsabilidadCivil: string;
	    PolizaResponsabilidadCivil: string;
	    AseguradoraMedioAmbiente?: string;
	    PolizaMedioAmbiente?: string;
	    AseguradoraCarga?: string;
	    PolizaCarga?: string;
	    PrimaSeguro?: number;
	
	    static createFrom(source: any = {}) {
	        return new SegurosCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AseguradoraResponsabilidadCivil = source["AseguradoraResponsabilidadCivil"];
	        this.PolizaResponsabilidadCivil = source["PolizaResponsabilidadCivil"];
	        this.AseguradoraMedioAmbiente = source["AseguradoraMedioAmbiente"];
	        this.PolizaMedioAmbiente = source["PolizaMedioAmbiente"];
	        this.AseguradoraCarga = source["AseguradoraCarga"];
	        this.PolizaCarga = source["PolizaCarga"];
	        this.PrimaSeguro = source["PrimaSeguro"];
	    }
	}
	export class IdentificacionVehicularCartaPorte30 {
	    Configuracion: string;
	    PesoBruto: number;
	    PlacaVm: string;
	    AnioModeloVm: number;
	
	    static createFrom(source: any = {}) {
	        return new IdentificacionVehicularCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Configuracion = source["Configuracion"];
	        this.PesoBruto = source["PesoBruto"];
	        this.PlacaVm = source["PlacaVm"];
	        this.AnioModeloVm = source["AnioModeloVm"];
	    }
	}
	export class AutotransporteCartaPorte30 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    IdentificacionVehicular: IdentificacionVehicularCartaPorte30;
	    Seguros: SegurosCartaPorte30;
	    Remolques?: RemolqueCartaPorte30[];
	
	    static createFrom(source: any = {}) {
	        return new AutotransporteCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.IdentificacionVehicular = this.convertValues(source["IdentificacionVehicular"], IdentificacionVehicularCartaPorte30);
	        this.Seguros = this.convertValues(source["Seguros"], SegurosCartaPorte30);
	        this.Remolques = this.convertValues(source["Remolques"], RemolqueCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RemolqueCartaPorte31 {
	    Subtipo: string;
	    Placa: string;
	
	    static createFrom(source: any = {}) {
	        return new RemolqueCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Subtipo = source["Subtipo"];
	        this.Placa = source["Placa"];
	    }
	}
	export class SegurosCartaPorte31 {
	    AseguradoraResponsabilidadCivil: string;
	    PolizaResponsabilidadCivil: string;
	    AseguradoraMedioAmbiente?: string;
	    PolizaMedioAmbiente?: string;
	    AseguradoraCarga?: string;
	    PolizaCarga?: string;
	    PrimaSeguro?: number;
	
	    static createFrom(source: any = {}) {
	        return new SegurosCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AseguradoraResponsabilidadCivil = source["AseguradoraResponsabilidadCivil"];
	        this.PolizaResponsabilidadCivil = source["PolizaResponsabilidadCivil"];
	        this.AseguradoraMedioAmbiente = source["AseguradoraMedioAmbiente"];
	        this.PolizaMedioAmbiente = source["PolizaMedioAmbiente"];
	        this.AseguradoraCarga = source["AseguradoraCarga"];
	        this.PolizaCarga = source["PolizaCarga"];
	        this.PrimaSeguro = source["PrimaSeguro"];
	    }
	}
	export class IdentificacionVehicularCartaPorte31 {
	    Configuracion: string;
	    PesoBruto: number;
	    PlacaVm: string;
	    AnioModeloVm: number;
	
	    static createFrom(source: any = {}) {
	        return new IdentificacionVehicularCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Configuracion = source["Configuracion"];
	        this.PesoBruto = source["PesoBruto"];
	        this.PlacaVm = source["PlacaVm"];
	        this.AnioModeloVm = source["AnioModeloVm"];
	    }
	}
	export class AutotransporteCartaPorte31 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    IdentificacionVehicular: IdentificacionVehicularCartaPorte31;
	    Seguros: SegurosCartaPorte31;
	    Remolques?: RemolqueCartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new AutotransporteCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.IdentificacionVehicular = this.convertValues(source["IdentificacionVehicular"], IdentificacionVehicularCartaPorte31);
	        this.Seguros = this.convertValues(source["Seguros"], SegurosCartaPorte31);
	        this.Remolques = this.convertValues(source["Remolques"], RemolqueCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CantidadTransportaCartaPorte10 {
	    Cantidad: number;
	    IdOrigen: string;
	    IdDestino: string;
	    ClavesTransporte?: string;
	
	    static createFrom(source: any = {}) {
	        return new CantidadTransportaCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.IdOrigen = source["IdOrigen"];
	        this.IdDestino = source["IdDestino"];
	        this.ClavesTransporte = source["ClavesTransporte"];
	    }
	}
	export class CantidadTransportaCartaPorte20 {
	    Cantidad: number;
	    IdOrigen: string;
	    IdDestino: string;
	    ClavesTransporte?: string;
	
	    static createFrom(source: any = {}) {
	        return new CantidadTransportaCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.IdOrigen = source["IdOrigen"];
	        this.IdDestino = source["IdDestino"];
	        this.ClavesTransporte = source["ClavesTransporte"];
	    }
	}
	export class CantidadTransportaCartaPorte30 {
	    Cantidad: number;
	    IdOrigen: string;
	    IdDestino: string;
	    ClavesTransporte?: string;
	
	    static createFrom(source: any = {}) {
	        return new CantidadTransportaCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.IdOrigen = source["IdOrigen"];
	        this.IdDestino = source["IdDestino"];
	        this.ClavesTransporte = source["ClavesTransporte"];
	    }
	}
	export class CantidadTransporteCartaPorte31 {
	    Cantidad: number;
	    IdOrigen: string;
	    IdDestino: string;
	    ClavesTransporte?: string;
	
	    static createFrom(source: any = {}) {
	        return new CantidadTransporteCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.IdOrigen = source["IdOrigen"];
	        this.IdDestino = source["IdDestino"];
	        this.ClavesTransporte = source["ClavesTransporte"];
	    }
	}
	export class ContenedorCarroCartaPorte10 {
	    Tipo: string;
	    PesoContenedorVacio: number;
	    PesoNetoMercancia: number;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCarroCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.PesoContenedorVacio = source["PesoContenedorVacio"];
	        this.PesoNetoMercancia = source["PesoNetoMercancia"];
	    }
	}
	export class CarroCartaPorte10 {
	    Tipo: string;
	    Matricula: string;
	    Guia: string;
	    ToneladasNetas: number;
	    Contenedor?: ContenedorCarroCartaPorte10[];
	
	    static createFrom(source: any = {}) {
	        return new CarroCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Matricula = source["Matricula"];
	        this.Guia = source["Guia"];
	        this.ToneladasNetas = source["ToneladasNetas"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCarroCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ContenedorCarroCartaPorte20 {
	    Tipo: string;
	    PesoContenedorVacio: number;
	    PesoNetoMercancia: number;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCarroCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.PesoContenedorVacio = source["PesoContenedorVacio"];
	        this.PesoNetoMercancia = source["PesoNetoMercancia"];
	    }
	}
	export class CarroCartaPorte20 {
	    Tipo: string;
	    Matricula: string;
	    Guia: string;
	    ToneladasNetas: number;
	    Contenedor?: ContenedorCarroCartaPorte20[];
	
	    static createFrom(source: any = {}) {
	        return new CarroCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Matricula = source["Matricula"];
	        this.Guia = source["Guia"];
	        this.ToneladasNetas = source["ToneladasNetas"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCarroCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ContenedorCarroCartaPorte30 {
	    Tipo: string;
	    PesoNetoMercancia: number;
	    PesoContenedorVacio: number;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCarroCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.PesoNetoMercancia = source["PesoNetoMercancia"];
	        this.PesoContenedorVacio = source["PesoContenedorVacio"];
	    }
	}
	export class CarroCartaPorte30 {
	    ToneladasNetas: number;
	    Tipo: string;
	    Matricula: string;
	    Guia: string;
	    Contenedor?: ContenedorCarroCartaPorte30[];
	
	    static createFrom(source: any = {}) {
	        return new CarroCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ToneladasNetas = source["ToneladasNetas"];
	        this.Tipo = source["Tipo"];
	        this.Matricula = source["Matricula"];
	        this.Guia = source["Guia"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCarroCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ContenedorCarroCartaPorte31 {
	    Tipo: string;
	    PesoContenedorVacio: number;
	    PesoNetoMercancia: number;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCarroCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.PesoContenedorVacio = source["PesoContenedorVacio"];
	        this.PesoNetoMercancia = source["PesoNetoMercancia"];
	    }
	}
	export class CarroCartaPorte31 {
	    Tipo: string;
	    Matricula: string;
	    Guia: string;
	    ToneladasNetas: number;
	    Contenedor?: ContenedorCarroCartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new CarroCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Matricula = source["Matricula"];
	        this.Guia = source["Guia"];
	        this.ToneladasNetas = source["ToneladasNetas"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCarroCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PartesTransporteCartaPorte31 {
	    Parte: string;
	
	    static createFrom(source: any = {}) {
	        return new PartesTransporteCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Parte = source["Parte"];
	    }
	}
	export class TiposFiguraCartaPorte31 {
	    Tipo: string;
	    Rfc?: string;
	    NoLicencia?: string;
	    Nombre: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    PartesTransporte?: PartesTransporteCartaPorte31[];
	    Domicilio?: DomicilioCartaPorte31;
	
	    static createFrom(source: any = {}) {
	        return new TiposFiguraCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Rfc = source["Rfc"];
	        this.NoLicencia = source["NoLicencia"];
	        this.Nombre = source["Nombre"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.PartesTransporte = this.convertValues(source["PartesTransporte"], PartesTransporteCartaPorte31);
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class FiguraTransporteCartaPorte31 {
	    TiposFigura: TiposFiguraCartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new FiguraTransporteCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TiposFigura = this.convertValues(source["TiposFigura"], TiposFiguraCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DerechosDePasoCartaPorte31 {
	    Tipo: string;
	    KilometrajePagado: number;
	
	    static createFrom(source: any = {}) {
	        return new DerechosDePasoCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.KilometrajePagado = source["KilometrajePagado"];
	    }
	}
	export class TransporteFerroviarioCartaPorte31 {
	    TipoServicio: string;
	    TipoTrafico: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    DerechosDePaso?: DerechosDePasoCartaPorte31[];
	    Carro: CarroCartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteFerroviarioCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoServicio = source["TipoServicio"];
	        this.TipoTrafico = source["TipoTrafico"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.DerechosDePaso = this.convertValues(source["DerechosDePaso"], DerechosDePasoCartaPorte31);
	        this.Carro = this.convertValues(source["Carro"], CarroCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TransporteAereoCartaPorte31 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    MatriculaAeronave?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    NoGuia: string;
	    LugarContrato?: string;
	    CodigoTransportista: string;
	    RfcEmbarcador?: string;
	    NumRegIdTribEmbarcador?: string;
	    ResidenciaFiscalEmbarcador?: string;
	    NombreEmbarcador?: string;
	
	    static createFrom(source: any = {}) {
	        return new TransporteAereoCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.MatriculaAeronave = source["MatriculaAeronave"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.NoGuia = source["NoGuia"];
	        this.LugarContrato = source["LugarContrato"];
	        this.CodigoTransportista = source["CodigoTransportista"];
	        this.RfcEmbarcador = source["RfcEmbarcador"];
	        this.NumRegIdTribEmbarcador = source["NumRegIdTribEmbarcador"];
	        this.ResidenciaFiscalEmbarcador = source["ResidenciaFiscalEmbarcador"];
	        this.NombreEmbarcador = source["NombreEmbarcador"];
	    }
	}
	export class RemolqueCCPCartaPorte31 {
	    Subtipo: string;
	    Placa: string;
	
	    static createFrom(source: any = {}) {
	        return new RemolqueCCPCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Subtipo = source["Subtipo"];
	        this.Placa = source["Placa"];
	    }
	}
	export class ContenedorCartaPorte31 {
	    Tipo: string;
	    Matricula?: string;
	    NoPrecinto?: string;
	    IdCcpRelacionado?: string;
	    PlacaVmCcp?: string;
	    FechaCertificacionCCP?: string;
	    // Go type: time
	    FechaCertificacionCcp?: any;
	    RemolquesCcp?: RemolqueCCPCartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Matricula = source["Matricula"];
	        this.NoPrecinto = source["NoPrecinto"];
	        this.IdCcpRelacionado = source["IdCcpRelacionado"];
	        this.PlacaVmCcp = source["PlacaVmCcp"];
	        this.FechaCertificacionCCP = source["FechaCertificacionCCP"];
	        this.FechaCertificacionCcp = this.convertValues(source["FechaCertificacionCcp"], null);
	        this.RemolquesCcp = this.convertValues(source["RemolquesCcp"], RemolqueCCPCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TransporteMaritimoCartaPorte31 {
	    PermisoSct?: string;
	    NoPermisoSct?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    TipoEmbarcacion: string;
	    Matricula: string;
	    NoOmi: string;
	    AnioEmbarcacion?: number;
	    NombreEmbarcacion?: string;
	    NacionalidadEmbarcacion: string;
	    UnidadesArqueoBruto: number;
	    TipoCarga: string;
	    Eslora?: number;
	    Manga?: number;
	    Calado?: number;
	    Puntal?: number;
	    LineaNaviera?: string;
	    NombreAgenteNaviero: string;
	    NoAutorizacionNaviero: string;
	    NoViaje?: string;
	    NoConocimientoEmbarque?: string;
	    PermisoTemporalNavegacion?: string;
	    Contenedor?: ContenedorCartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteMaritimoCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.TipoEmbarcacion = source["TipoEmbarcacion"];
	        this.Matricula = source["Matricula"];
	        this.NoOmi = source["NoOmi"];
	        this.AnioEmbarcacion = source["AnioEmbarcacion"];
	        this.NombreEmbarcacion = source["NombreEmbarcacion"];
	        this.NacionalidadEmbarcacion = source["NacionalidadEmbarcacion"];
	        this.UnidadesArqueoBruto = source["UnidadesArqueoBruto"];
	        this.TipoCarga = source["TipoCarga"];
	        this.Eslora = source["Eslora"];
	        this.Manga = source["Manga"];
	        this.Calado = source["Calado"];
	        this.Puntal = source["Puntal"];
	        this.LineaNaviera = source["LineaNaviera"];
	        this.NombreAgenteNaviero = source["NombreAgenteNaviero"];
	        this.NoAutorizacionNaviero = source["NoAutorizacionNaviero"];
	        this.NoViaje = source["NoViaje"];
	        this.NoConocimientoEmbarque = source["NoConocimientoEmbarque"];
	        this.PermisoTemporalNavegacion = source["PermisoTemporalNavegacion"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DetalleMercanciaCartaPorte31 {
	    UnidadPeso: string;
	    PesoBruto: number;
	    PesoNeto: number;
	    PesoTara: number;
	    NumeroPiezas?: number;
	
	    static createFrom(source: any = {}) {
	        return new DetalleMercanciaCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoBruto = source["PesoBruto"];
	        this.PesoNeto = source["PesoNeto"];
	        this.PesoTara = source["PesoTara"];
	        this.NumeroPiezas = source["NumeroPiezas"];
	    }
	}
	export class GuiasIdentificacionCartaPorte31 {
	    Numero: string;
	    Descripcion: string;
	    Peso: number;
	
	    static createFrom(source: any = {}) {
	        return new GuiasIdentificacionCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.Descripcion = source["Descripcion"];
	        this.Peso = source["Peso"];
	    }
	}
	export class DocumentacionAduaneraCartaPorte31 {
	    TipoDocumento: string;
	    NumeroPedimento?: string;
	    IdentificadorDocumento?: string;
	    RfcImportador?: string;
	
	    static createFrom(source: any = {}) {
	        return new DocumentacionAduaneraCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoDocumento = source["TipoDocumento"];
	        this.NumeroPedimento = source["NumeroPedimento"];
	        this.IdentificadorDocumento = source["IdentificadorDocumento"];
	        this.RfcImportador = source["RfcImportador"];
	    }
	}
	export class MercanciaCartaPorte31 {
	    BienesTransportados: string;
	    ClaveStcc?: string;
	    Descripcion: string;
	    Cantidad: number;
	    ClaveUnidad: string;
	    Unidad?: string;
	    Dimensiones?: string;
	    MaterialPeligroso?: string;
	    EsMaterialPeligroso?: boolean;
	    ClaveMaterialPeligroso?: string;
	    Embalaje?: string;
	    DescripcionEmbalaje?: string;
	    SectorCofepris?: string;
	    NombreIngredienteActivo?: string;
	    NombreQuimico?: string;
	    DenominacionGenericaProducto?: string;
	    DenominacionDistintivaProducto?: string;
	    Fabricante?: string;
	    FechaCaducidadString?: string;
	    // Go type: time
	    FechaCaducidad?: any;
	    LoteMedicamento?: string;
	    FormaFarmaceutica?: string;
	    CondicionesEspecialesTransporte?: string;
	    RegistroSanitarioFolioAutorizacion?: string;
	    PermisoImportacion?: string;
	    FolioImportacionVucem?: string;
	    NoCas?: string;
	    RazonSocialEmpresaImportadora?: string;
	    NoRegistroSanitarioPlaguicidasCofepris?: string;
	    DatosFabricante?: string;
	    DatosFormulador?: string;
	    DatosMaquilador?: string;
	    UsoAutorizado?: string;
	    PesoKg: number;
	    ValorMercancia?: number;
	    Moneda?: string;
	    FraccionArancelaria?: string;
	    UUIDComercioExt?: string;
	    UuidComercioExterior?: string;
	    TipoMateria?: string;
	    DescripcionMateria?: string;
	    DocumentacionAduanera?: DocumentacionAduaneraCartaPorte31[];
	    GuiasIdentificacion?: GuiasIdentificacionCartaPorte31[];
	    CantidadTransporta?: CantidadTransporteCartaPorte31[];
	    DetalleMercancia?: DetalleMercanciaCartaPorte31;
	
	    static createFrom(source: any = {}) {
	        return new MercanciaCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BienesTransportados = source["BienesTransportados"];
	        this.ClaveStcc = source["ClaveStcc"];
	        this.Descripcion = source["Descripcion"];
	        this.Cantidad = source["Cantidad"];
	        this.ClaveUnidad = source["ClaveUnidad"];
	        this.Unidad = source["Unidad"];
	        this.Dimensiones = source["Dimensiones"];
	        this.MaterialPeligroso = source["MaterialPeligroso"];
	        this.EsMaterialPeligroso = source["EsMaterialPeligroso"];
	        this.ClaveMaterialPeligroso = source["ClaveMaterialPeligroso"];
	        this.Embalaje = source["Embalaje"];
	        this.DescripcionEmbalaje = source["DescripcionEmbalaje"];
	        this.SectorCofepris = source["SectorCofepris"];
	        this.NombreIngredienteActivo = source["NombreIngredienteActivo"];
	        this.NombreQuimico = source["NombreQuimico"];
	        this.DenominacionGenericaProducto = source["DenominacionGenericaProducto"];
	        this.DenominacionDistintivaProducto = source["DenominacionDistintivaProducto"];
	        this.Fabricante = source["Fabricante"];
	        this.FechaCaducidadString = source["FechaCaducidadString"];
	        this.FechaCaducidad = this.convertValues(source["FechaCaducidad"], null);
	        this.LoteMedicamento = source["LoteMedicamento"];
	        this.FormaFarmaceutica = source["FormaFarmaceutica"];
	        this.CondicionesEspecialesTransporte = source["CondicionesEspecialesTransporte"];
	        this.RegistroSanitarioFolioAutorizacion = source["RegistroSanitarioFolioAutorizacion"];
	        this.PermisoImportacion = source["PermisoImportacion"];
	        this.FolioImportacionVucem = source["FolioImportacionVucem"];
	        this.NoCas = source["NoCas"];
	        this.RazonSocialEmpresaImportadora = source["RazonSocialEmpresaImportadora"];
	        this.NoRegistroSanitarioPlaguicidasCofepris = source["NoRegistroSanitarioPlaguicidasCofepris"];
	        this.DatosFabricante = source["DatosFabricante"];
	        this.DatosFormulador = source["DatosFormulador"];
	        this.DatosMaquilador = source["DatosMaquilador"];
	        this.UsoAutorizado = source["UsoAutorizado"];
	        this.PesoKg = source["PesoKg"];
	        this.ValorMercancia = source["ValorMercancia"];
	        this.Moneda = source["Moneda"];
	        this.FraccionArancelaria = source["FraccionArancelaria"];
	        this.UUIDComercioExt = source["UUIDComercioExt"];
	        this.UuidComercioExterior = source["UuidComercioExterior"];
	        this.TipoMateria = source["TipoMateria"];
	        this.DescripcionMateria = source["DescripcionMateria"];
	        this.DocumentacionAduanera = this.convertValues(source["DocumentacionAduanera"], DocumentacionAduaneraCartaPorte31);
	        this.GuiasIdentificacion = this.convertValues(source["GuiasIdentificacion"], GuiasIdentificacionCartaPorte31);
	        this.CantidadTransporta = this.convertValues(source["CantidadTransporta"], CantidadTransporteCartaPorte31);
	        this.DetalleMercancia = this.convertValues(source["DetalleMercancia"], DetalleMercanciaCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MercanciasCartaPorte31 {
	    PesoBrutoTotal: number;
	    UnidadPeso: string;
	    PesoNetoTotal?: number;
	    NumeroTotalMercancias: number;
	    CargoPorTasacion?: number;
	    LogisticaInversaRecoleccionDevolucion?: string;
	    Mercancia: MercanciaCartaPorte31[];
	    Autotransporte?: AutotransporteCartaPorte31;
	    TransporteMaritimo?: TransporteMaritimoCartaPorte31;
	    TransporteAereo?: TransporteAereoCartaPorte31;
	    TransporteFerroviario?: TransporteFerroviarioCartaPorte31;
	
	    static createFrom(source: any = {}) {
	        return new MercanciasCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PesoBrutoTotal = source["PesoBrutoTotal"];
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoNetoTotal = source["PesoNetoTotal"];
	        this.NumeroTotalMercancias = source["NumeroTotalMercancias"];
	        this.CargoPorTasacion = source["CargoPorTasacion"];
	        this.LogisticaInversaRecoleccionDevolucion = source["LogisticaInversaRecoleccionDevolucion"];
	        this.Mercancia = this.convertValues(source["Mercancia"], MercanciaCartaPorte31);
	        this.Autotransporte = this.convertValues(source["Autotransporte"], AutotransporteCartaPorte31);
	        this.TransporteMaritimo = this.convertValues(source["TransporteMaritimo"], TransporteMaritimoCartaPorte31);
	        this.TransporteAereo = this.convertValues(source["TransporteAereo"], TransporteAereoCartaPorte31);
	        this.TransporteFerroviario = this.convertValues(source["TransporteFerroviario"], TransporteFerroviarioCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DomicilioCartaPorte31 {
	    Calle?: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class UbicacionCartaPorte31 {
	    TipoUbicacion: string;
	    IdUbicacion?: string;
	    RfcRemitenteDestinatario: string;
	    NombreRemitenteDestinatario?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    NoEstacion?: string;
	    NombreEstacion?: string;
	    NavegacionTrafico?: string;
	    FechaHoraSalidaLlegadaString: string;
	    // Go type: time
	    FechaHoraSalidaLlegada: any;
	    TipoEstacion?: string;
	    DistanciaRecorrida?: number;
	    Domicilio?: DomicilioCartaPorte31;
	
	    static createFrom(source: any = {}) {
	        return new UbicacionCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoUbicacion = source["TipoUbicacion"];
	        this.IdUbicacion = source["IdUbicacion"];
	        this.RfcRemitenteDestinatario = source["RfcRemitenteDestinatario"];
	        this.NombreRemitenteDestinatario = source["NombreRemitenteDestinatario"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NoEstacion = source["NoEstacion"];
	        this.NombreEstacion = source["NombreEstacion"];
	        this.NavegacionTrafico = source["NavegacionTrafico"];
	        this.FechaHoraSalidaLlegadaString = source["FechaHoraSalidaLlegadaString"];
	        this.FechaHoraSalidaLlegada = this.convertValues(source["FechaHoraSalidaLlegada"], null);
	        this.TipoEstacion = source["TipoEstacion"];
	        this.DistanciaRecorrida = source["DistanciaRecorrida"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RegimenAduaneroCartaPorte31 {
	    RegimenAduanero: string;
	
	    static createFrom(source: any = {}) {
	        return new RegimenAduaneroCartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.RegimenAduanero = source["RegimenAduanero"];
	    }
	}
	export class CartaPorte31 {
	    Version: string;
	    IdCCP: string;
	    IdCcp: string;
	    TransporteInternacional: string;
	    EsTransporteInternacional: boolean;
	    EntradaSalidaMercancia?: string;
	    PaisOrigenDestino?: string;
	    ViaEntradaSalida?: string;
	    TotalDistanciaRecorrida?: number;
	    RegistroIstmo?: string;
	    UbicacionPoloOrigen?: string;
	    UbicacionPoloDestino?: string;
	    RegimenesAduaneros?: RegimenAduaneroCartaPorte31[];
	    Ubicaciones: UbicacionCartaPorte31[];
	    Mercancias: MercanciasCartaPorte31;
	    FiguraTransporte?: FiguraTransporteCartaPorte31;
	
	    static createFrom(source: any = {}) {
	        return new CartaPorte31(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.IdCCP = source["IdCCP"];
	        this.IdCcp = source["IdCcp"];
	        this.TransporteInternacional = source["TransporteInternacional"];
	        this.EsTransporteInternacional = source["EsTransporteInternacional"];
	        this.EntradaSalidaMercancia = source["EntradaSalidaMercancia"];
	        this.PaisOrigenDestino = source["PaisOrigenDestino"];
	        this.ViaEntradaSalida = source["ViaEntradaSalida"];
	        this.TotalDistanciaRecorrida = source["TotalDistanciaRecorrida"];
	        this.RegistroIstmo = source["RegistroIstmo"];
	        this.UbicacionPoloOrigen = source["UbicacionPoloOrigen"];
	        this.UbicacionPoloDestino = source["UbicacionPoloDestino"];
	        this.RegimenesAduaneros = this.convertValues(source["RegimenesAduaneros"], RegimenAduaneroCartaPorte31);
	        this.Ubicaciones = this.convertValues(source["Ubicaciones"], UbicacionCartaPorte31);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciasCartaPorte31);
	        this.FiguraTransporte = this.convertValues(source["FiguraTransporte"], FiguraTransporteCartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PartesTransporteCartaPorte30 {
	    Parte: string;
	
	    static createFrom(source: any = {}) {
	        return new PartesTransporteCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Parte = source["Parte"];
	    }
	}
	export class TiposFiguraCartaPorte30 {
	    Tipo: string;
	    Rfc?: string;
	    ResidenciaFiscal?: string;
	    NumRegIdTrib?: string;
	    NoLicencia?: string;
	    Nombre: string;
	    PartesTransporte?: PartesTransporteCartaPorte30[];
	    Domicilio?: DomicilioCartaPorte30;
	
	    static createFrom(source: any = {}) {
	        return new TiposFiguraCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Rfc = source["Rfc"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.NoLicencia = source["NoLicencia"];
	        this.Nombre = source["Nombre"];
	        this.PartesTransporte = this.convertValues(source["PartesTransporte"], PartesTransporteCartaPorte30);
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class FiguraTransporteCartaPorte30 {
	    TiposFigura: TiposFiguraCartaPorte30[];
	
	    static createFrom(source: any = {}) {
	        return new FiguraTransporteCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TiposFigura = this.convertValues(source["TiposFigura"], TiposFiguraCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DerechosDePasoCartaPorte30 {
	    Tipo: string;
	    KilometrajePagado: number;
	
	    static createFrom(source: any = {}) {
	        return new DerechosDePasoCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.KilometrajePagado = source["KilometrajePagado"];
	    }
	}
	export class TransporteFerroviarioCartaPorte30 {
	    TipoTrafico: string;
	    TipoServicio: string;
	    NoPolizaSeguro?: string;
	    NombreAseguradora?: string;
	    DerechosPaso?: DerechosDePasoCartaPorte30[];
	    Carro: CarroCartaPorte30[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteFerroviarioCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoTrafico = source["TipoTrafico"];
	        this.TipoServicio = source["TipoServicio"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.DerechosPaso = this.convertValues(source["DerechosPaso"], DerechosDePasoCartaPorte30);
	        this.Carro = this.convertValues(source["Carro"], CarroCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TransporteAereoCartaPorte30 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    MatriculaAeronave?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    NoGuia: string;
	    RfcEmbarcador?: string;
	    ResidenciaFiscalEmbarcador?: string;
	    NumRegIdTribEmbarcador?: string;
	    NombreEmbarcador?: string;
	    LugarContrato?: string;
	    CodigoTransportista: string;
	
	    static createFrom(source: any = {}) {
	        return new TransporteAereoCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.MatriculaAeronave = source["MatriculaAeronave"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.NoGuia = source["NoGuia"];
	        this.RfcEmbarcador = source["RfcEmbarcador"];
	        this.ResidenciaFiscalEmbarcador = source["ResidenciaFiscalEmbarcador"];
	        this.NumRegIdTribEmbarcador = source["NumRegIdTribEmbarcador"];
	        this.NombreEmbarcador = source["NombreEmbarcador"];
	        this.LugarContrato = source["LugarContrato"];
	        this.CodigoTransportista = source["CodigoTransportista"];
	    }
	}
	export class RemolqueCCPCartaPorte30 {
	    Subtipo: string;
	    Placa: string;
	
	    static createFrom(source: any = {}) {
	        return new RemolqueCCPCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Subtipo = source["Subtipo"];
	        this.Placa = source["Placa"];
	    }
	}
	export class ContenedorCartaPorte30 {
	    Tipo: string;
	    Matricula?: string;
	    NoPrecinto?: string;
	    IdCcpRelacionado?: string;
	    PlacaVmCcp?: string;
	    FechaCertificacionCcp?: string;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Matricula = source["Matricula"];
	        this.NoPrecinto = source["NoPrecinto"];
	        this.IdCcpRelacionado = source["IdCcpRelacionado"];
	        this.PlacaVmCcp = source["PlacaVmCcp"];
	        this.FechaCertificacionCcp = source["FechaCertificacionCcp"];
	    }
	}
	export class TransporteMaritimoCartaPorte30 {
	    PermisoSct?: string;
	    NoPermisoSct?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    TipoEmbarcacion: string;
	    Matricula: string;
	    NoOmi: string;
	    AnioEmbarcacion?: number;
	    NombreEmbarcacion?: string;
	    NacionalidadEmbarcacion: string;
	    UnidadesArqueoBruto: number;
	    TipoCarga: string;
	    Eslora?: number;
	    Manga?: number;
	    Calado?: number;
	    Puntal?: number;
	    LineaNaviera?: string;
	    NombreAgenteNaviero: string;
	    NoAutorizacionNaviero: string;
	    NoViaje?: string;
	    NoConocimientoEmbarque?: string;
	    PermisoTemporalNavegacion?: string;
	    Contenedor?: ContenedorCartaPorte30[];
	    RemolquesCcp?: RemolqueCCPCartaPorte30[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteMaritimoCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.TipoEmbarcacion = source["TipoEmbarcacion"];
	        this.Matricula = source["Matricula"];
	        this.NoOmi = source["NoOmi"];
	        this.AnioEmbarcacion = source["AnioEmbarcacion"];
	        this.NombreEmbarcacion = source["NombreEmbarcacion"];
	        this.NacionalidadEmbarcacion = source["NacionalidadEmbarcacion"];
	        this.UnidadesArqueoBruto = source["UnidadesArqueoBruto"];
	        this.TipoCarga = source["TipoCarga"];
	        this.Eslora = source["Eslora"];
	        this.Manga = source["Manga"];
	        this.Calado = source["Calado"];
	        this.Puntal = source["Puntal"];
	        this.LineaNaviera = source["LineaNaviera"];
	        this.NombreAgenteNaviero = source["NombreAgenteNaviero"];
	        this.NoAutorizacionNaviero = source["NoAutorizacionNaviero"];
	        this.NoViaje = source["NoViaje"];
	        this.NoConocimientoEmbarque = source["NoConocimientoEmbarque"];
	        this.PermisoTemporalNavegacion = source["PermisoTemporalNavegacion"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCartaPorte30);
	        this.RemolquesCcp = this.convertValues(source["RemolquesCcp"], RemolqueCCPCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DetalleMercanciaCartaPorte30 {
	    UnidadPeso: string;
	    PesoTara: number;
	    PesoNeto: number;
	    PesoBruto: number;
	    NumeroPiezas?: number;
	
	    static createFrom(source: any = {}) {
	        return new DetalleMercanciaCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoTara = source["PesoTara"];
	        this.PesoNeto = source["PesoNeto"];
	        this.PesoBruto = source["PesoBruto"];
	        this.NumeroPiezas = source["NumeroPiezas"];
	    }
	}
	export class GuiasIdentificacionCartaPorte30 {
	    NumeroGuiaIdentificacion: string;
	    DescripGuiaIdentificacion: string;
	    PesoGuiaIdentificacion: number;
	
	    static createFrom(source: any = {}) {
	        return new GuiasIdentificacionCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumeroGuiaIdentificacion = source["NumeroGuiaIdentificacion"];
	        this.DescripGuiaIdentificacion = source["DescripGuiaIdentificacion"];
	        this.PesoGuiaIdentificacion = source["PesoGuiaIdentificacion"];
	    }
	}
	export class DocumentacionAduaneraCartaPorte30 {
	    TipoDocumento: string;
	    NumeroPedimento?: string;
	    IdentificadorDocumento?: string;
	    RfcImportador?: string;
	
	    static createFrom(source: any = {}) {
	        return new DocumentacionAduaneraCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoDocumento = source["TipoDocumento"];
	        this.NumeroPedimento = source["NumeroPedimento"];
	        this.IdentificadorDocumento = source["IdentificadorDocumento"];
	        this.RfcImportador = source["RfcImportador"];
	    }
	}
	export class MercanciaCartaPorte30 {
	    BienesTransportados: string;
	    ClaveStcc?: string;
	    Descripcion: string;
	    Cantidad: number;
	    ClaveUnidad: string;
	    Unidad?: string;
	    Dimensiones?: string;
	    MaterialPeligroso?: string;
	    EsMaterialPeligroso?: boolean;
	    ClaveMaterialPeligroso?: string;
	    Embalaje?: string;
	    DescripcionEmbalaje?: string;
	    SectorCofepris?: string;
	    NombreIngredienteActivo?: string;
	    NombreQuimico?: string;
	    DenominacionGenericaProducto?: string;
	    DenominacionDistintivaProducto?: string;
	    Fabricante?: string;
	    FechaCaducidadString?: string;
	    // Go type: time
	    FechaCaducidad?: any;
	    LoteMedicamento?: string;
	    FormaFarmaceutica?: string;
	    CondicionesEspecialesTransporte?: string;
	    RegistroSanitarioFolioAutorizacion?: string;
	    PermisoImportacion?: string;
	    FolioImportacionVucem?: string;
	    NoCas?: string;
	    RazonSocialEmpresaImportadora?: string;
	    NoRegistroSanitarioPlaguicidasCofepris?: string;
	    DatosFabricante?: string;
	    DatosFormulador?: string;
	    DatosMaquilador?: string;
	    UsoAutorizado?: string;
	    PesoKg: number;
	    ValorMercancia?: number;
	    Moneda?: string;
	    FraccionArancelaria?: string;
	    UUIDComercioExt?: string;
	    UuidComercioExterior?: string;
	    TipoMateria?: string;
	    DescripcionMateria?: string;
	    DocumentacionAduanera?: DocumentacionAduaneraCartaPorte30[];
	    GuiasIdentificacion?: GuiasIdentificacionCartaPorte30[];
	    CantidadTransporta?: CantidadTransportaCartaPorte30[];
	    DetalleMercancia?: DetalleMercanciaCartaPorte30;
	
	    static createFrom(source: any = {}) {
	        return new MercanciaCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BienesTransportados = source["BienesTransportados"];
	        this.ClaveStcc = source["ClaveStcc"];
	        this.Descripcion = source["Descripcion"];
	        this.Cantidad = source["Cantidad"];
	        this.ClaveUnidad = source["ClaveUnidad"];
	        this.Unidad = source["Unidad"];
	        this.Dimensiones = source["Dimensiones"];
	        this.MaterialPeligroso = source["MaterialPeligroso"];
	        this.EsMaterialPeligroso = source["EsMaterialPeligroso"];
	        this.ClaveMaterialPeligroso = source["ClaveMaterialPeligroso"];
	        this.Embalaje = source["Embalaje"];
	        this.DescripcionEmbalaje = source["DescripcionEmbalaje"];
	        this.SectorCofepris = source["SectorCofepris"];
	        this.NombreIngredienteActivo = source["NombreIngredienteActivo"];
	        this.NombreQuimico = source["NombreQuimico"];
	        this.DenominacionGenericaProducto = source["DenominacionGenericaProducto"];
	        this.DenominacionDistintivaProducto = source["DenominacionDistintivaProducto"];
	        this.Fabricante = source["Fabricante"];
	        this.FechaCaducidadString = source["FechaCaducidadString"];
	        this.FechaCaducidad = this.convertValues(source["FechaCaducidad"], null);
	        this.LoteMedicamento = source["LoteMedicamento"];
	        this.FormaFarmaceutica = source["FormaFarmaceutica"];
	        this.CondicionesEspecialesTransporte = source["CondicionesEspecialesTransporte"];
	        this.RegistroSanitarioFolioAutorizacion = source["RegistroSanitarioFolioAutorizacion"];
	        this.PermisoImportacion = source["PermisoImportacion"];
	        this.FolioImportacionVucem = source["FolioImportacionVucem"];
	        this.NoCas = source["NoCas"];
	        this.RazonSocialEmpresaImportadora = source["RazonSocialEmpresaImportadora"];
	        this.NoRegistroSanitarioPlaguicidasCofepris = source["NoRegistroSanitarioPlaguicidasCofepris"];
	        this.DatosFabricante = source["DatosFabricante"];
	        this.DatosFormulador = source["DatosFormulador"];
	        this.DatosMaquilador = source["DatosMaquilador"];
	        this.UsoAutorizado = source["UsoAutorizado"];
	        this.PesoKg = source["PesoKg"];
	        this.ValorMercancia = source["ValorMercancia"];
	        this.Moneda = source["Moneda"];
	        this.FraccionArancelaria = source["FraccionArancelaria"];
	        this.UUIDComercioExt = source["UUIDComercioExt"];
	        this.UuidComercioExterior = source["UuidComercioExterior"];
	        this.TipoMateria = source["TipoMateria"];
	        this.DescripcionMateria = source["DescripcionMateria"];
	        this.DocumentacionAduanera = this.convertValues(source["DocumentacionAduanera"], DocumentacionAduaneraCartaPorte30);
	        this.GuiasIdentificacion = this.convertValues(source["GuiasIdentificacion"], GuiasIdentificacionCartaPorte30);
	        this.CantidadTransporta = this.convertValues(source["CantidadTransporta"], CantidadTransportaCartaPorte30);
	        this.DetalleMercancia = this.convertValues(source["DetalleMercancia"], DetalleMercanciaCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MercanciasCartaPorte30 {
	    PesoBrutoTotal: number;
	    UnidadPeso: string;
	    PesoNetoTotal?: number;
	    NumeroTotalMercancias: number;
	    CargoPorTasacion?: number;
	    LogisticaInversaRecoleccionDevolucion?: string;
	    Mercancia: MercanciaCartaPorte30[];
	    Autotransporte?: AutotransporteCartaPorte30;
	    TransporteMaritimo?: TransporteMaritimoCartaPorte30;
	    TransporteAereo?: TransporteAereoCartaPorte30;
	    TransporteFerroviario?: TransporteFerroviarioCartaPorte30;
	
	    static createFrom(source: any = {}) {
	        return new MercanciasCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PesoBrutoTotal = source["PesoBrutoTotal"];
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoNetoTotal = source["PesoNetoTotal"];
	        this.NumeroTotalMercancias = source["NumeroTotalMercancias"];
	        this.CargoPorTasacion = source["CargoPorTasacion"];
	        this.LogisticaInversaRecoleccionDevolucion = source["LogisticaInversaRecoleccionDevolucion"];
	        this.Mercancia = this.convertValues(source["Mercancia"], MercanciaCartaPorte30);
	        this.Autotransporte = this.convertValues(source["Autotransporte"], AutotransporteCartaPorte30);
	        this.TransporteMaritimo = this.convertValues(source["TransporteMaritimo"], TransporteMaritimoCartaPorte30);
	        this.TransporteAereo = this.convertValues(source["TransporteAereo"], TransporteAereoCartaPorte30);
	        this.TransporteFerroviario = this.convertValues(source["TransporteFerroviario"], TransporteFerroviarioCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DomicilioCartaPorte30 {
	    Calle?: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado?: string;
	    Pais?: string;
	    CodigoPostal?: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class UbicacionCartaPorte30 {
	    TipoUbicacion: string;
	    IdUbicacion?: string;
	    RfcRemitenteDestinatario: string;
	    NombreRemitenteDestinatario?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    NoEstacion?: string;
	    NombreEstacion?: string;
	    NavegacionTrafico?: string;
	    FechaHoraSalidaLlegadaString: string;
	    // Go type: time
	    FechaHoraSalidaLlegada: any;
	    TipoEstacion?: string;
	    DistanciaRecorrida?: number;
	    Domicilio?: DomicilioCartaPorte30;
	
	    static createFrom(source: any = {}) {
	        return new UbicacionCartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoUbicacion = source["TipoUbicacion"];
	        this.IdUbicacion = source["IdUbicacion"];
	        this.RfcRemitenteDestinatario = source["RfcRemitenteDestinatario"];
	        this.NombreRemitenteDestinatario = source["NombreRemitenteDestinatario"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NoEstacion = source["NoEstacion"];
	        this.NombreEstacion = source["NombreEstacion"];
	        this.NavegacionTrafico = source["NavegacionTrafico"];
	        this.FechaHoraSalidaLlegadaString = source["FechaHoraSalidaLlegadaString"];
	        this.FechaHoraSalidaLlegada = this.convertValues(source["FechaHoraSalidaLlegada"], null);
	        this.TipoEstacion = source["TipoEstacion"];
	        this.DistanciaRecorrida = source["DistanciaRecorrida"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CartaPorte30 {
	    Version: string;
	    IdCCP: string;
	    IdCcp: string;
	    TransporteInternacional: string;
	    EsTransporteInternacional: boolean;
	    RegimenAduanero?: string;
	    EntradaSalidaMercancia?: string;
	    PaisOrigenDestino?: string;
	    ViaEntradaSalida?: string;
	    TotalDistanciaRecorrida?: number;
	    RegistroIstmo?: string;
	    UbicacionPoloOrigen?: string;
	    UbicacionPoloDestino?: string;
	    Ubicaciones: UbicacionCartaPorte30[];
	    Mercancias: MercanciasCartaPorte30;
	    FiguraTransporte?: FiguraTransporteCartaPorte30;
	
	    static createFrom(source: any = {}) {
	        return new CartaPorte30(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.IdCCP = source["IdCCP"];
	        this.IdCcp = source["IdCcp"];
	        this.TransporteInternacional = source["TransporteInternacional"];
	        this.EsTransporteInternacional = source["EsTransporteInternacional"];
	        this.RegimenAduanero = source["RegimenAduanero"];
	        this.EntradaSalidaMercancia = source["EntradaSalidaMercancia"];
	        this.PaisOrigenDestino = source["PaisOrigenDestino"];
	        this.ViaEntradaSalida = source["ViaEntradaSalida"];
	        this.TotalDistanciaRecorrida = source["TotalDistanciaRecorrida"];
	        this.RegistroIstmo = source["RegistroIstmo"];
	        this.UbicacionPoloOrigen = source["UbicacionPoloOrigen"];
	        this.UbicacionPoloDestino = source["UbicacionPoloDestino"];
	        this.Ubicaciones = this.convertValues(source["Ubicaciones"], UbicacionCartaPorte30);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciasCartaPorte30);
	        this.FiguraTransporte = this.convertValues(source["FiguraTransporte"], FiguraTransporteCartaPorte30);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PartesTransporteCartaPorte20 {
	    Parte: string;
	
	    static createFrom(source: any = {}) {
	        return new PartesTransporteCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Parte = source["Parte"];
	    }
	}
	export class TiposFiguraCartaPorte20 {
	    Tipo: string;
	    Rfc?: string;
	    NoLicencia?: string;
	    Nombre?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    PartesTransporte?: PartesTransporteCartaPorte20[];
	    Domicilio?: DomicilioCartaPorte20;
	
	    static createFrom(source: any = {}) {
	        return new TiposFiguraCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Rfc = source["Rfc"];
	        this.NoLicencia = source["NoLicencia"];
	        this.Nombre = source["Nombre"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.PartesTransporte = this.convertValues(source["PartesTransporte"], PartesTransporteCartaPorte20);
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class FiguraTransporteCartaPorte20 {
	    TiposFigura: TiposFiguraCartaPorte20[];
	
	    static createFrom(source: any = {}) {
	        return new FiguraTransporteCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TiposFigura = this.convertValues(source["TiposFigura"], TiposFiguraCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DerechoPasoCartaPorte20 {
	    Tipo: string;
	    KilometrajePagado: number;
	
	    static createFrom(source: any = {}) {
	        return new DerechoPasoCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.KilometrajePagado = source["KilometrajePagado"];
	    }
	}
	export class TransporteFerroviarioCartaPorte20 {
	    TipoServicio: string;
	    TipoTrafico: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    DerechoPaso?: DerechoPasoCartaPorte20[];
	    Carro: CarroCartaPorte20[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteFerroviarioCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoServicio = source["TipoServicio"];
	        this.TipoTrafico = source["TipoTrafico"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.DerechoPaso = this.convertValues(source["DerechoPaso"], DerechoPasoCartaPorte20);
	        this.Carro = this.convertValues(source["Carro"], CarroCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TransporteAereoCartaPorte20 {
	    PermSct: string;
	    NoPermisoSct: string;
	    MatriculaAeronave?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    NoGuia: string;
	    LugarContrato?: string;
	    CodigoTransportista: string;
	    RfcEmbarcador?: string;
	    NumRegIdTribEmbarcador?: string;
	    ResidenciaFiscalEmbarcador?: string;
	    NombreEmbarcador?: string;
	
	    static createFrom(source: any = {}) {
	        return new TransporteAereoCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermSct = source["PermSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.MatriculaAeronave = source["MatriculaAeronave"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.NoGuia = source["NoGuia"];
	        this.LugarContrato = source["LugarContrato"];
	        this.CodigoTransportista = source["CodigoTransportista"];
	        this.RfcEmbarcador = source["RfcEmbarcador"];
	        this.NumRegIdTribEmbarcador = source["NumRegIdTribEmbarcador"];
	        this.ResidenciaFiscalEmbarcador = source["ResidenciaFiscalEmbarcador"];
	        this.NombreEmbarcador = source["NombreEmbarcador"];
	    }
	}
	export class ContenedorCartaPorte20 {
	    Matricula: string;
	    Tipo: string;
	    NoPrecinto?: string;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Matricula = source["Matricula"];
	        this.Tipo = source["Tipo"];
	        this.NoPrecinto = source["NoPrecinto"];
	    }
	}
	export class TransporteMaritimoCartaPorte20 {
	    PermisoSct?: string;
	    NoPermisoSct?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    TipoEmbarcacion: string;
	    Matricula: string;
	    NoOmi: string;
	    AnioEmbarcacion?: string;
	    NombreEmbarcacion?: string;
	    NacionalidadEmbarcacion: string;
	    UnidadesArqueoBruto: number;
	    TipoCarga: string;
	    NumCertItc: string;
	    Eslora?: number;
	    Manga?: number;
	    Calado?: number;
	    LineaNaviera?: string;
	    NombreAgenteNaviero: string;
	    NoAutorizacionNaviero: string;
	    NoViaje?: string;
	    NoConocimientoEmbarque?: string;
	    Contenedor: ContenedorCartaPorte20[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteMaritimoCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.TipoEmbarcacion = source["TipoEmbarcacion"];
	        this.Matricula = source["Matricula"];
	        this.NoOmi = source["NoOmi"];
	        this.AnioEmbarcacion = source["AnioEmbarcacion"];
	        this.NombreEmbarcacion = source["NombreEmbarcacion"];
	        this.NacionalidadEmbarcacion = source["NacionalidadEmbarcacion"];
	        this.UnidadesArqueoBruto = source["UnidadesArqueoBruto"];
	        this.TipoCarga = source["TipoCarga"];
	        this.NumCertItc = source["NumCertItc"];
	        this.Eslora = source["Eslora"];
	        this.Manga = source["Manga"];
	        this.Calado = source["Calado"];
	        this.LineaNaviera = source["LineaNaviera"];
	        this.NombreAgenteNaviero = source["NombreAgenteNaviero"];
	        this.NoAutorizacionNaviero = source["NoAutorizacionNaviero"];
	        this.NoViaje = source["NoViaje"];
	        this.NoConocimientoEmbarque = source["NoConocimientoEmbarque"];
	        this.Contenedor = this.convertValues(source["Contenedor"], ContenedorCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DetalleMercanciaCartaPorte20 {
	    UnidadPeso: string;
	    PesoBruto: number;
	    PesoNeto: number;
	    PesoTara: number;
	    NumeroPiezas?: number;
	
	    static createFrom(source: any = {}) {
	        return new DetalleMercanciaCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoBruto = source["PesoBruto"];
	        this.PesoNeto = source["PesoNeto"];
	        this.PesoTara = source["PesoTara"];
	        this.NumeroPiezas = source["NumeroPiezas"];
	    }
	}
	export class GuiasIdentificacionCartaPorte20 {
	    Numero: string;
	    Descripcion: string;
	    Peso: number;
	
	    static createFrom(source: any = {}) {
	        return new GuiasIdentificacionCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.Descripcion = source["Descripcion"];
	        this.Peso = source["Peso"];
	    }
	}
	export class PedimentosCartaPorte20 {
	    Pedimento: string;
	
	    static createFrom(source: any = {}) {
	        return new PedimentosCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Pedimento = source["Pedimento"];
	    }
	}
	export class MercanciaCartaPorte20 {
	    BienesTransportados: string;
	    ClaveStcc?: string;
	    Descripcion: string;
	    Cantidad: number;
	    ClaveUnidad: string;
	    Unidad?: string;
	    Dimensiones?: string;
	    MaterialPeligroso?: string;
	    EsMaterialPeligroso?: boolean;
	    ClaveMaterialPeligroso?: string;
	    Embalaje?: string;
	    DescripcionEmbalaje?: string;
	    PesoKg: number;
	    ValorMercancia?: number;
	    Moneda?: string;
	    FraccionArancelaria?: string;
	    UUIDComercioExt?: string;
	    UuidComercioExterior?: string;
	    Pedimentos?: PedimentosCartaPorte20[];
	    GuiasIdentificacion?: GuiasIdentificacionCartaPorte20[];
	    CantidadTransporta?: CantidadTransportaCartaPorte20[];
	    DetalleMercancia?: DetalleMercanciaCartaPorte20;
	
	    static createFrom(source: any = {}) {
	        return new MercanciaCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BienesTransportados = source["BienesTransportados"];
	        this.ClaveStcc = source["ClaveStcc"];
	        this.Descripcion = source["Descripcion"];
	        this.Cantidad = source["Cantidad"];
	        this.ClaveUnidad = source["ClaveUnidad"];
	        this.Unidad = source["Unidad"];
	        this.Dimensiones = source["Dimensiones"];
	        this.MaterialPeligroso = source["MaterialPeligroso"];
	        this.EsMaterialPeligroso = source["EsMaterialPeligroso"];
	        this.ClaveMaterialPeligroso = source["ClaveMaterialPeligroso"];
	        this.Embalaje = source["Embalaje"];
	        this.DescripcionEmbalaje = source["DescripcionEmbalaje"];
	        this.PesoKg = source["PesoKg"];
	        this.ValorMercancia = source["ValorMercancia"];
	        this.Moneda = source["Moneda"];
	        this.FraccionArancelaria = source["FraccionArancelaria"];
	        this.UUIDComercioExt = source["UUIDComercioExt"];
	        this.UuidComercioExterior = source["UuidComercioExterior"];
	        this.Pedimentos = this.convertValues(source["Pedimentos"], PedimentosCartaPorte20);
	        this.GuiasIdentificacion = this.convertValues(source["GuiasIdentificacion"], GuiasIdentificacionCartaPorte20);
	        this.CantidadTransporta = this.convertValues(source["CantidadTransporta"], CantidadTransportaCartaPorte20);
	        this.DetalleMercancia = this.convertValues(source["DetalleMercancia"], DetalleMercanciaCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MercanciasCartaPorte20 {
	    PesoBrutoTotal: number;
	    UnidadPeso: string;
	    PesoNetoTotal?: number;
	    NumeroTotalMercancias: number;
	    CargoPorTasacion?: number;
	    Mercancia: MercanciaCartaPorte20[];
	    Autotrasporte?: AutotransporteCartaPorte20;
	    TransporteMaritimo?: TransporteMaritimoCartaPorte20;
	    TransporteAereo?: TransporteAereoCartaPorte20;
	    TransporteFerroviario?: TransporteFerroviarioCartaPorte20;
	
	    static createFrom(source: any = {}) {
	        return new MercanciasCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PesoBrutoTotal = source["PesoBrutoTotal"];
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoNetoTotal = source["PesoNetoTotal"];
	        this.NumeroTotalMercancias = source["NumeroTotalMercancias"];
	        this.CargoPorTasacion = source["CargoPorTasacion"];
	        this.Mercancia = this.convertValues(source["Mercancia"], MercanciaCartaPorte20);
	        this.Autotrasporte = this.convertValues(source["Autotrasporte"], AutotransporteCartaPorte20);
	        this.TransporteMaritimo = this.convertValues(source["TransporteMaritimo"], TransporteMaritimoCartaPorte20);
	        this.TransporteAereo = this.convertValues(source["TransporteAereo"], TransporteAereoCartaPorte20);
	        this.TransporteFerroviario = this.convertValues(source["TransporteFerroviario"], TransporteFerroviarioCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DomicilioCartaPorte20 {
	    Calle?: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class UbicacionCartaPorte20 {
	    TipoUbicacion: string;
	    IdUbicacion?: string;
	    RfcRemitenteDestinatario: string;
	    NombreRemitenteDestinatario?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    NoEstacion?: string;
	    NombreEstacion?: string;
	    NavegacionTrafico?: string;
	    FechaHoraSalidaLlegadaString: string;
	    // Go type: time
	    FechaHoraSalidaLlegada: any;
	    TipoEstacion?: string;
	    DistanciaRecorrida?: number;
	    Domicilio?: DomicilioCartaPorte20;
	
	    static createFrom(source: any = {}) {
	        return new UbicacionCartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoUbicacion = source["TipoUbicacion"];
	        this.IdUbicacion = source["IdUbicacion"];
	        this.RfcRemitenteDestinatario = source["RfcRemitenteDestinatario"];
	        this.NombreRemitenteDestinatario = source["NombreRemitenteDestinatario"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NoEstacion = source["NoEstacion"];
	        this.NombreEstacion = source["NombreEstacion"];
	        this.NavegacionTrafico = source["NavegacionTrafico"];
	        this.FechaHoraSalidaLlegadaString = source["FechaHoraSalidaLlegadaString"];
	        this.FechaHoraSalidaLlegada = this.convertValues(source["FechaHoraSalidaLlegada"], null);
	        this.TipoEstacion = source["TipoEstacion"];
	        this.DistanciaRecorrida = source["DistanciaRecorrida"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CartaPorte20 {
	    Version: string;
	    TransporteInternacional: string;
	    EsTransporteInternacional: boolean;
	    EntradaSalidaMercancia?: string;
	    PaisOrigenDestino?: string;
	    ViaEntradaSalida?: string;
	    TotalDistanciaRecorrida?: number;
	    Ubicaciones: UbicacionCartaPorte20[];
	    Mercancias: MercanciasCartaPorte20;
	    FiguraTransporte?: FiguraTransporteCartaPorte20;
	
	    static createFrom(source: any = {}) {
	        return new CartaPorte20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TransporteInternacional = source["TransporteInternacional"];
	        this.EsTransporteInternacional = source["EsTransporteInternacional"];
	        this.EntradaSalidaMercancia = source["EntradaSalidaMercancia"];
	        this.PaisOrigenDestino = source["PaisOrigenDestino"];
	        this.ViaEntradaSalida = source["ViaEntradaSalida"];
	        this.TotalDistanciaRecorrida = source["TotalDistanciaRecorrida"];
	        this.Ubicaciones = this.convertValues(source["Ubicaciones"], UbicacionCartaPorte20);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciasCartaPorte20);
	        this.FiguraTransporte = this.convertValues(source["FiguraTransporte"], FiguraTransporteCartaPorte20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class NotificadoCartaPorte10 {
	    Rfc?: string;
	    Nombre?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    Domicilio?: DomicilioCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new NotificadoCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PropietarioCartaPorte10 {
	    Rfc?: string;
	    Nombre?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    Domicilio?: DomicilioCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new PropietarioCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class OperadorCartaPorte10 {
	    Rfc?: string;
	    NoLicencia?: string;
	    Nombre?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    Domicilio?: DomicilioCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new OperadorCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.NoLicencia = source["NoLicencia"];
	        this.Nombre = source["Nombre"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class FiguraTransporteCartaPorte10 {
	    ClaveTransporte: string;
	    Operadores?: OperadorCartaPorte10[];
	    Propietario?: PropietarioCartaPorte10[];
	    Arrendatarios?: ArrendatarioCartaPorte10[];
	    Notificado?: NotificadoCartaPorte10[];
	
	    static createFrom(source: any = {}) {
	        return new FiguraTransporteCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveTransporte = source["ClaveTransporte"];
	        this.Operadores = this.convertValues(source["Operadores"], OperadorCartaPorte10);
	        this.Propietario = this.convertValues(source["Propietario"], PropietarioCartaPorte10);
	        this.Arrendatarios = this.convertValues(source["Arrendatarios"], ArrendatarioCartaPorte10);
	        this.Notificado = this.convertValues(source["Notificado"], NotificadoCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DerechoPasoCartaPorte10 {
	    Tipo: string;
	    KilometrajePagado: number;
	
	    static createFrom(source: any = {}) {
	        return new DerechoPasoCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.KilometrajePagado = source["KilometrajePagado"];
	    }
	}
	export class TransporteFerroviarioCartaPorte10 {
	    TipoServicio: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    Concesionario?: string;
	    DerechoPaso?: DerechoPasoCartaPorte10[];
	    Carro: CarroCartaPorte10[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteFerroviarioCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoServicio = source["TipoServicio"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.Concesionario = source["Concesionario"];
	        this.DerechoPaso = this.convertValues(source["DerechoPaso"], DerechoPasoCartaPorte10);
	        this.Carro = this.convertValues(source["Carro"], CarroCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TransporteAereoCartaPorte10 {
	    PermisoSct: string;
	    NoPermisoSct: string;
	    MatriculaAeronave?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    NoGuia: string;
	    LugarContrato?: string;
	    RfcTransportista?: string;
	    CodigoTransportista: string;
	    NumRegIdTribTransportista?: string;
	    ResidenciaFiscalTransportista?: string;
	    NombreTransportista?: string;
	    RfcEmbarcador?: string;
	    NumRegIdTribEmbarcador?: string;
	    ResidenciaFiscalEmbarcador?: string;
	    NombreEmbarcador?: string;
	
	    static createFrom(source: any = {}) {
	        return new TransporteAereoCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.MatriculaAeronave = source["MatriculaAeronave"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.NoGuia = source["NoGuia"];
	        this.LugarContrato = source["LugarContrato"];
	        this.RfcTransportista = source["RfcTransportista"];
	        this.CodigoTransportista = source["CodigoTransportista"];
	        this.NumRegIdTribTransportista = source["NumRegIdTribTransportista"];
	        this.ResidenciaFiscalTransportista = source["ResidenciaFiscalTransportista"];
	        this.NombreTransportista = source["NombreTransportista"];
	        this.RfcEmbarcador = source["RfcEmbarcador"];
	        this.NumRegIdTribEmbarcador = source["NumRegIdTribEmbarcador"];
	        this.ResidenciaFiscalEmbarcador = source["ResidenciaFiscalEmbarcador"];
	        this.NombreEmbarcador = source["NombreEmbarcador"];
	    }
	}
	export class ContenedorCartaPorte10 {
	    Matricula: string;
	    Tipo: string;
	    NoPrecinto?: string;
	
	    static createFrom(source: any = {}) {
	        return new ContenedorCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Matricula = source["Matricula"];
	        this.Tipo = source["Tipo"];
	        this.NoPrecinto = source["NoPrecinto"];
	    }
	}
	export class TransporteMaritimoCartaPorte10 {
	    PermisoSct?: string;
	    NoPermisoSct?: string;
	    NombreAseguradora?: string;
	    NoPolizaSeguro?: string;
	    TipoEmbarcacion: string;
	    Matricula: string;
	    NoOmi: string;
	    AnioEmbarcacion?: string;
	    NombreEmbarcacion?: string;
	    NacionalidadEmbarcacion: string;
	    UnidadesArqueoBruto: number;
	    TipoCarga: string;
	    NumCertITC: string;
	    Eslora?: number;
	    Manga?: number;
	    Calado?: number;
	    LineaNaviera?: string;
	    NombreAgenteNaviero: string;
	    NoAutorizacionNaviero: string;
	    NoViaje?: string;
	    NoConocimientoEmbarque?: string;
	    Contenedores: ContenedorCartaPorte10[];
	
	    static createFrom(source: any = {}) {
	        return new TransporteMaritimoCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PermisoSct = source["PermisoSct"];
	        this.NoPermisoSct = source["NoPermisoSct"];
	        this.NombreAseguradora = source["NombreAseguradora"];
	        this.NoPolizaSeguro = source["NoPolizaSeguro"];
	        this.TipoEmbarcacion = source["TipoEmbarcacion"];
	        this.Matricula = source["Matricula"];
	        this.NoOmi = source["NoOmi"];
	        this.AnioEmbarcacion = source["AnioEmbarcacion"];
	        this.NombreEmbarcacion = source["NombreEmbarcacion"];
	        this.NacionalidadEmbarcacion = source["NacionalidadEmbarcacion"];
	        this.UnidadesArqueoBruto = source["UnidadesArqueoBruto"];
	        this.TipoCarga = source["TipoCarga"];
	        this.NumCertITC = source["NumCertITC"];
	        this.Eslora = source["Eslora"];
	        this.Manga = source["Manga"];
	        this.Calado = source["Calado"];
	        this.LineaNaviera = source["LineaNaviera"];
	        this.NombreAgenteNaviero = source["NombreAgenteNaviero"];
	        this.NoAutorizacionNaviero = source["NoAutorizacionNaviero"];
	        this.NoViaje = source["NoViaje"];
	        this.NoConocimientoEmbarque = source["NoConocimientoEmbarque"];
	        this.Contenedores = this.convertValues(source["Contenedores"], ContenedorCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DetalleMercanciaCartaPorte10 {
	    UnidadPeso: string;
	    PesoBruto: number;
	    PesoNeto: number;
	    PesoTara: number;
	    NumeroPiezas?: number;
	
	    static createFrom(source: any = {}) {
	        return new DetalleMercanciaCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoBruto = source["PesoBruto"];
	        this.PesoNeto = source["PesoNeto"];
	        this.PesoTara = source["PesoTara"];
	        this.NumeroPiezas = source["NumeroPiezas"];
	    }
	}
	export class MercanciaCartaPorte10 {
	    BienesTransportados?: string;
	    ClaveStcc?: string;
	    Descripcion?: string;
	    Cantidad?: string;
	    ClaveUnidad?: string;
	    Unidad?: string;
	    Dimensiones?: string;
	    MaterialPeligroso?: string;
	    EsMaterialPeligroso?: boolean;
	    ClaveMaterialPeligroso?: string;
	    Embalaje?: string;
	    DescripcionEmbalaje?: string;
	    PesoKg: number;
	    ValorMercancia?: number;
	    Moneda?: string;
	    FraccionArancelaria?: string;
	    UUIDComercioExt?: string;
	    UuidComercioExterior?: string;
	    CantidadTransporta?: CantidadTransportaCartaPorte10[];
	    DetalleMercancia?: DetalleMercanciaCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new MercanciaCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BienesTransportados = source["BienesTransportados"];
	        this.ClaveStcc = source["ClaveStcc"];
	        this.Descripcion = source["Descripcion"];
	        this.Cantidad = source["Cantidad"];
	        this.ClaveUnidad = source["ClaveUnidad"];
	        this.Unidad = source["Unidad"];
	        this.Dimensiones = source["Dimensiones"];
	        this.MaterialPeligroso = source["MaterialPeligroso"];
	        this.EsMaterialPeligroso = source["EsMaterialPeligroso"];
	        this.ClaveMaterialPeligroso = source["ClaveMaterialPeligroso"];
	        this.Embalaje = source["Embalaje"];
	        this.DescripcionEmbalaje = source["DescripcionEmbalaje"];
	        this.PesoKg = source["PesoKg"];
	        this.ValorMercancia = source["ValorMercancia"];
	        this.Moneda = source["Moneda"];
	        this.FraccionArancelaria = source["FraccionArancelaria"];
	        this.UUIDComercioExt = source["UUIDComercioExt"];
	        this.UuidComercioExterior = source["UuidComercioExterior"];
	        this.CantidadTransporta = this.convertValues(source["CantidadTransporta"], CantidadTransportaCartaPorte10);
	        this.DetalleMercancia = this.convertValues(source["DetalleMercancia"], DetalleMercanciaCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MercanciasCartaPorte10 {
	    PesoBrutoTotal?: number;
	    UnidadPeso?: string;
	    PesoNetoTotal?: number;
	    NumeroTotalMercancias: number;
	    CargoPorTasacion?: number;
	    Mercancia: MercanciaCartaPorte10[];
	    Autotrasporte?: AutotransporteCartaPorte10;
	    TransporteMaritimo?: TransporteMaritimoCartaPorte10;
	    TransporteAereo?: TransporteAereoCartaPorte10;
	    TransporteFerroviario?: TransporteFerroviarioCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new MercanciasCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PesoBrutoTotal = source["PesoBrutoTotal"];
	        this.UnidadPeso = source["UnidadPeso"];
	        this.PesoNetoTotal = source["PesoNetoTotal"];
	        this.NumeroTotalMercancias = source["NumeroTotalMercancias"];
	        this.CargoPorTasacion = source["CargoPorTasacion"];
	        this.Mercancia = this.convertValues(source["Mercancia"], MercanciaCartaPorte10);
	        this.Autotrasporte = this.convertValues(source["Autotrasporte"], AutotransporteCartaPorte10);
	        this.TransporteMaritimo = this.convertValues(source["TransporteMaritimo"], TransporteMaritimoCartaPorte10);
	        this.TransporteAereo = this.convertValues(source["TransporteAereo"], TransporteAereoCartaPorte10);
	        this.TransporteFerroviario = this.convertValues(source["TransporteFerroviario"], TransporteFerroviarioCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DestinoCartaPorte10 {
	    IdUbicacion?: string;
	    RfcRemitenteDestinatario?: string;
	    NombreRemitenteDestinatario?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    NoEstacion?: string;
	    NombreEstacion?: string;
	    NavegacionTrafico?: string;
	    FechaHoraSalidaLlegadaString: string;
	    // Go type: time
	    FechaHoraSalidaLlegada: any;
	
	    static createFrom(source: any = {}) {
	        return new DestinoCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.IdUbicacion = source["IdUbicacion"];
	        this.RfcRemitenteDestinatario = source["RfcRemitenteDestinatario"];
	        this.NombreRemitenteDestinatario = source["NombreRemitenteDestinatario"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NoEstacion = source["NoEstacion"];
	        this.NombreEstacion = source["NombreEstacion"];
	        this.NavegacionTrafico = source["NavegacionTrafico"];
	        this.FechaHoraSalidaLlegadaString = source["FechaHoraSalidaLlegadaString"];
	        this.FechaHoraSalidaLlegada = this.convertValues(source["FechaHoraSalidaLlegada"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class OrigenCartaPorte10 {
	    IdUbicacion?: string;
	    RfcRemitenteDestinatario?: string;
	    NombreRemitenteDestinatario?: string;
	    NumRegIdTrib?: string;
	    ResidenciaFiscal?: string;
	    NoEstacion?: string;
	    NombreEstacion?: string;
	    NavegacionTrafico?: string;
	    FechaHoraSalidaLlegadaString: string;
	    // Go type: time
	    FechaHoraSalidaLlegada: any;
	
	    static createFrom(source: any = {}) {
	        return new OrigenCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.IdUbicacion = source["IdUbicacion"];
	        this.RfcRemitenteDestinatario = source["RfcRemitenteDestinatario"];
	        this.NombreRemitenteDestinatario = source["NombreRemitenteDestinatario"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NoEstacion = source["NoEstacion"];
	        this.NombreEstacion = source["NombreEstacion"];
	        this.NavegacionTrafico = source["NavegacionTrafico"];
	        this.FechaHoraSalidaLlegadaString = source["FechaHoraSalidaLlegadaString"];
	        this.FechaHoraSalidaLlegada = this.convertValues(source["FechaHoraSalidaLlegada"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class UbicacionCartaPorte10 {
	    Origen?: OrigenCartaPorte10;
	    Destino?: DestinoCartaPorte10;
	    Domicilio?: DomicilioCartaPorte10;
	    TipoEstacion?: string;
	    DistanciaRecorrida?: number;
	
	    static createFrom(source: any = {}) {
	        return new UbicacionCartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Origen = this.convertValues(source["Origen"], OrigenCartaPorte10);
	        this.Destino = this.convertValues(source["Destino"], DestinoCartaPorte10);
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioCartaPorte10);
	        this.TipoEstacion = source["TipoEstacion"];
	        this.DistanciaRecorrida = source["DistanciaRecorrida"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CartaPorte10 {
	    Version: string;
	    TransporteInternacional: string;
	    EsTransporteInternacional: boolean;
	    EntradaSalidaMercancia?: string;
	    ViaEntradaSalida?: string;
	    TotalDistanciaRecorrida?: number;
	    Ubicaciones: UbicacionCartaPorte10[];
	    Mercancias: MercanciasCartaPorte10;
	    FiguraTransporte?: FiguraTransporteCartaPorte10;
	
	    static createFrom(source: any = {}) {
	        return new CartaPorte10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TransporteInternacional = source["TransporteInternacional"];
	        this.EsTransporteInternacional = source["EsTransporteInternacional"];
	        this.EntradaSalidaMercancia = source["EntradaSalidaMercancia"];
	        this.ViaEntradaSalida = source["ViaEntradaSalida"];
	        this.TotalDistanciaRecorrida = source["TotalDistanciaRecorrida"];
	        this.Ubicaciones = this.convertValues(source["Ubicaciones"], UbicacionCartaPorte10);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciasCartaPorte10);
	        this.FiguraTransporte = this.convertValues(source["FiguraTransporte"], FiguraTransporteCartaPorte10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CartaPorte {
	    CartaPorte10?: CartaPorte10[];
	    CartaPorte20?: CartaPorte20[];
	    CartaPorte30?: CartaPorte30[];
	    CartaPorte31?: CartaPorte31[];
	
	    static createFrom(source: any = {}) {
	        return new CartaPorte(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CartaPorte10 = this.convertValues(source["CartaPorte10"], CartaPorte10);
	        this.CartaPorte20 = this.convertValues(source["CartaPorte20"], CartaPorte20);
	        this.CartaPorte30 = this.convertValues(source["CartaPorte30"], CartaPorte30);
	        this.CartaPorte31 = this.convertValues(source["CartaPorte31"], CartaPorte31);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}

export namespace certificadodestruccion {
	
	export class InformacionAduaneraCertDest10 {
	    NumeroPedimentoImportacion: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Aduana: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduaneraCertDest10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumeroPedimentoImportacion = source["NumeroPedimentoImportacion"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Aduana = source["Aduana"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VehiculoDestruidoCertDest10 {
	    Marca: string;
	    TipoOClase: string;
	    Anio: string;
	    Modelo?: string;
	    NoIdentificacionVehicular?: string;
	    NoSerie?: string;
	    NoPlacas: string;
	    NoMotor?: string;
	    FolioTarjetaCirculacion: string;
	
	    static createFrom(source: any = {}) {
	        return new VehiculoDestruidoCertDest10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Marca = source["Marca"];
	        this.TipoOClase = source["TipoOClase"];
	        this.Anio = source["Anio"];
	        this.Modelo = source["Modelo"];
	        this.NoIdentificacionVehicular = source["NoIdentificacionVehicular"];
	        this.NoSerie = source["NoSerie"];
	        this.NoPlacas = source["NoPlacas"];
	        this.NoMotor = source["NoMotor"];
	        this.FolioTarjetaCirculacion = source["FolioTarjetaCirculacion"];
	    }
	}
	export class CertificadoDeDestruccion10 {
	    Version: string;
	    Serie: string;
	    FolioDestruccionVehiculo: string;
	    VehiculoDestruido?: VehiculoDestruidoCertDest10[];
	    InformacionAduanera?: InformacionAduaneraCertDest10[];
	
	    static createFrom(source: any = {}) {
	        return new CertificadoDeDestruccion10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Serie = source["Serie"];
	        this.FolioDestruccionVehiculo = source["FolioDestruccionVehiculo"];
	        this.VehiculoDestruido = this.convertValues(source["VehiculoDestruido"], VehiculoDestruidoCertDest10);
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduaneraCertDest10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CertificadoDeDestruccion {
	    CertificadoDeDestruccion10?: CertificadoDeDestruccion10[];
	
	    static createFrom(source: any = {}) {
	        return new CertificadoDeDestruccion(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CertificadoDeDestruccion10 = this.convertValues(source["CertificadoDeDestruccion10"], CertificadoDeDestruccion10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	

}

export namespace cfdiregistrofiscal {
	
	export class CfdiRegistroFiscal10 {
	    Version: string;
	    Folio: string;
	
	    static createFrom(source: any = {}) {
	        return new CfdiRegistroFiscal10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Folio = source["Folio"];
	    }
	}
	export class CfdiRegistroFiscal {
	    CfdiRegistroFiscal10?: CfdiRegistroFiscal10[];
	
	    static createFrom(source: any = {}) {
	        return new CfdiRegistroFiscal(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CfdiRegistroFiscal10 = this.convertValues(source["CfdiRegistroFiscal10"], CfdiRegistroFiscal10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace comercioexterior {
	
	export class DescripcionesEspecificasComercioExterior20 {
	    Marca: string;
	    Modelo?: string;
	    Submodelo?: string;
	    NoSerie?: string;
	
	    static createFrom(source: any = {}) {
	        return new DescripcionesEspecificasComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Marca = source["Marca"];
	        this.Modelo = source["Modelo"];
	        this.Submodelo = source["Submodelo"];
	        this.NoSerie = source["NoSerie"];
	    }
	}
	export class MercanciaComercioExterior20 {
	    NoIdentificacion: string;
	    FraccionArancelario?: string;
	    CantidadAduana?: number;
	    UnidadAduana?: string;
	    ValorUnitarioAduana?: number;
	    ValorDolares: number;
	    DescripcionesEspecificas?: DescripcionesEspecificasComercioExterior20[];
	
	    static createFrom(source: any = {}) {
	        return new MercanciaComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.FraccionArancelario = source["FraccionArancelario"];
	        this.CantidadAduana = source["CantidadAduana"];
	        this.UnidadAduana = source["UnidadAduana"];
	        this.ValorUnitarioAduana = source["ValorUnitarioAduana"];
	        this.ValorDolares = source["ValorDolares"];
	        this.DescripcionesEspecificas = this.convertValues(source["DescripcionesEspecificas"], DescripcionesEspecificasComercioExterior20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DestinatarioComercioExterior20 {
	    NumRegIdTrib?: string;
	    Nombre?: string;
	    Domicilio: DomicilioComercioExterior20[];
	
	    static createFrom(source: any = {}) {
	        return new DestinatarioComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.Nombre = source["Nombre"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ReceptorComercioExterior20 {
	    NumRegIdTrib?: string;
	    Domicilio?: DomicilioComercioExterior20;
	
	    static createFrom(source: any = {}) {
	        return new ReceptorComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PropietarioComercioExterior20 {
	    NumRegIdTrib: string;
	    ResidenciaFiscal: string;
	
	    static createFrom(source: any = {}) {
	        return new PropietarioComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	    }
	}
	export class DomicilioComercioExterior20 {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class EmisorComercioExterior20 {
	    Curp?: string;
	    Domicilio: DomicilioComercioExterior20;
	
	    static createFrom(source: any = {}) {
	        return new EmisorComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ComercioExterior20 {
	    Version: string;
	    MotivoTraslado?: string;
	    ClavePedimento: string;
	    CertificadoOrigen: number;
	    NoCertificadoOrigen?: string;
	    NoExportadorConfiable?: string;
	    Incoterm?: string;
	    Obsrvaciones?: string;
	    TipoCambioUsd: number;
	    TotalUsd: number;
	    Emisor?: EmisorComercioExterior20;
	    Propietario?: PropietarioComercioExterior20[];
	    Receptor?: ReceptorComercioExterior20;
	    Destinatario?: DestinatarioComercioExterior20[];
	    Mercancias: MercanciaComercioExterior20[];
	
	    static createFrom(source: any = {}) {
	        return new ComercioExterior20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.MotivoTraslado = source["MotivoTraslado"];
	        this.ClavePedimento = source["ClavePedimento"];
	        this.CertificadoOrigen = source["CertificadoOrigen"];
	        this.NoCertificadoOrigen = source["NoCertificadoOrigen"];
	        this.NoExportadorConfiable = source["NoExportadorConfiable"];
	        this.Incoterm = source["Incoterm"];
	        this.Obsrvaciones = source["Obsrvaciones"];
	        this.TipoCambioUsd = source["TipoCambioUsd"];
	        this.TotalUsd = source["TotalUsd"];
	        this.Emisor = this.convertValues(source["Emisor"], EmisorComercioExterior20);
	        this.Propietario = this.convertValues(source["Propietario"], PropietarioComercioExterior20);
	        this.Receptor = this.convertValues(source["Receptor"], ReceptorComercioExterior20);
	        this.Destinatario = this.convertValues(source["Destinatario"], DestinatarioComercioExterior20);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciaComercioExterior20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DescripcionesEspecificasComercioExterior11 {
	    Marca: string;
	    Modelo?: string;
	    Submodelo?: string;
	    NoSerie?: string;
	
	    static createFrom(source: any = {}) {
	        return new DescripcionesEspecificasComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Marca = source["Marca"];
	        this.Modelo = source["Modelo"];
	        this.Submodelo = source["Submodelo"];
	        this.NoSerie = source["NoSerie"];
	    }
	}
	export class MercanciaComercioExterior11 {
	    NoIdentificacion: string;
	    FraccionArancelaria?: string;
	    CantidadAduana?: number;
	    UnidadAduana?: string;
	    ValorUnitarioAduana?: number;
	    ValorDolares: number;
	    DescripcionesEspecificas?: DescripcionesEspecificasComercioExterior11[];
	
	    static createFrom(source: any = {}) {
	        return new MercanciaComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.FraccionArancelaria = source["FraccionArancelaria"];
	        this.CantidadAduana = source["CantidadAduana"];
	        this.UnidadAduana = source["UnidadAduana"];
	        this.ValorUnitarioAduana = source["ValorUnitarioAduana"];
	        this.ValorDolares = source["ValorDolares"];
	        this.DescripcionesEspecificas = this.convertValues(source["DescripcionesEspecificas"], DescripcionesEspecificasComercioExterior11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DestinatarioComercioExterior11 {
	    NumRegIdTrib?: string;
	    Nombre?: string;
	    Domicilio: DomicilioComercioExterior11[];
	
	    static createFrom(source: any = {}) {
	        return new DestinatarioComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.Nombre = source["Nombre"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ReceptorComercioExterior11 {
	    NumRegIdTrib?: string;
	    Domicilio?: DomicilioComercioExterior11;
	
	    static createFrom(source: any = {}) {
	        return new ReceptorComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PropietarioComercioExterior11 {
	    NumRegIdTrib: string;
	    ResidenciaFiscal: string;
	
	    static createFrom(source: any = {}) {
	        return new PropietarioComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	    }
	}
	export class DomicilioComercioExterior11 {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class EmisorComercioExterior11 {
	    Curp?: string;
	    Domicilio?: DomicilioComercioExterior11;
	
	    static createFrom(source: any = {}) {
	        return new EmisorComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ComercioExterior11 {
	    Version: string;
	    MotivoTraslado?: string;
	    TipoOperacion: string;
	    ClavePedimento?: string;
	    CertificadoOrigen?: number;
	    NoCertificadoOrigen?: string;
	    NoExportadorConfiable?: string;
	    Incoterm?: string;
	    Subdivision?: number;
	    Observaciones?: string;
	    TipoCambioUsd?: string;
	    TotalUsd?: number;
	    Emisor?: EmisorComercioExterior11;
	    Propietario?: PropietarioComercioExterior11[];
	    Receptor?: ReceptorComercioExterior11;
	    Destinatario?: DestinatarioComercioExterior11[];
	    Mercancias?: MercanciaComercioExterior11[];
	
	    static createFrom(source: any = {}) {
	        return new ComercioExterior11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.MotivoTraslado = source["MotivoTraslado"];
	        this.TipoOperacion = source["TipoOperacion"];
	        this.ClavePedimento = source["ClavePedimento"];
	        this.CertificadoOrigen = source["CertificadoOrigen"];
	        this.NoCertificadoOrigen = source["NoCertificadoOrigen"];
	        this.NoExportadorConfiable = source["NoExportadorConfiable"];
	        this.Incoterm = source["Incoterm"];
	        this.Subdivision = source["Subdivision"];
	        this.Observaciones = source["Observaciones"];
	        this.TipoCambioUsd = source["TipoCambioUsd"];
	        this.TotalUsd = source["TotalUsd"];
	        this.Emisor = this.convertValues(source["Emisor"], EmisorComercioExterior11);
	        this.Propietario = this.convertValues(source["Propietario"], PropietarioComercioExterior11);
	        this.Receptor = this.convertValues(source["Receptor"], ReceptorComercioExterior11);
	        this.Destinatario = this.convertValues(source["Destinatario"], DestinatarioComercioExterior11);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciaComercioExterior11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DescripcionesEspecificasComercioExterior10 {
	    Marca: string;
	    Modelo?: string;
	    Submodelo?: string;
	    NoSerie?: string;
	
	    static createFrom(source: any = {}) {
	        return new DescripcionesEspecificasComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Marca = source["Marca"];
	        this.Modelo = source["Modelo"];
	        this.Submodelo = source["Submodelo"];
	        this.NoSerie = source["NoSerie"];
	    }
	}
	export class MercanciaComercioExterior10 {
	    NoIdentificacion: string;
	    FraccionArancelaria?: string;
	    CantidadAduana?: number;
	    UnidadAduana?: string;
	    ValorUnitarioAduana?: number;
	    ValorDolares: number;
	    DescripcionesEspecificas?: DescripcionesEspecificasComercioExterior10[];
	
	    static createFrom(source: any = {}) {
	        return new MercanciaComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.FraccionArancelaria = source["FraccionArancelaria"];
	        this.CantidadAduana = source["CantidadAduana"];
	        this.UnidadAduana = source["UnidadAduana"];
	        this.ValorUnitarioAduana = source["ValorUnitarioAduana"];
	        this.ValorDolares = source["ValorDolares"];
	        this.DescripcionesEspecificas = this.convertValues(source["DescripcionesEspecificas"], DescripcionesEspecificasComercioExterior10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DomicilioComercioExterior10 {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio?: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new DomicilioComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class DestinatarioComercioExterior10 {
	    NumRegIdTrib?: string;
	    Rfc?: string;
	    Curp?: string;
	    Nombre?: string;
	    Domicilio: DomicilioComercioExterior10;
	
	    static createFrom(source: any = {}) {
	        return new DestinatarioComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.Rfc = source["Rfc"];
	        this.Curp = source["Curp"];
	        this.Nombre = source["Nombre"];
	        this.Domicilio = this.convertValues(source["Domicilio"], DomicilioComercioExterior10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ReceptorComercioExterior10 {
	    Curp?: string;
	    NumRegIdTrib: string;
	
	    static createFrom(source: any = {}) {
	        return new ReceptorComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	    }
	}
	export class EmisorComercioExterior10 {
	    Curp?: string;
	
	    static createFrom(source: any = {}) {
	        return new EmisorComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	    }
	}
	export class ComercioExterior10 {
	    Version: string;
	    TipoOperacion: string;
	    ClavePedimento?: string;
	    CertificadoOrigen?: number;
	    NoCertificadoOrigen?: string;
	    NoExportadorConfiable?: string;
	    Incoterm?: string;
	    Subdivision?: number;
	    Observaciones?: string;
	    TipoCambioUsd?: number;
	    TotalUsd?: number;
	    Emisor?: EmisorComercioExterior10;
	    Receptor: ReceptorComercioExterior10;
	    Destinatario?: DestinatarioComercioExterior10;
	    Mercancias?: MercanciaComercioExterior10[];
	
	    static createFrom(source: any = {}) {
	        return new ComercioExterior10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoOperacion = source["TipoOperacion"];
	        this.ClavePedimento = source["ClavePedimento"];
	        this.CertificadoOrigen = source["CertificadoOrigen"];
	        this.NoCertificadoOrigen = source["NoCertificadoOrigen"];
	        this.NoExportadorConfiable = source["NoExportadorConfiable"];
	        this.Incoterm = source["Incoterm"];
	        this.Subdivision = source["Subdivision"];
	        this.Observaciones = source["Observaciones"];
	        this.TipoCambioUsd = source["TipoCambioUsd"];
	        this.TotalUsd = source["TotalUsd"];
	        this.Emisor = this.convertValues(source["Emisor"], EmisorComercioExterior10);
	        this.Receptor = this.convertValues(source["Receptor"], ReceptorComercioExterior10);
	        this.Destinatario = this.convertValues(source["Destinatario"], DestinatarioComercioExterior10);
	        this.Mercancias = this.convertValues(source["Mercancias"], MercanciaComercioExterior10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ComercioExterior {
	    ComercioExterior10?: ComercioExterior10[];
	    ComercioExterior11?: ComercioExterior11[];
	    ComercioExterior20?: ComercioExterior20[];
	
	    static createFrom(source: any = {}) {
	        return new ComercioExterior(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ComercioExterior10 = this.convertValues(source["ComercioExterior10"], ComercioExterior10);
	        this.ComercioExterior11 = this.convertValues(source["ComercioExterior11"], ComercioExterior11);
	        this.ComercioExterior20 = this.convertValues(source["ComercioExterior20"], ComercioExterior20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}

export namespace complementos {
	
	export class BeneficiarioCompSpei {
	    BancoReceptor: string;
	    Nombre: string;
	    TipoCuenta: string;
	    Cuenta: string;
	    Rfc: string;
	    Concepto: string;
	    Iva?: string;
	    MontoPago: string;
	
	    static createFrom(source: any = {}) {
	        return new BeneficiarioCompSpei(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BancoReceptor = source["BancoReceptor"];
	        this.Nombre = source["Nombre"];
	        this.TipoCuenta = source["TipoCuenta"];
	        this.Cuenta = source["Cuenta"];
	        this.Rfc = source["Rfc"];
	        this.Concepto = source["Concepto"];
	        this.Iva = source["Iva"];
	        this.MontoPago = source["MontoPago"];
	    }
	}
	export class OrdenanteCompSpei {
	    BancoEmisor: string;
	    Nombre: string;
	    TipoCuenta: string;
	    Cuenta: string;
	    Rfc: string;
	
	    static createFrom(source: any = {}) {
	        return new OrdenanteCompSpei(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.BancoEmisor = source["BancoEmisor"];
	        this.Nombre = source["Nombre"];
	        this.TipoCuenta = source["TipoCuenta"];
	        this.Cuenta = source["Cuenta"];
	        this.Rfc = source["Rfc"];
	    }
	}
	export class SpeiTerceroCompSpei {
	    FechaOperacionString: string;
	    // Go type: time
	    FechaOperacion: any;
	    Hora: string;
	    ClaveSpei: string;
	    Sello: string;
	    NoCertificado: string;
	    cadenaCda?: string;
	    Ordenante: OrdenanteCompSpei[];
	    Beneficiario: BeneficiarioCompSpei[];
	
	    static createFrom(source: any = {}) {
	        return new SpeiTerceroCompSpei(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FechaOperacionString = source["FechaOperacionString"];
	        this.FechaOperacion = this.convertValues(source["FechaOperacion"], null);
	        this.Hora = source["Hora"];
	        this.ClaveSpei = source["ClaveSpei"];
	        this.Sello = source["Sello"];
	        this.NoCertificado = source["NoCertificado"];
	        this.cadenaCda = source["cadenaCda"];
	        this.Ordenante = this.convertValues(source["Ordenante"], OrdenanteCompSpei);
	        this.Beneficiario = this.convertValues(source["Beneficiario"], BeneficiarioCompSpei);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ComplementoSpei {
	    SpeiTercero: SpeiTerceroCompSpei[];
	
	    static createFrom(source: any = {}) {
	        return new ComplementoSpei(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SpeiTercero = this.convertValues(source["SpeiTercero"], SpeiTerceroCompSpei);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	

}

export namespace comprobante {
	
	export class ACuentaTerceros40 {
	    Rfc: string;
	    Nombre: string;
	    RegimenFiscal: string;
	    DomicilioFiscal: string;
	
	    static createFrom(source: any = {}) {
	        return new ACuentaTerceros40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.RegimenFiscal = source["RegimenFiscal"];
	        this.DomicilioFiscal = source["DomicilioFiscal"];
	    }
	}
	export class Addenda {
	    Value: string;
	    BuzonFiscal?: addenda.BuzonFiscal[];
	    AddendaFacto?: addenda.AddendaFacto[];
	    EdicomGenerica?: addenda.EdicomGenerica[];
	    RBoschSap?: addenda.RBoschSap[];
	    RequestForPayment?: addenda.RequestForPayment[];
	    Inssist?: addenda.Inssist[];
	
	    static createFrom(source: any = {}) {
	        return new Addenda(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	        this.BuzonFiscal = this.convertValues(source["BuzonFiscal"], addenda.BuzonFiscal);
	        this.AddendaFacto = this.convertValues(source["AddendaFacto"], addenda.AddendaFacto);
	        this.EdicomGenerica = this.convertValues(source["EdicomGenerica"], addenda.EdicomGenerica);
	        this.RBoschSap = this.convertValues(source["RBoschSap"], addenda.RBoschSap);
	        this.RequestForPayment = this.convertValues(source["RequestForPayment"], addenda.RequestForPayment);
	        this.Inssist = this.convertValues(source["Inssist"], addenda.Inssist);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class UuidRelacionado33 {
	    UUID: string;
	    Uuid: string;
	
	    static createFrom(source: any = {}) {
	        return new UuidRelacionado33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UUID = source["UUID"];
	        this.Uuid = source["Uuid"];
	    }
	}
	export class CfdiRelacionados33 {
	    TipoRelacion: string;
	    UuidsRelacionados: UuidRelacionado33[];
	
	    static createFrom(source: any = {}) {
	        return new CfdiRelacionados33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoRelacion = source["TipoRelacion"];
	        this.UuidsRelacionados = this.convertValues(source["UuidsRelacionados"], UuidRelacionado33);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class UuidRelacionado40 {
	    Uuid: string;
	    UUID: string;
	
	    static createFrom(source: any = {}) {
	        return new UuidRelacionado40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Uuid = source["Uuid"];
	        this.UUID = source["UUID"];
	    }
	}
	export class CfdisRelacionados40 {
	    TipoRelacion: string;
	    UuidsRelacionados: UuidRelacionado40[];
	
	    static createFrom(source: any = {}) {
	        return new CfdisRelacionados40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoRelacion = source["TipoRelacion"];
	        this.UuidsRelacionados = this.convertValues(source["UuidsRelacionados"], UuidRelacionado40);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Complemento {
	    CartaPorte?: cartaporte.CartaPorte;
	    ComercioExterior?: comercioexterior.ComercioExterior;
	    ImpuestosLocales?: impuestoslocales.ImpuestosLocales;
	    Aerolineas?: aerolineas.Aerolineas;
	    CertificadoDeDestruccion?: certificadodestruccion.CertificadoDeDestruccion;
	    CFDIRegistroFiscal?: cfdiregistrofiscal.CfdiRegistroFiscal;
	    ComplementoSPEI?: complementos.ComplementoSpei;
	    ConsumoDeCombustibles?: consumocombustible.ConsumoDeCombustible;
	    detallista?: detallista.Detallista;
	    Divisas?: divisas.Divisas;
	    Donatarias?: donatarias.Donatarias;
	    EstadoDeCuentaCombustible?: estadodecuentacombustible.EstadoDeCuentaCombustible;
	    GastosHidrocarburos?: gastohidrocarburos.GastoHidrocarburos;
	    Ine?: ine.INE;
	    LeyendasFiscales?: leyendasfiscales.LeyendasFiscales;
	    Nomina?: nomina.Nomina;
	    NotariosPublicos?: notariospublicos.NotariosPublicos;
	    Pagos?: pagos.Pagos;
	    TimbreFiscalDigital?: timbrefiscaldigital.TimbreFiscalDigital;
	    ObrasArteAntiguedaes?: obrasantiguedades.ObrasAntiguedades;
	    PagoEnEspecie?: pagoespecie.PagoEnEspecie;
	    parcialesconstruccion?: parcialesconstruccion.ParcialesConstruccion;
	    PFintegranteCoordinado?: pfintegrantecoordinado.PFIntegranteCoordinado;
	    RenovacionSustitucionVehiculos?: renovacionsustitucion.RenovacionSustitucion;
	    TuristaPasajeroExtranjero?: turistapasajeroextranjero.TuristaPasajeroExtranjero;
	    ValesDeDespensa?: valesdespensa.ValesDespensa;
	    VehiculoUsado?: vehiculousado.VehiculoUsado;
	
	    static createFrom(source: any = {}) {
	        return new Complemento(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CartaPorte = this.convertValues(source["CartaPorte"], cartaporte.CartaPorte);
	        this.ComercioExterior = this.convertValues(source["ComercioExterior"], comercioexterior.ComercioExterior);
	        this.ImpuestosLocales = this.convertValues(source["ImpuestosLocales"], impuestoslocales.ImpuestosLocales);
	        this.Aerolineas = this.convertValues(source["Aerolineas"], aerolineas.Aerolineas);
	        this.CertificadoDeDestruccion = this.convertValues(source["CertificadoDeDestruccion"], certificadodestruccion.CertificadoDeDestruccion);
	        this.CFDIRegistroFiscal = this.convertValues(source["CFDIRegistroFiscal"], cfdiregistrofiscal.CfdiRegistroFiscal);
	        this.ComplementoSPEI = this.convertValues(source["ComplementoSPEI"], complementos.ComplementoSpei);
	        this.ConsumoDeCombustibles = this.convertValues(source["ConsumoDeCombustibles"], consumocombustible.ConsumoDeCombustible);
	        this.detallista = this.convertValues(source["detallista"], detallista.Detallista);
	        this.Divisas = this.convertValues(source["Divisas"], divisas.Divisas);
	        this.Donatarias = this.convertValues(source["Donatarias"], donatarias.Donatarias);
	        this.EstadoDeCuentaCombustible = this.convertValues(source["EstadoDeCuentaCombustible"], estadodecuentacombustible.EstadoDeCuentaCombustible);
	        this.GastosHidrocarburos = this.convertValues(source["GastosHidrocarburos"], gastohidrocarburos.GastoHidrocarburos);
	        this.Ine = this.convertValues(source["Ine"], ine.INE);
	        this.LeyendasFiscales = this.convertValues(source["LeyendasFiscales"], leyendasfiscales.LeyendasFiscales);
	        this.Nomina = this.convertValues(source["Nomina"], nomina.Nomina);
	        this.NotariosPublicos = this.convertValues(source["NotariosPublicos"], notariospublicos.NotariosPublicos);
	        this.Pagos = this.convertValues(source["Pagos"], pagos.Pagos);
	        this.TimbreFiscalDigital = this.convertValues(source["TimbreFiscalDigital"], timbrefiscaldigital.TimbreFiscalDigital);
	        this.ObrasArteAntiguedaes = this.convertValues(source["ObrasArteAntiguedaes"], obrasantiguedades.ObrasAntiguedades);
	        this.PagoEnEspecie = this.convertValues(source["PagoEnEspecie"], pagoespecie.PagoEnEspecie);
	        this.parcialesconstruccion = this.convertValues(source["parcialesconstruccion"], parcialesconstruccion.ParcialesConstruccion);
	        this.PFintegranteCoordinado = this.convertValues(source["PFintegranteCoordinado"], pfintegrantecoordinado.PFIntegranteCoordinado);
	        this.RenovacionSustitucionVehiculos = this.convertValues(source["RenovacionSustitucionVehiculos"], renovacionsustitucion.RenovacionSustitucion);
	        this.TuristaPasajeroExtranjero = this.convertValues(source["TuristaPasajeroExtranjero"], turistapasajeroextranjero.TuristaPasajeroExtranjero);
	        this.ValesDeDespensa = this.convertValues(source["ValesDeDespensa"], valesdespensa.ValesDespensa);
	        this.VehiculoUsado = this.convertValues(source["VehiculoUsado"], vehiculousado.VehiculoUsado);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ComplementoConcepto {
	    ACuentaTerceros?: acuentaterceros.ACuentaTerceros;
	    InstitucionesEducativas?: institeducativas.InstitucioneEducativas;
	    VentaVehiculos?: ventavehiculos.VentaVehiculos;
	    AcreditamientoIeps?: acreditamientoieps.AcreditamientoIeps;
	
	    static createFrom(source: any = {}) {
	        return new ComplementoConcepto(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ACuentaTerceros = this.convertValues(source["ACuentaTerceros"], acuentaterceros.ACuentaTerceros);
	        this.InstitucionesEducativas = this.convertValues(source["InstitucionesEducativas"], institeducativas.InstitucioneEducativas);
	        this.VentaVehiculos = this.convertValues(source["VentaVehiculos"], ventavehiculos.VentaVehiculos);
	        this.AcreditamientoIeps = this.convertValues(source["AcreditamientoIeps"], acreditamientoieps.AcreditamientoIeps);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TrasladoImpuestos40 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota?: number;
	    Importe?: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoImpuestos40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionImpuestos40 {
	    Impuesto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionImpuestos40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class Impuestos40 {
	    TotalImpuestosRetenidos?: number;
	    TotalImpuestosTrasladados?: number;
	    Retenciones?: RetencionImpuestos40[];
	    Traslados?: TrasladoImpuestos40[];
	
	    static createFrom(source: any = {}) {
	        return new Impuestos40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalImpuestosRetenidos = source["TotalImpuestosRetenidos"];
	        this.TotalImpuestosTrasladados = source["TotalImpuestosTrasladados"];
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionImpuestos40);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoImpuestos40);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Parte40 {
	    ClaveProdServ: string;
	    NoIdentificacion?: string;
	    Cantidad: number;
	    Unidad?: string;
	    Descripcion: string;
	    ValorUnitario?: number;
	    Importe?: number;
	    InformacionAduanera?: InformacionAduanera40[];
	
	    static createFrom(source: any = {}) {
	        return new Parte40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveProdServ = source["ClaveProdServ"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera40);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CuentaPredial40 {
	    Numero: string;
	
	    static createFrom(source: any = {}) {
	        return new CuentaPredial40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	    }
	}
	export class InformacionAduanera40 {
	    NumeroPedimento: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduanera40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumeroPedimento = source["NumeroPedimento"];
	    }
	}
	export class RetencionConcepto40 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionConcepto40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class TrasladoConcepto40 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota?: number;
	    Importe?: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoConcepto40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestosConcepto40 {
	    Traslados?: TrasladoConcepto40[];
	    Retenciones?: RetencionConcepto40[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosConcepto40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoConcepto40);
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionConcepto40);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Concepto40 {
	    ClaveProdServ: string;
	    NoIdentificacion?: string;
	    Cantidad: number;
	    ClaveUnidad: string;
	    Unidad?: string;
	    Descripcion: string;
	    ValorUnitario: number;
	    Importe: number;
	    Descuento?: number;
	    ObjetoImpuesto: string;
	    Impuestos?: ImpuestosConcepto40;
	    ACuentaTerceros?: ACuentaTerceros40;
	    InformacionAduanera?: InformacionAduanera40[];
	    CuentaPredial?: CuentaPredial40[];
	    ComplementoConcepto?: ComplementoConcepto;
	    Parte?: Parte40[];
	
	    static createFrom(source: any = {}) {
	        return new Concepto40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveProdServ = source["ClaveProdServ"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Cantidad = source["Cantidad"];
	        this.ClaveUnidad = source["ClaveUnidad"];
	        this.Unidad = source["Unidad"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.Descuento = source["Descuento"];
	        this.ObjetoImpuesto = source["ObjetoImpuesto"];
	        this.Impuestos = this.convertValues(source["Impuestos"], ImpuestosConcepto40);
	        this.ACuentaTerceros = this.convertValues(source["ACuentaTerceros"], ACuentaTerceros40);
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera40);
	        this.CuentaPredial = this.convertValues(source["CuentaPredial"], CuentaPredial40);
	        this.ComplementoConcepto = this.convertValues(source["ComplementoConcepto"], ComplementoConcepto);
	        this.Parte = this.convertValues(source["Parte"], Parte40);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Receptor40 {
	    Rfc: string;
	    Nombre: string;
	    DomicilioFiscal: string;
	    ResidenciaFiscal?: string;
	    NumRegIdTrib?: string;
	    RegimenFiscal: string;
	    UsoCfdi: string;
	
	    static createFrom(source: any = {}) {
	        return new Receptor40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.DomicilioFiscal = source["DomicilioFiscal"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.RegimenFiscal = source["RegimenFiscal"];
	        this.UsoCfdi = source["UsoCfdi"];
	    }
	}
	export class Emisor40 {
	    Rfc: string;
	    Nombre: string;
	    RegimenFiscal: string;
	    FacAtrAdquirent?: string;
	
	    static createFrom(source: any = {}) {
	        return new Emisor40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.RegimenFiscal = source["RegimenFiscal"];
	        this.FacAtrAdquirent = source["FacAtrAdquirent"];
	    }
	}
	export class InformacionGlobal40 {
	    Periodicidad: string;
	    Meses: string;
	    Anio: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionGlobal40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Periodicidad = source["Periodicidad"];
	        this.Meses = source["Meses"];
	        this.Anio = source["Anio"];
	    }
	}
	export class Comprobante40 {
	    // Go type: time
	    FechaEmision: any;
	    Uuid: string;
	    // Go type: time
	    FechaTimbrado: any;
	    Vigente?: boolean;
	    CadenaOriginal: string;
	    // Go type: documentofiscaldigital
	    InformacionAdicional?: any;
	    // Go type: documentofiscaldigital
	    Cancelacion?: any;
	    Comprobante: boolean;
	    Transaccion: string;
	    XmlPath: string;
	    PdfPath: string;
	    // Go type: documentofiscaldigital
	    TotalesMonedaLocal: any;
	    // Go type: documentofiscaldigital
	    ProcessorMetadata: any;
	    // Go type: documentofiscaldigital
	    ZipProcessor?: any;
	    // Go type: documentofiscaldigital
	    XmlPathProcessor?: any;
	    // Go type: documentofiscaldigital
	    XmlFileProcessor?: any;
	    // Go type: documentofiscaldigital
	    FilePathsProcessor?: any;
	    S3FilePath?: string;
	    Version: string;
	    Serie?: string;
	    Folio?: string;
	    Fecha: string;
	    Sello: string;
	    FormaPago?: string;
	    NoCertificado: string;
	    Certificado: string;
	    CondicionesPago?: string;
	    Subtotal: number;
	    Descuento?: number;
	    Moneda: string;
	    TipoCambio?: number;
	    Total: number;
	    TipoComprobante: string;
	    Exportacion: string;
	    MetodoPago?: string;
	    LugarExpedicion: string;
	    Confirmacion?: string;
	    InformacionGlobal?: InformacionGlobal40;
	    CfdisRelacionados?: CfdisRelacionados40[];
	    Emisor: Emisor40;
	    Receptor: Receptor40;
	    RfcProvCertif: string;
	    Conceptos: Concepto40[];
	    Impuestos?: Impuestos40;
	    Complemento: Complemento;
	    Addenda?: Addenda;
	    KuantikMetadata?: KuantikMetadata;
	
	    static createFrom(source: any = {}) {
	        return new Comprobante40(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FechaEmision = this.convertValues(source["FechaEmision"], null);
	        this.Uuid = source["Uuid"];
	        this.FechaTimbrado = this.convertValues(source["FechaTimbrado"], null);
	        this.Vigente = source["Vigente"];
	        this.CadenaOriginal = source["CadenaOriginal"];
	        this.InformacionAdicional = this.convertValues(source["InformacionAdicional"], null);
	        this.Cancelacion = this.convertValues(source["Cancelacion"], null);
	        this.Comprobante = source["Comprobante"];
	        this.Transaccion = source["Transaccion"];
	        this.XmlPath = source["XmlPath"];
	        this.PdfPath = source["PdfPath"];
	        this.TotalesMonedaLocal = this.convertValues(source["TotalesMonedaLocal"], null);
	        this.ProcessorMetadata = this.convertValues(source["ProcessorMetadata"], null);
	        this.ZipProcessor = this.convertValues(source["ZipProcessor"], null);
	        this.XmlPathProcessor = this.convertValues(source["XmlPathProcessor"], null);
	        this.XmlFileProcessor = this.convertValues(source["XmlFileProcessor"], null);
	        this.FilePathsProcessor = this.convertValues(source["FilePathsProcessor"], null);
	        this.S3FilePath = source["S3FilePath"];
	        this.Version = source["Version"];
	        this.Serie = source["Serie"];
	        this.Folio = source["Folio"];
	        this.Fecha = source["Fecha"];
	        this.Sello = source["Sello"];
	        this.FormaPago = source["FormaPago"];
	        this.NoCertificado = source["NoCertificado"];
	        this.Certificado = source["Certificado"];
	        this.CondicionesPago = source["CondicionesPago"];
	        this.Subtotal = source["Subtotal"];
	        this.Descuento = source["Descuento"];
	        this.Moneda = source["Moneda"];
	        this.TipoCambio = source["TipoCambio"];
	        this.Total = source["Total"];
	        this.TipoComprobante = source["TipoComprobante"];
	        this.Exportacion = source["Exportacion"];
	        this.MetodoPago = source["MetodoPago"];
	        this.LugarExpedicion = source["LugarExpedicion"];
	        this.Confirmacion = source["Confirmacion"];
	        this.InformacionGlobal = this.convertValues(source["InformacionGlobal"], InformacionGlobal40);
	        this.CfdisRelacionados = this.convertValues(source["CfdisRelacionados"], CfdisRelacionados40);
	        this.Emisor = this.convertValues(source["Emisor"], Emisor40);
	        this.Receptor = this.convertValues(source["Receptor"], Receptor40);
	        this.RfcProvCertif = source["RfcProvCertif"];
	        this.Conceptos = this.convertValues(source["Conceptos"], Concepto40);
	        this.Impuestos = this.convertValues(source["Impuestos"], Impuestos40);
	        this.Complemento = this.convertValues(source["Complemento"], Complemento);
	        this.Addenda = this.convertValues(source["Addenda"], Addenda);
	        this.KuantikMetadata = this.convertValues(source["KuantikMetadata"], KuantikMetadata);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TrasladoImpuestos33 {
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoImpuestos33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionImpuestos33 {
	    Impuesto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionImpuestos33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class Impuestos33 {
	    TotalImpuestosRetenidos?: number;
	    TotalImpuestosTrasladados?: number;
	    Retenciones?: RetencionImpuestos33[];
	    Traslados?: TrasladoImpuestos33[];
	
	    static createFrom(source: any = {}) {
	        return new Impuestos33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalImpuestosRetenidos = source["TotalImpuestosRetenidos"];
	        this.TotalImpuestosTrasladados = source["TotalImpuestosTrasladados"];
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionImpuestos33);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoImpuestos33);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Parte33 {
	    ClaveProdServ: string;
	    NoIdentificacion?: string;
	    Cantidad: number;
	    Unidad?: string;
	    Descripcion: string;
	    ValorUnitario?: number;
	    Importe?: number;
	    InformacionAduanera?: InformacionAduanera33[];
	
	    static createFrom(source: any = {}) {
	        return new Parte33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveProdServ = source["ClaveProdServ"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera33);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CuentaPredial33 {
	    Numero: string;
	
	    static createFrom(source: any = {}) {
	        return new CuentaPredial33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	    }
	}
	export class InformacionAduanera33 {
	    NumeroPedimento: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduanera33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NumeroPedimento = source["NumeroPedimento"];
	    }
	}
	export class RetencionConcepto33 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionConcepto33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class TrasladoConcepto33 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota?: number;
	    Importe?: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoConcepto33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestosConcepto33 {
	    Traslados?: TrasladoConcepto33[];
	    Retenciones?: RetencionConcepto33[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosConcepto33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoConcepto33);
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionConcepto33);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Concepto33 {
	    ClaveProdServ: string;
	    NoIdentificacion?: string;
	    Cantidad: number;
	    ClaveUnidad: string;
	    Unidad?: string;
	    Descripcion: string;
	    ValorUnitario: number;
	    Importe: number;
	    Descuento?: number;
	    Impuestos?: ImpuestosConcepto33;
	    InformacionAduanera?: InformacionAduanera33[];
	    CuentaPredial?: CuentaPredial33;
	    ComplementoConcepto?: ComplementoConcepto;
	    Parte?: Parte33[];
	    DetallesConcepto: string;
	
	    static createFrom(source: any = {}) {
	        return new Concepto33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveProdServ = source["ClaveProdServ"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Cantidad = source["Cantidad"];
	        this.ClaveUnidad = source["ClaveUnidad"];
	        this.Unidad = source["Unidad"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.Descuento = source["Descuento"];
	        this.Impuestos = this.convertValues(source["Impuestos"], ImpuestosConcepto33);
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera33);
	        this.CuentaPredial = this.convertValues(source["CuentaPredial"], CuentaPredial33);
	        this.ComplementoConcepto = this.convertValues(source["ComplementoConcepto"], ComplementoConcepto);
	        this.Parte = this.convertValues(source["Parte"], Parte33);
	        this.DetallesConcepto = source["DetallesConcepto"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Receptor33 {
	    Rfc: string;
	    Nombre?: string;
	    ResidenciaFiscal?: string;
	    NumRegIdTrib?: string;
	    UsoCFDI: string;
	
	    static createFrom(source: any = {}) {
	        return new Receptor33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.ResidenciaFiscal = source["ResidenciaFiscal"];
	        this.NumRegIdTrib = source["NumRegIdTrib"];
	        this.UsoCFDI = source["UsoCFDI"];
	    }
	}
	export class Emisor33 {
	    Rfc: string;
	    Nombre?: string;
	    RegimenFiscal: string;
	
	    static createFrom(source: any = {}) {
	        return new Emisor33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.RegimenFiscal = source["RegimenFiscal"];
	    }
	}
	export class Comprobante33 {
	    // Go type: time
	    FechaEmision: any;
	    Uuid: string;
	    // Go type: time
	    FechaTimbrado: any;
	    Vigente?: boolean;
	    CadenaOriginal: string;
	    // Go type: documentofiscaldigital
	    InformacionAdicional?: any;
	    // Go type: documentofiscaldigital
	    Cancelacion?: any;
	    Comprobante: boolean;
	    Transaccion: string;
	    XmlPath: string;
	    PdfPath: string;
	    // Go type: documentofiscaldigital
	    TotalesMonedaLocal: any;
	    // Go type: documentofiscaldigital
	    ProcessorMetadata: any;
	    // Go type: documentofiscaldigital
	    ZipProcessor?: any;
	    // Go type: documentofiscaldigital
	    XmlPathProcessor?: any;
	    // Go type: documentofiscaldigital
	    XmlFileProcessor?: any;
	    // Go type: documentofiscaldigital
	    FilePathsProcessor?: any;
	    S3FilePath?: string;
	    Version: string;
	    Serie?: string;
	    Folio?: string;
	    Fecha: string;
	    Sello: string;
	    FormaPago?: string;
	    NoCertificado: string;
	    Certificado: string;
	    CondicionesPago?: string;
	    Subtotal: number;
	    Descuento?: number;
	    Moneda: string;
	    TipoCambio?: number;
	    Total: number;
	    TipoComprobante: string;
	    MetodoPago?: string;
	    LugarExpedicion: string;
	    Confirmacion?: string;
	    CfdisRelacionados?: CfdiRelacionados33;
	    Emisor: Emisor33;
	    Receptor: Receptor33;
	    RfcProvCertif: string;
	    Conceptos: Concepto33[];
	    Impuestos?: Impuestos33;
	    Complemento?: Complemento;
	    Addenda?: Addenda;
	    KuantikMetadata?: KuantikMetadata;
	
	    static createFrom(source: any = {}) {
	        return new Comprobante33(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FechaEmision = this.convertValues(source["FechaEmision"], null);
	        this.Uuid = source["Uuid"];
	        this.FechaTimbrado = this.convertValues(source["FechaTimbrado"], null);
	        this.Vigente = source["Vigente"];
	        this.CadenaOriginal = source["CadenaOriginal"];
	        this.InformacionAdicional = this.convertValues(source["InformacionAdicional"], null);
	        this.Cancelacion = this.convertValues(source["Cancelacion"], null);
	        this.Comprobante = source["Comprobante"];
	        this.Transaccion = source["Transaccion"];
	        this.XmlPath = source["XmlPath"];
	        this.PdfPath = source["PdfPath"];
	        this.TotalesMonedaLocal = this.convertValues(source["TotalesMonedaLocal"], null);
	        this.ProcessorMetadata = this.convertValues(source["ProcessorMetadata"], null);
	        this.ZipProcessor = this.convertValues(source["ZipProcessor"], null);
	        this.XmlPathProcessor = this.convertValues(source["XmlPathProcessor"], null);
	        this.XmlFileProcessor = this.convertValues(source["XmlFileProcessor"], null);
	        this.FilePathsProcessor = this.convertValues(source["FilePathsProcessor"], null);
	        this.S3FilePath = source["S3FilePath"];
	        this.Version = source["Version"];
	        this.Serie = source["Serie"];
	        this.Folio = source["Folio"];
	        this.Fecha = source["Fecha"];
	        this.Sello = source["Sello"];
	        this.FormaPago = source["FormaPago"];
	        this.NoCertificado = source["NoCertificado"];
	        this.Certificado = source["Certificado"];
	        this.CondicionesPago = source["CondicionesPago"];
	        this.Subtotal = source["Subtotal"];
	        this.Descuento = source["Descuento"];
	        this.Moneda = source["Moneda"];
	        this.TipoCambio = source["TipoCambio"];
	        this.Total = source["Total"];
	        this.TipoComprobante = source["TipoComprobante"];
	        this.MetodoPago = source["MetodoPago"];
	        this.LugarExpedicion = source["LugarExpedicion"];
	        this.Confirmacion = source["Confirmacion"];
	        this.CfdisRelacionados = this.convertValues(source["CfdisRelacionados"], CfdiRelacionados33);
	        this.Emisor = this.convertValues(source["Emisor"], Emisor33);
	        this.Receptor = this.convertValues(source["Receptor"], Receptor33);
	        this.RfcProvCertif = source["RfcProvCertif"];
	        this.Conceptos = this.convertValues(source["Conceptos"], Concepto33);
	        this.Impuestos = this.convertValues(source["Impuestos"], Impuestos33);
	        this.Complemento = this.convertValues(source["Complemento"], Complemento);
	        this.Addenda = this.convertValues(source["Addenda"], Addenda);
	        this.KuantikMetadata = this.convertValues(source["KuantikMetadata"], KuantikMetadata);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class KuantikMetadata {
	    SerieFolio: string;
	
	    static createFrom(source: any = {}) {
	        return new KuantikMetadata(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SerieFolio = source["SerieFolio"];
	    }
	}
	export class Traslado32 {
	    TipoImpuesto: string;
	    Impuesto: string;
	    Tasa: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new Traslado32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoImpuesto = source["TipoImpuesto"];
	        this.Impuesto = source["Impuesto"];
	        this.Tasa = source["Tasa"];
	        this.Importe = source["Importe"];
	    }
	}
	export class Retencion32 {
	    TipoImpuesto: string;
	    Impuesto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new Retencion32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoImpuesto = source["TipoImpuesto"];
	        this.Impuesto = source["Impuesto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class Impuestos32 {
	    Retenciones?: Retencion32[];
	    Traslados?: Traslado32[];
	    TotalImpuestosRetenidos?: number;
	    TotalImpuestosTrasladados?: number;
	
	    static createFrom(source: any = {}) {
	        return new Impuestos32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Retenciones = this.convertValues(source["Retenciones"], Retencion32);
	        this.Traslados = this.convertValues(source["Traslados"], Traslado32);
	        this.TotalImpuestosRetenidos = source["TotalImpuestosRetenidos"];
	        this.TotalImpuestosTrasladados = source["TotalImpuestosTrasladados"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Parte32 {
	    Cantidad: number;
	    Unidad?: string;
	    NoIdentificacion?: string;
	    Descripcion: string;
	    ValorUnitario?: number;
	    Importe?: number;
	    InformacionAduanera?: InformacionAduanera32[];
	
	    static createFrom(source: any = {}) {
	        return new Parte32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera32);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CuentaPredial32 {
	    Numero: string;
	
	    static createFrom(source: any = {}) {
	        return new CuentaPredial32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	    }
	}
	export class InformacionAduanera32 {
	    Numero: string;
	    fecha: string;
	    // Go type: time
	    Fecha: any;
	    Aduana?: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduanera32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.fecha = source["fecha"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Aduana = source["Aduana"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Concepto32 {
	    Cantidad: number;
	    Unidad: string;
	    NoIdentificacion?: string;
	    Descripcion: string;
	    ValorUnitario: number;
	    Importe: number;
	    InformacionAduanera?: InformacionAduanera32[];
	    CuentaPredial?: CuentaPredial32;
	    ComplementoConcepto?: ComplementoConcepto;
	    Parte?: Parte32[];
	
	    static createFrom(source: any = {}) {
	        return new Concepto32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera32);
	        this.CuentaPredial = this.convertValues(source["CuentaPredial"], CuentaPredial32);
	        this.ComplementoConcepto = this.convertValues(source["ComplementoConcepto"], ComplementoConcepto);
	        this.Parte = this.convertValues(source["Parte"], Parte32);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Receptor32 {
	    Rfc: string;
	    Nombre?: string;
	    Domicilio?: Domicilio32;
	
	    static createFrom(source: any = {}) {
	        return new Receptor32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.Domicilio = this.convertValues(source["Domicilio"], Domicilio32);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Domicilio32 {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio: string;
	    Estado: string;
	    Pais: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new Domicilio32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class RegimenFiscal32 {
	    RegimenFiscal: string;
	
	    static createFrom(source: any = {}) {
	        return new RegimenFiscal32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.RegimenFiscal = source["RegimenFiscal"];
	    }
	}
	export class Emisor32 {
	    Rfc: string;
	    Nombre?: string;
	    RegimenesFiscales: RegimenFiscal32[];
	    DomicilioFiscal?: Domicilio32;
	    ExpedidoEn?: Domicilio32;
	
	    static createFrom(source: any = {}) {
	        return new Emisor32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Rfc = source["Rfc"];
	        this.Nombre = source["Nombre"];
	        this.RegimenesFiscales = this.convertValues(source["RegimenesFiscales"], RegimenFiscal32);
	        this.DomicilioFiscal = this.convertValues(source["DomicilioFiscal"], Domicilio32);
	        this.ExpedidoEn = this.convertValues(source["ExpedidoEn"], Domicilio32);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Comprobante32 {
	    // Go type: time
	    FechaEmision: any;
	    Uuid: string;
	    // Go type: time
	    FechaTimbrado: any;
	    Vigente?: boolean;
	    CadenaOriginal: string;
	    // Go type: documentofiscaldigital
	    InformacionAdicional?: any;
	    // Go type: documentofiscaldigital
	    Cancelacion?: any;
	    Comprobante: boolean;
	    Transaccion: string;
	    XmlPath: string;
	    PdfPath: string;
	    // Go type: documentofiscaldigital
	    TotalesMonedaLocal: any;
	    // Go type: documentofiscaldigital
	    ProcessorMetadata: any;
	    // Go type: documentofiscaldigital
	    ZipProcessor?: any;
	    // Go type: documentofiscaldigital
	    XmlPathProcessor?: any;
	    // Go type: documentofiscaldigital
	    XmlFileProcessor?: any;
	    // Go type: documentofiscaldigital
	    FilePathsProcessor?: any;
	    S3FilePath?: string;
	    Version: string;
	    Serie?: string;
	    Folio?: string;
	    Fecha: string;
	    Sello: string;
	    FormaPago: string;
	    NoCertificado: string;
	    Certificado: string;
	    CondicionesPago?: string;
	    Subtotal: number;
	    Descuento?: number;
	    MotivoDescuento?: string;
	    TipoDeCambio?: string;
	    TipoCambio?: number;
	    Moneda?: string;
	    Total: number;
	    TipoDeComprobante: string;
	    TipoComprobante: string;
	    MetodoPago: string;
	    LugarExpedicion: string;
	    NumeroCuentaPago?: string;
	    FolioFiscalOriginal?: string;
	    FolioFiscalOrig?: string;
	    SerieFolioFiscalOriginal?: string;
	    // Go type: time
	    FechaFolioFiscalOriginal?: any;
	    FechaFolioFiscalOrig?: string;
	    MontoFolioFiscalOriginal?: number;
	    Emisor: Emisor32;
	    Receptor: Receptor32;
	    Conceptos: Concepto32[];
	    Impuestos: Impuestos32;
	    Complemento?: Complemento;
	    Addenda?: Addenda;
	    KuantikMetadata?: KuantikMetadata;
	
	    static createFrom(source: any = {}) {
	        return new Comprobante32(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FechaEmision = this.convertValues(source["FechaEmision"], null);
	        this.Uuid = source["Uuid"];
	        this.FechaTimbrado = this.convertValues(source["FechaTimbrado"], null);
	        this.Vigente = source["Vigente"];
	        this.CadenaOriginal = source["CadenaOriginal"];
	        this.InformacionAdicional = this.convertValues(source["InformacionAdicional"], null);
	        this.Cancelacion = this.convertValues(source["Cancelacion"], null);
	        this.Comprobante = source["Comprobante"];
	        this.Transaccion = source["Transaccion"];
	        this.XmlPath = source["XmlPath"];
	        this.PdfPath = source["PdfPath"];
	        this.TotalesMonedaLocal = this.convertValues(source["TotalesMonedaLocal"], null);
	        this.ProcessorMetadata = this.convertValues(source["ProcessorMetadata"], null);
	        this.ZipProcessor = this.convertValues(source["ZipProcessor"], null);
	        this.XmlPathProcessor = this.convertValues(source["XmlPathProcessor"], null);
	        this.XmlFileProcessor = this.convertValues(source["XmlFileProcessor"], null);
	        this.FilePathsProcessor = this.convertValues(source["FilePathsProcessor"], null);
	        this.S3FilePath = source["S3FilePath"];
	        this.Version = source["Version"];
	        this.Serie = source["Serie"];
	        this.Folio = source["Folio"];
	        this.Fecha = source["Fecha"];
	        this.Sello = source["Sello"];
	        this.FormaPago = source["FormaPago"];
	        this.NoCertificado = source["NoCertificado"];
	        this.Certificado = source["Certificado"];
	        this.CondicionesPago = source["CondicionesPago"];
	        this.Subtotal = source["Subtotal"];
	        this.Descuento = source["Descuento"];
	        this.MotivoDescuento = source["MotivoDescuento"];
	        this.TipoDeCambio = source["TipoDeCambio"];
	        this.TipoCambio = source["TipoCambio"];
	        this.Moneda = source["Moneda"];
	        this.Total = source["Total"];
	        this.TipoDeComprobante = source["TipoDeComprobante"];
	        this.TipoComprobante = source["TipoComprobante"];
	        this.MetodoPago = source["MetodoPago"];
	        this.LugarExpedicion = source["LugarExpedicion"];
	        this.NumeroCuentaPago = source["NumeroCuentaPago"];
	        this.FolioFiscalOriginal = source["FolioFiscalOriginal"];
	        this.FolioFiscalOrig = source["FolioFiscalOrig"];
	        this.SerieFolioFiscalOriginal = source["SerieFolioFiscalOriginal"];
	        this.FechaFolioFiscalOriginal = this.convertValues(source["FechaFolioFiscalOriginal"], null);
	        this.FechaFolioFiscalOrig = source["FechaFolioFiscalOrig"];
	        this.MontoFolioFiscalOriginal = source["MontoFolioFiscalOriginal"];
	        this.Emisor = this.convertValues(source["Emisor"], Emisor32);
	        this.Receptor = this.convertValues(source["Receptor"], Receptor32);
	        this.Conceptos = this.convertValues(source["Conceptos"], Concepto32);
	        this.Impuestos = this.convertValues(source["Impuestos"], Impuestos32);
	        this.Complemento = this.convertValues(source["Complemento"], Complemento);
	        this.Addenda = this.convertValues(source["Addenda"], Addenda);
	        this.KuantikMetadata = this.convertValues(source["KuantikMetadata"], KuantikMetadata);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Comprobante {
	    Comprobante32?: Comprobante32;
	    Comprobante33?: Comprobante33;
	    Comprobante40?: Comprobante40;
	
	    static createFrom(source: any = {}) {
	        return new Comprobante(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Comprobante32 = this.convertValues(source["Comprobante32"], Comprobante32);
	        this.Comprobante33 = this.convertValues(source["Comprobante33"], Comprobante33);
	        this.Comprobante40 = this.convertValues(source["Comprobante40"], Comprobante40);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}

export namespace consumocombustible {
	
	export class DeterminadoConsumoDeCombus11 {
	    Impuesto: string;
	    Tasa: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new DeterminadoConsumoDeCombus11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Tasa = source["Tasa"];
	        this.Importe = source["Importe"];
	    }
	}
	export class DeterminadosConsumoDeCombus11 {
	    Determinado: DeterminadoConsumoDeCombus11[];
	
	    static createFrom(source: any = {}) {
	        return new DeterminadosConsumoDeCombus11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Determinado = this.convertValues(source["Determinado"], DeterminadoConsumoDeCombus11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptoConsumoDeCombustibles11 {
	    Identificador: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Rfc: string;
	    ClaveEstacion: string;
	    TipoCombustible: string;
	    Cantidad: number;
	    NombreCombustible: string;
	    FolioOperacion: string;
	    ValorUnitario: number;
	    Importe: number;
	    Determinados: DeterminadosConsumoDeCombus11;
	
	    static createFrom(source: any = {}) {
	        return new ConceptoConsumoDeCombustibles11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Identificador = source["Identificador"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Rfc = source["Rfc"];
	        this.ClaveEstacion = source["ClaveEstacion"];
	        this.TipoCombustible = source["TipoCombustible"];
	        this.Cantidad = source["Cantidad"];
	        this.NombreCombustible = source["NombreCombustible"];
	        this.FolioOperacion = source["FolioOperacion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.Determinados = this.convertValues(source["Determinados"], DeterminadosConsumoDeCombus11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptosConsumoDeCombus11 {
	    Concepto: ConceptoConsumoDeCombustibles11[];
	
	    static createFrom(source: any = {}) {
	        return new ConceptosConsumoDeCombus11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Concepto = this.convertValues(source["Concepto"], ConceptoConsumoDeCombustibles11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConsumoDeCombustible11 {
	    Version: string;
	    TipoOperacion: string;
	    NoCuenta: string;
	    Subtotal?: number;
	    Total: number;
	    Conceptos?: ConceptosConsumoDeCombus11;
	
	    static createFrom(source: any = {}) {
	        return new ConsumoDeCombustible11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoOperacion = source["TipoOperacion"];
	        this.NoCuenta = source["NoCuenta"];
	        this.Subtotal = source["Subtotal"];
	        this.Total = source["Total"];
	        this.Conceptos = this.convertValues(source["Conceptos"], ConceptosConsumoDeCombus11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConsumoDeCombustible {
	    ConsumoDeCombustible11?: ConsumoDeCombustible11[];
	
	    static createFrom(source: any = {}) {
	        return new ConsumoDeCombustible(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ConsumoDeCombustible11 = this.convertValues(source["ConsumoDeCombustible11"], ConsumoDeCombustible11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	

}

export namespace detallista {
	
	export class ReferenceIdentification {
	    Value: string;
	    Type: string;
	
	    static createFrom(source: any = {}) {
	        return new ReferenceIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	        this.Type = source["Type"];
	    }
	}
	export class AdditionalInformation {
	    ReferenceIdentification: ReferenceIdentification[];
	
	    static createFrom(source: any = {}) {
	        return new AdditionalInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ReferenceIdentification = this.convertValues(source["ReferenceIdentification"], ReferenceIdentification);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AdditionalInformationLine {
	    ReferenceIdentification?: ReferenceIdentification;
	
	    static createFrom(source: any = {}) {
	        return new AdditionalInformationLine(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ReferenceIdentification = this.convertValues(source["ReferenceIdentification"], ReferenceIdentification);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AditionalQuantity {
	    QuantityType: string;
	    Value: number;
	
	    static createFrom(source: any = {}) {
	        return new AditionalQuantity(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.QuantityType = source["QuantityType"];
	        this.Value = source["Value"];
	    }
	}
	export class MonetaryAmountOrPercentage {
	    Base: string;
	    Percentage?: number;
	
	    static createFrom(source: any = {}) {
	        return new MonetaryAmountOrPercentage(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Percentage = source["Percentage"];
	    }
	}
	export class AllowanceCharge {
	    AllowanceChargeType: string;
	    SettlementType: string;
	    SequenceNumber?: string;
	    SpecialServicesType?: string;
	    MonetaryAmountOrPercentage?: MonetaryAmountOrPercentage;
	
	    static createFrom(source: any = {}) {
	        return new AllowanceCharge(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AllowanceChargeType = source["AllowanceChargeType"];
	        this.SettlementType = source["SettlementType"];
	        this.SequenceNumber = source["SequenceNumber"];
	        this.SpecialServicesType = source["SpecialServicesType"];
	        this.MonetaryAmountOrPercentage = this.convertValues(source["MonetaryAmountOrPercentage"], MonetaryAmountOrPercentage);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class MonetaryAmountOrPercentageLineItem {
	    PercentagePerUnit: string;
	    RatePerUnit: string;
	
	    static createFrom(source: any = {}) {
	        return new MonetaryAmountOrPercentageLineItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PercentagePerUnit = source["PercentagePerUnit"];
	        this.RatePerUnit = source["RatePerUnit"];
	    }
	}
	export class AllowanceChargeLineItem {
	    AllowanceChargeType: string;
	    SettlementType: string;
	    SequenceNumber?: string;
	    SpecialServicesType?: string;
	    MonetaryAmountOrPercentage?: MonetaryAmountOrPercentageLineItem;
	
	    static createFrom(source: any = {}) {
	        return new AllowanceChargeLineItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AllowanceChargeType = source["AllowanceChargeType"];
	        this.SettlementType = source["SettlementType"];
	        this.SequenceNumber = source["SequenceNumber"];
	        this.SpecialServicesType = source["SpecialServicesType"];
	        this.MonetaryAmountOrPercentage = this.convertValues(source["MonetaryAmountOrPercentage"], MonetaryAmountOrPercentageLineItem);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AlternatePartyIdentification {
	    Value: string;
	    Type: string;
	
	    static createFrom(source: any = {}) {
	        return new AlternatePartyIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	        this.Type = source["Type"];
	    }
	}
	export class AlternateTradeItemIdentification {
	    Value?: string;
	    type?: string;
	
	    static createFrom(source: any = {}) {
	        return new AlternateTradeItemIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	        this.type = source["type"];
	    }
	}
	export class Buyer {
	    Gln: string;
	    Text: string;
	
	    static createFrom(source: any = {}) {
	        return new Buyer(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	        this.Text = source["Text"];
	    }
	}
	export class Currency {
	    CurrencyISOCode: string;
	    CurrencyFunction?: string[];
	    RateOfChange?: number;
	
	    static createFrom(source: any = {}) {
	        return new Currency(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CurrencyISOCode = source["CurrencyISOCode"];
	        this.CurrencyFunction = source["CurrencyFunction"];
	        this.RateOfChange = source["RateOfChange"];
	    }
	}
	export class Customs {
	    Gln: string;
	
	    static createFrom(source: any = {}) {
	        return new Customs(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	    }
	}
	export class NameAndAddressCustoms {
	    Name: string;
	
	    static createFrom(source: any = {}) {
	        return new NameAndAddressCustoms(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Name = source["Name"];
	    }
	}
	export class CustomsLineItem {
	    Gln?: string;
	    AlternatePartyIdentification: AlternatePartyIdentification;
	    ReferenceDateString?: string;
	    // Go type: time
	    Date?: any;
	    NameAndAddress: NameAndAddressCustoms;
	
	    static createFrom(source: any = {}) {
	        return new CustomsLineItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	        this.AlternatePartyIdentification = this.convertValues(source["AlternatePartyIdentification"], AlternatePartyIdentification);
	        this.ReferenceDateString = source["ReferenceDateString"];
	        this.Date = this.convertValues(source["Date"], null);
	        this.NameAndAddress = this.convertValues(source["NameAndAddress"], NameAndAddressCustoms);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DeliveryNote {
	    ReferenceIdentification: string[];
	    ReferenceDateString?: string;
	    // Go type: time
	    Date?: any;
	
	    static createFrom(source: any = {}) {
	        return new DeliveryNote(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ReferenceIdentification = source["ReferenceIdentification"];
	        this.ReferenceDateString = source["ReferenceDateString"];
	        this.Date = this.convertValues(source["Date"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Description {
	    Value: string;
	    type: string;
	
	    static createFrom(source: any = {}) {
	        return new Description(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	        this.type = source["type"];
	    }
	}
	export class TotalAllowanceCharge {
	    AllowanceOrChargeType: string;
	    SpecialServicesType?: string;
	    Amount?: number;
	
	    static createFrom(source: any = {}) {
	        return new TotalAllowanceCharge(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.AllowanceOrChargeType = source["AllowanceOrChargeType"];
	        this.SpecialServicesType = source["SpecialServicesType"];
	        this.Amount = source["Amount"];
	    }
	}
	export class TotalAmount {
	    Amount: number;
	
	    static createFrom(source: any = {}) {
	        return new TotalAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = source["Amount"];
	    }
	}
	export class TotalLineAmount {
	    GrossAmount: number;
	    NetAmount?: number;
	
	    static createFrom(source: any = {}) {
	        return new TotalLineAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.GrossAmount = source["GrossAmount"];
	        this.NetAmount = source["NetAmount"];
	    }
	}
	export class TradeItemTaxAmount {
	    TaxPercentage: number;
	    TaxAmount: number;
	
	    static createFrom(source: any = {}) {
	        return new TradeItemTaxAmount(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TaxPercentage = source["TaxPercentage"];
	        this.TaxAmount = source["TaxAmount"];
	    }
	}
	export class TradeItemTaxInformation {
	    TaxTypeDescription: string;
	    ReferenceNumber?: string;
	    TaxCategory?: string;
	    TradeItemTaxAmount?: TradeItemTaxAmount;
	
	    static createFrom(source: any = {}) {
	        return new TradeItemTaxInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TaxTypeDescription = source["TaxTypeDescription"];
	        this.ReferenceNumber = source["ReferenceNumber"];
	        this.TaxCategory = source["TaxCategory"];
	        this.TradeItemTaxAmount = this.convertValues(source["TradeItemTaxAmount"], TradeItemTaxAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class LotNumber {
	    ProductionDateString: string;
	    // Go type: time
	    ProductionDate: any;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new LotNumber(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ProductionDateString = source["ProductionDateString"];
	        this.ProductionDate = this.convertValues(source["ProductionDate"], null);
	        this.Value = source["Value"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ExtendedAttributes {
	    LotNumber: LotNumber[];
	
	    static createFrom(source: any = {}) {
	        return new ExtendedAttributes(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.LotNumber = this.convertValues(source["LotNumber"], LotNumber);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PalletInformation {
	    PalletQuantity: string;
	    Description: Description;
	    MethodPayment: string;
	
	    static createFrom(source: any = {}) {
	        return new PalletInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PalletQuantity = source["PalletQuantity"];
	        this.Description = this.convertValues(source["Description"], Description);
	        this.MethodPayment = source["MethodPayment"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SerialShippingContainerCode {
	    Value: string;
	    Type: string;
	
	    static createFrom(source: any = {}) {
	        return new SerialShippingContainerCode(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Value = source["Value"];
	        this.Type = source["Type"];
	    }
	}
	export class LogisticUnits {
	    SerialShippingContainerCode: SerialShippingContainerCode;
	
	    static createFrom(source: any = {}) {
	        return new LogisticUnits(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SerialShippingContainerCode = this.convertValues(source["SerialShippingContainerCode"], SerialShippingContainerCode);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class NetPrice {
	    Amount: number;
	
	    static createFrom(source: any = {}) {
	        return new NetPrice(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = source["Amount"];
	    }
	}
	export class GrossPrice {
	    Amount: number;
	
	    static createFrom(source: any = {}) {
	        return new GrossPrice(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Amount = source["Amount"];
	    }
	}
	export class InvoicedQuantity {
	    UnitOfMeasure: string;
	    Value: number;
	
	    static createFrom(source: any = {}) {
	        return new InvoicedQuantity(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.UnitOfMeasure = source["UnitOfMeasure"];
	        this.Value = source["Value"];
	    }
	}
	export class TradeItemDescriptionInformation {
	    Language?: string;
	    LongText: string;
	
	    static createFrom(source: any = {}) {
	        return new TradeItemDescriptionInformation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Language = source["Language"];
	        this.LongText = source["LongText"];
	    }
	}
	export class TradeItemIdentification {
	    Gtin: string;
	
	    static createFrom(source: any = {}) {
	        return new TradeItemIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gtin = source["Gtin"];
	    }
	}
	export class LineItem {
	    Type?: string;
	    Number?: number;
	    TradeItemIdentification?: TradeItemIdentification;
	    AlternateTradeItemIdentification?: AlternateTradeItemIdentification[];
	    TradeItemDescriptionInformation?: TradeItemDescriptionInformation;
	    InvoicedQuantity?: InvoicedQuantity;
	    AditionalQuantity?: AditionalQuantity[];
	    GrossPrice?: GrossPrice;
	    NetPrice?: NetPrice;
	    AdditionalInformation?: AdditionalInformationLine;
	    Customs?: CustomsLineItem[];
	    LogisticUnits?: LogisticUnits;
	    PalletInformation?: PalletInformation;
	    ExtendedAttributes?: ExtendedAttributes;
	    AllowanceCharge?: AllowanceChargeLineItem[];
	    TradeItemTaxInformation?: TradeItemTaxInformation[];
	    TotalLineAmount: TotalLineAmount;
	
	    static createFrom(source: any = {}) {
	        return new LineItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.Number = source["Number"];
	        this.TradeItemIdentification = this.convertValues(source["TradeItemIdentification"], TradeItemIdentification);
	        this.AlternateTradeItemIdentification = this.convertValues(source["AlternateTradeItemIdentification"], AlternateTradeItemIdentification);
	        this.TradeItemDescriptionInformation = this.convertValues(source["TradeItemDescriptionInformation"], TradeItemDescriptionInformation);
	        this.InvoicedQuantity = this.convertValues(source["InvoicedQuantity"], InvoicedQuantity);
	        this.AditionalQuantity = this.convertValues(source["AditionalQuantity"], AditionalQuantity);
	        this.GrossPrice = this.convertValues(source["GrossPrice"], GrossPrice);
	        this.NetPrice = this.convertValues(source["NetPrice"], NetPrice);
	        this.AdditionalInformation = this.convertValues(source["AdditionalInformation"], AdditionalInformationLine);
	        this.Customs = this.convertValues(source["Customs"], CustomsLineItem);
	        this.LogisticUnits = this.convertValues(source["LogisticUnits"], LogisticUnits);
	        this.PalletInformation = this.convertValues(source["PalletInformation"], PalletInformation);
	        this.ExtendedAttributes = this.convertValues(source["ExtendedAttributes"], ExtendedAttributes);
	        this.AllowanceCharge = this.convertValues(source["AllowanceCharge"], AllowanceChargeLineItem);
	        this.TradeItemTaxInformation = this.convertValues(source["TradeItemTaxInformation"], TradeItemTaxInformation);
	        this.TotalLineAmount = this.convertValues(source["TotalLineAmount"], TotalLineAmount);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ShipmentDetail {
	
	
	    static createFrom(source: any = {}) {
	        return new ShipmentDetail(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	
	    }
	}
	export class DiscountPayment {
	    DiscountType: string;
	    Percentage: string;
	
	    static createFrom(source: any = {}) {
	        return new DiscountPayment(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.DiscountType = source["DiscountType"];
	        this.Percentage = source["Percentage"];
	    }
	}
	export class TimePeriodDue {
	    TimePeriod: string;
	    Value: string;
	
	    static createFrom(source: any = {}) {
	        return new TimePeriodDue(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TimePeriod = source["TimePeriod"];
	        this.Value = source["Value"];
	    }
	}
	export class NetPayment {
	    NetPaymentTermsType?: string;
	    PaymentTimePeriod?: TimePeriodDue;
	
	    static createFrom(source: any = {}) {
	        return new NetPayment(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NetPaymentTermsType = source["NetPaymentTermsType"];
	        this.PaymentTimePeriod = this.convertValues(source["PaymentTimePeriod"], TimePeriodDue);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PaymentTerms {
	    PaymentTermsEvent?: string;
	    PaymentTermsRelationTime?: string;
	    NetPayment?: NetPayment;
	    DiscountPayment?: DiscountPayment;
	
	    static createFrom(source: any = {}) {
	        return new PaymentTerms(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PaymentTermsEvent = source["PaymentTermsEvent"];
	        this.PaymentTermsRelationTime = source["PaymentTermsRelationTime"];
	        this.NetPayment = this.convertValues(source["NetPayment"], NetPayment);
	        this.DiscountPayment = this.convertValues(source["DiscountPayment"], DiscountPayment);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class NameAndAddress {
	    Name?: string;
	    StreetAddressOne?: string;
	    City?: string;
	    PostalCode?: string;
	
	    static createFrom(source: any = {}) {
	        return new NameAndAddress(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Name = source["Name"];
	        this.StreetAddressOne = source["StreetAddressOne"];
	        this.City = source["City"];
	        this.PostalCode = source["PostalCode"];
	    }
	}
	export class InvoiceCreator {
	    Gln?: string;
	    AlternatePartyIdentification?: AlternatePartyIdentification;
	    NameAndAddress?: NameAndAddress;
	
	    static createFrom(source: any = {}) {
	        return new InvoiceCreator(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	        this.AlternatePartyIdentification = this.convertValues(source["AlternatePartyIdentification"], AlternatePartyIdentification);
	        this.NameAndAddress = this.convertValues(source["NameAndAddress"], NameAndAddress);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class NameAndAddressArray {
	    Name?: string[];
	    StreetAddressOne?: string[];
	    City?: string[];
	    PostalCode?: string[];
	
	    static createFrom(source: any = {}) {
	        return new NameAndAddressArray(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Name = source["Name"];
	        this.StreetAddressOne = source["StreetAddressOne"];
	        this.City = source["City"];
	        this.PostalCode = source["PostalCode"];
	    }
	}
	export class ShipTo {
	    Gln?: string;
	    NameAndAddress?: NameAndAddressArray;
	
	    static createFrom(source: any = {}) {
	        return new ShipTo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	        this.NameAndAddress = this.convertValues(source["NameAndAddress"], NameAndAddressArray);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Seller {
	    Gln: string;
	    AlternatePartyIdentification: AlternatePartyIdentification;
	
	    static createFrom(source: any = {}) {
	        return new Seller(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Gln = source["Gln"];
	        this.AlternatePartyIdentification = this.convertValues(source["AlternatePartyIdentification"], AlternatePartyIdentification);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class OrderIdentification {
	    ReferenceIdentification: ReferenceIdentification[];
	    ReferenceDateString?: string;
	    // Go type: time
	    Date?: any;
	
	    static createFrom(source: any = {}) {
	        return new OrderIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ReferenceIdentification = this.convertValues(source["ReferenceIdentification"], ReferenceIdentification);
	        this.ReferenceDateString = source["ReferenceDateString"];
	        this.Date = this.convertValues(source["Date"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SpecialInstruction {
	    Code: string;
	    Text: string[];
	
	    static createFrom(source: any = {}) {
	        return new SpecialInstruction(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Code = source["Code"];
	        this.Text = source["Text"];
	    }
	}
	export class RequestForPaymentIdentification {
	    EntityType: string;
	
	    static createFrom(source: any = {}) {
	        return new RequestForPaymentIdentification(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.EntityType = source["EntityType"];
	    }
	}
	export class Detallista10 {
	    Type?: string;
	    ContentVersion?: string;
	    DocumentStructureVersion: string;
	    DocumentStatus: string;
	    RequestForPaymentIdentification: RequestForPaymentIdentification;
	    SpecialInstruction?: SpecialInstruction[];
	    OrderIdentification: OrderIdentification;
	    AdditionalInformation?: AdditionalInformation;
	    DeliveryNote?: DeliveryNote;
	    Buyer: Buyer;
	    Seller?: Seller;
	    ShipTo?: ShipTo;
	    InvoiceCreator?: InvoiceCreator;
	    Customs?: Customs[];
	    Currency?: Currency[];
	    PaymentTerms?: PaymentTerms;
	    // Go type: ShipmentDetail
	    ShipmentDetail?: any;
	    AllowanceCharge?: AllowanceCharge[];
	    LineItem?: LineItem[];
	    TotalAmount?: TotalAmount;
	    TotalAllowanceCharge?: TotalAllowanceCharge[];
	
	    static createFrom(source: any = {}) {
	        return new Detallista10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Type = source["Type"];
	        this.ContentVersion = source["ContentVersion"];
	        this.DocumentStructureVersion = source["DocumentStructureVersion"];
	        this.DocumentStatus = source["DocumentStatus"];
	        this.RequestForPaymentIdentification = this.convertValues(source["RequestForPaymentIdentification"], RequestForPaymentIdentification);
	        this.SpecialInstruction = this.convertValues(source["SpecialInstruction"], SpecialInstruction);
	        this.OrderIdentification = this.convertValues(source["OrderIdentification"], OrderIdentification);
	        this.AdditionalInformation = this.convertValues(source["AdditionalInformation"], AdditionalInformation);
	        this.DeliveryNote = this.convertValues(source["DeliveryNote"], DeliveryNote);
	        this.Buyer = this.convertValues(source["Buyer"], Buyer);
	        this.Seller = this.convertValues(source["Seller"], Seller);
	        this.ShipTo = this.convertValues(source["ShipTo"], ShipTo);
	        this.InvoiceCreator = this.convertValues(source["InvoiceCreator"], InvoiceCreator);
	        this.Customs = this.convertValues(source["Customs"], Customs);
	        this.Currency = this.convertValues(source["Currency"], Currency);
	        this.PaymentTerms = this.convertValues(source["PaymentTerms"], PaymentTerms);
	        this.ShipmentDetail = this.convertValues(source["ShipmentDetail"], null);
	        this.AllowanceCharge = this.convertValues(source["AllowanceCharge"], AllowanceCharge);
	        this.LineItem = this.convertValues(source["LineItem"], LineItem);
	        this.TotalAmount = this.convertValues(source["TotalAmount"], TotalAmount);
	        this.TotalAllowanceCharge = this.convertValues(source["TotalAllowanceCharge"], TotalAllowanceCharge);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Detallista {
	    Detallista10?: Detallista10[];
	
	    static createFrom(source: any = {}) {
	        return new Detallista(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Detallista10 = this.convertValues(source["Detallista10"], Detallista10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}

export namespace divisas {
	
	export class Divisas10 {
	    Version: string;
	    TipoOperacion: string;
	
	    static createFrom(source: any = {}) {
	        return new Divisas10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoOperacion = source["TipoOperacion"];
	    }
	}
	export class Divisas {
	    Divisas10?: Divisas10[];
	
	    static createFrom(source: any = {}) {
	        return new Divisas(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Divisas10 = this.convertValues(source["Divisas10"], Divisas10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace donatarias {
	
	export class Donatarias11 {
	    Version: string;
	    NoAutorizacion: string;
	    FechaAutString: string;
	    // Go type: time
	    FechaAutorizacion: any;
	    Leyenda: string;
	
	    static createFrom(source: any = {}) {
	        return new Donatarias11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.NoAutorizacion = source["NoAutorizacion"];
	        this.FechaAutString = source["FechaAutString"];
	        this.FechaAutorizacion = this.convertValues(source["FechaAutorizacion"], null);
	        this.Leyenda = source["Leyenda"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Donatarias {
	    Donatarias11?: Donatarias11[];
	
	    static createFrom(source: any = {}) {
	        return new Donatarias(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Donatarias11 = this.convertValues(source["Donatarias11"], Donatarias11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace estadodecuentacombustible {
	
	export class TrasladoEstadoDeCuentaCombustible10 {
	    Impuesto: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoEstadoDeCuentaCombustible10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class TrasladosEstadoDeCuentaCombustible10 {
	    Traslado: TrasladoEstadoDeCuentaCombustible10[];
	
	    static createFrom(source: any = {}) {
	        return new TrasladosEstadoDeCuentaCombustible10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Traslado = this.convertValues(source["Traslado"], TrasladoEstadoDeCuentaCombustible10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptoEstadoDeCuentaCombustible10 {
	    Identificador: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Rfc: string;
	    ClaveEstacion: string;
	    Cantidad: string;
	    NombreCombustible: string;
	    FolioOperacion: string;
	    ValorUnitario: number;
	    Importe: number;
	    Traslados: TrasladosEstadoDeCuentaCombustible10;
	
	    static createFrom(source: any = {}) {
	        return new ConceptoEstadoDeCuentaCombustible10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Identificador = source["Identificador"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Rfc = source["Rfc"];
	        this.ClaveEstacion = source["ClaveEstacion"];
	        this.Cantidad = source["Cantidad"];
	        this.NombreCombustible = source["NombreCombustible"];
	        this.FolioOperacion = source["FolioOperacion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.Traslados = this.convertValues(source["Traslados"], TrasladosEstadoDeCuentaCombustible10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TrasladoEstadoDeCuentaCombus11 {
	    Impuesto: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoEstadoDeCuentaCombus11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class TrasladosEstadoDeCuentaCombus11 {
	    Traslado: TrasladoEstadoDeCuentaCombus11[];
	
	    static createFrom(source: any = {}) {
	        return new TrasladosEstadoDeCuentaCombus11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Traslado = this.convertValues(source["Traslado"], TrasladoEstadoDeCuentaCombus11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptoEstadoDeCuentaCombustible11 {
	    Identificador: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Rfc: string;
	    ClaveEstacion: string;
	    Tar?: string;
	    Cantidad: string;
	    NoIdentificacion: string;
	    Unidad?: string;
	    NombreCombustible: string;
	    FolioOperacion: string;
	    ValorUnitario: number;
	    Importe: number;
	    Traslados: TrasladosEstadoDeCuentaCombus11;
	
	    static createFrom(source: any = {}) {
	        return new ConceptoEstadoDeCuentaCombustible11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Identificador = source["Identificador"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Rfc = source["Rfc"];
	        this.ClaveEstacion = source["ClaveEstacion"];
	        this.Tar = source["Tar"];
	        this.Cantidad = source["Cantidad"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Unidad = source["Unidad"];
	        this.NombreCombustible = source["NombreCombustible"];
	        this.FolioOperacion = source["FolioOperacion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.Traslados = this.convertValues(source["Traslados"], TrasladosEstadoDeCuentaCombus11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TrasladoEstadoDeCuentaCombus12 {
	    Impuesto: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoEstadoDeCuentaCombus12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class TrasladosEstadoDeCuentaCombus12 {
	    Traslado: TrasladoEstadoDeCuentaCombus12[];
	
	    static createFrom(source: any = {}) {
	        return new TrasladosEstadoDeCuentaCombus12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Traslado = this.convertValues(source["Traslado"], TrasladoEstadoDeCuentaCombus12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptoEstadoDeCuentaCombustible12 {
	    Identificador: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Rfc: string;
	    ClaveEstacion: string;
	    Cantidad: string;
	    TipoCombustible: string;
	    NoIdentificacion: string;
	    Unidad?: string;
	    NombreCombustible: string;
	    FolioOperacion: string;
	    ValorUnitario: number;
	    Importe: number;
	    Traslados: TrasladosEstadoDeCuentaCombus12;
	
	    static createFrom(source: any = {}) {
	        return new ConceptoEstadoDeCuentaCombustible12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Identificador = source["Identificador"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Rfc = source["Rfc"];
	        this.ClaveEstacion = source["ClaveEstacion"];
	        this.Cantidad = source["Cantidad"];
	        this.TipoCombustible = source["TipoCombustible"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Unidad = source["Unidad"];
	        this.NombreCombustible = source["NombreCombustible"];
	        this.FolioOperacion = source["FolioOperacion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	        this.Traslados = this.convertValues(source["Traslados"], TrasladosEstadoDeCuentaCombus12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptosEstadoDeCuentaCombus10 {
	    Concepto: ConceptoEstadoDeCuentaCombustible10[];
	
	    static createFrom(source: any = {}) {
	        return new ConceptosEstadoDeCuentaCombus10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Concepto = this.convertValues(source["Concepto"], ConceptoEstadoDeCuentaCombustible10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptosEstadoDeCuentaCombus11 {
	    Concepto: ConceptoEstadoDeCuentaCombustible11[];
	
	    static createFrom(source: any = {}) {
	        return new ConceptosEstadoDeCuentaCombus11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Concepto = this.convertValues(source["Concepto"], ConceptoEstadoDeCuentaCombustible11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ConceptosEstadoDeCuentaCombus12 {
	    Concepto: ConceptoEstadoDeCuentaCombustible12[];
	
	    static createFrom(source: any = {}) {
	        return new ConceptosEstadoDeCuentaCombus12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Concepto = this.convertValues(source["Concepto"], ConceptoEstadoDeCuentaCombustible12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EstadoDeCuentaCombustible12 {
	    Version: string;
	    TipoOperacion: string;
	    NoCuenta: string;
	    Subtotal: number;
	    Total: number;
	    Conceptos: ConceptosEstadoDeCuentaCombus12;
	
	    static createFrom(source: any = {}) {
	        return new EstadoDeCuentaCombustible12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoOperacion = source["TipoOperacion"];
	        this.NoCuenta = source["NoCuenta"];
	        this.Subtotal = source["Subtotal"];
	        this.Total = source["Total"];
	        this.Conceptos = this.convertValues(source["Conceptos"], ConceptosEstadoDeCuentaCombus12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EstadoDeCuentaCombustible11 {
	    Version: string;
	    TipoOperacion: string;
	    NoCuenta: string;
	    Subtotal: number;
	    Total: number;
	    Conceptos: ConceptosEstadoDeCuentaCombus11;
	
	    static createFrom(source: any = {}) {
	        return new EstadoDeCuentaCombustible11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoOperacion = source["TipoOperacion"];
	        this.NoCuenta = source["NoCuenta"];
	        this.Subtotal = source["Subtotal"];
	        this.Total = source["Total"];
	        this.Conceptos = this.convertValues(source["Conceptos"], ConceptosEstadoDeCuentaCombus11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EstadoDeCuentaCombustible10 {
	    TipoOperacion: string;
	    NoCuenta: string;
	    Subtotal?: number;
	    Total: number;
	    Conceptos: ConceptosEstadoDeCuentaCombus10;
	
	    static createFrom(source: any = {}) {
	        return new EstadoDeCuentaCombustible10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TipoOperacion = source["TipoOperacion"];
	        this.NoCuenta = source["NoCuenta"];
	        this.Subtotal = source["Subtotal"];
	        this.Total = source["Total"];
	        this.Conceptos = this.convertValues(source["Conceptos"], ConceptosEstadoDeCuentaCombus10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EstadoDeCuentaCombustible {
	    EstadoDeCuentaCombustible10?: EstadoDeCuentaCombustible10[];
	    EstadoDeCuentaCombustible11?: EstadoDeCuentaCombustible11[];
	    EstadoDeCuentaCombustible12?: EstadoDeCuentaCombustible12[];
	
	    static createFrom(source: any = {}) {
	        return new EstadoDeCuentaCombustible(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.EstadoDeCuentaCombustible10 = this.convertValues(source["EstadoDeCuentaCombustible10"], EstadoDeCuentaCombustible10);
	        this.EstadoDeCuentaCombustible11 = this.convertValues(source["EstadoDeCuentaCombustible11"], EstadoDeCuentaCombustible11);
	        this.EstadoDeCuentaCombustible12 = this.convertValues(source["EstadoDeCuentaCombustible12"], EstadoDeCuentaCombustible12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	

}

export namespace gastohidrocarburos {
	
	export class TareasGastoHidrocar10 {
	    TareaRelacionada?: string;
	
	    static createFrom(source: any = {}) {
	        return new TareasGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TareaRelacionada = source["TareaRelacionada"];
	    }
	}
	export class SubActividadesGastoHidrocar10 {
	    SubactividadRelacionada?: string;
	    Tareas?: TareasGastoHidrocar10[];
	
	    static createFrom(source: any = {}) {
	        return new SubActividadesGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SubactividadRelacionada = source["SubactividadRelacionada"];
	        this.Tareas = this.convertValues(source["Tareas"], TareasGastoHidrocar10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ActividadesGastoHidrocar10 {
	    ActividadRelacionada?: string;
	    Subactividades?: SubActividadesGastoHidrocar10[];
	
	    static createFrom(source: any = {}) {
	        return new ActividadesGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ActividadRelacionada = source["ActividadRelacionada"];
	        this.Subactividades = this.convertValues(source["Subactividades"], SubActividadesGastoHidrocar10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PozosGastoHidrocar10 {
	    Pozo?: string;
	
	    static createFrom(source: any = {}) {
	        return new PozosGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Pozo = source["Pozo"];
	    }
	}
	export class YacimientosGastoHidrocar10 {
	    Yacimiento?: string;
	    Pozos?: PozosGastoHidrocar10[];
	
	    static createFrom(source: any = {}) {
	        return new YacimientosGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Yacimiento = source["Yacimiento"];
	        this.Pozos = this.convertValues(source["Pozos"], PozosGastoHidrocar10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CentroCostosGastoHidrocar10 {
	    Campo?: string;
	    Yacimientos?: YacimientosGastoHidrocar10[];
	
	    static createFrom(source: any = {}) {
	        return new CentroCostosGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Campo = source["Campo"];
	        this.Yacimientos = this.convertValues(source["Yacimientos"], YacimientosGastoHidrocar10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DocumentoRelacionadoGastoHidrocar10 {
	    OrigenErogacion: string;
	    FolioFiscalVinculado?: string;
	    RfcProveedor?: string;
	    MontoTotalIva?: number;
	    MontoRetencionIsr?: number;
	    MontoRetencionIva?: number;
	    MontoRetencionOtrosImpuestos?: number;
	    NumeroPedimentoVinculado?: string;
	    ClavePedimentoVinculado?: string;
	    ClavePagoPedimentoVinculado?: string;
	    MontoIvaPedimento?: number;
	    OtrosImpuestosPagadosPedimento?: number;
	    FechaFolioFiscalVinculadoString?: string;
	    // Go type: time
	    FechaFolioFiscalVinculado?: any;
	    Mes: string;
	    MontoTotalErogaciones?: number;
	
	    static createFrom(source: any = {}) {
	        return new DocumentoRelacionadoGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.OrigenErogacion = source["OrigenErogacion"];
	        this.FolioFiscalVinculado = source["FolioFiscalVinculado"];
	        this.RfcProveedor = source["RfcProveedor"];
	        this.MontoTotalIva = source["MontoTotalIva"];
	        this.MontoRetencionIsr = source["MontoRetencionIsr"];
	        this.MontoRetencionIva = source["MontoRetencionIva"];
	        this.MontoRetencionOtrosImpuestos = source["MontoRetencionOtrosImpuestos"];
	        this.NumeroPedimentoVinculado = source["NumeroPedimentoVinculado"];
	        this.ClavePedimentoVinculado = source["ClavePedimentoVinculado"];
	        this.ClavePagoPedimentoVinculado = source["ClavePagoPedimentoVinculado"];
	        this.MontoIvaPedimento = source["MontoIvaPedimento"];
	        this.OtrosImpuestosPagadosPedimento = source["OtrosImpuestosPagadosPedimento"];
	        this.FechaFolioFiscalVinculadoString = source["FechaFolioFiscalVinculadoString"];
	        this.FechaFolioFiscalVinculado = this.convertValues(source["FechaFolioFiscalVinculado"], null);
	        this.Mes = source["Mes"];
	        this.MontoTotalErogaciones = source["MontoTotalErogaciones"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ErogacionGastoHidrocar10 {
	    Tipo: string;
	    MontoCuErogacion: string;
	    Porcentaje: string;
	    DocumentoRelacionado?: DocumentoRelacionadoGastoHidrocar10[];
	    Actividades?: ActividadesGastoHidrocar10[];
	    CentroCostos?: CentroCostosGastoHidrocar10[];
	
	    static createFrom(source: any = {}) {
	        return new ErogacionGastoHidrocar10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.MontoCuErogacion = source["MontoCuErogacion"];
	        this.Porcentaje = source["Porcentaje"];
	        this.DocumentoRelacionado = this.convertValues(source["DocumentoRelacionado"], DocumentoRelacionadoGastoHidrocar10);
	        this.Actividades = this.convertValues(source["Actividades"], ActividadesGastoHidrocar10);
	        this.CentroCostos = this.convertValues(source["CentroCostos"], CentroCostosGastoHidrocar10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GastoHidrocarburos10 {
	    Version: string;
	    NoContrato: string;
	    AreaContractual?: string;
	    Erogacion?: ErogacionGastoHidrocar10[];
	
	    static createFrom(source: any = {}) {
	        return new GastoHidrocarburos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.NoContrato = source["NoContrato"];
	        this.AreaContractual = source["AreaContractual"];
	        this.Erogacion = this.convertValues(source["Erogacion"], ErogacionGastoHidrocar10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GastoHidrocarburos {
	    GastoHidrocarburos10?: GastoHidrocarburos10[];
	
	    static createFrom(source: any = {}) {
	        return new GastoHidrocarburos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.GastoHidrocarburos10 = this.convertValues(source["GastoHidrocarburos10"], GastoHidrocarburos10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	

}

export namespace impuestoslocales {
	
	export class TrasladosLocalesImpLoc10 {
	    Impuesto: string;
	    Tasa: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladosLocalesImpLoc10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Tasa = source["Tasa"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionesLocalesImpLoc10 {
	    Impuesto: string;
	    Tasa: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionesLocalesImpLoc10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Tasa = source["Tasa"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestoLocales10 {
	    Version: string;
	    TotalRetenciones: number;
	    TotalTraslados: number;
	    Retenciones?: RetencionesLocalesImpLoc10[];
	    Traslados?: TrasladosLocalesImpLoc10[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestoLocales10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TotalRetenciones = source["TotalRetenciones"];
	        this.TotalTraslados = source["TotalTraslados"];
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionesLocalesImpLoc10);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladosLocalesImpLoc10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ImpuestosLocales {
	    ImpuestoLocales10?: ImpuestoLocales10[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosLocales(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ImpuestoLocales10 = this.convertValues(source["ImpuestoLocales10"], ImpuestoLocales10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	

}

export namespace ine {
	
	export class ContabilidadINE11 {
	    IdContabilidad: number;
	
	    static createFrom(source: any = {}) {
	        return new ContabilidadINE11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.IdContabilidad = source["IdContabilidad"];
	    }
	}
	export class EntidadINE11 {
	    ClaveEntidad: string;
	    Ambito?: string;
	    Contabilidad?: ContabilidadINE11[];
	
	    static createFrom(source: any = {}) {
	        return new EntidadINE11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ClaveEntidad = source["ClaveEntidad"];
	        this.Ambito = source["Ambito"];
	        this.Contabilidad = this.convertValues(source["Contabilidad"], ContabilidadINE11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class INE11 {
	    Version: string;
	    TipoProceso: string;
	    TipoComite?: string;
	    IdContabilidad?: number;
	    Entidad?: EntidadINE11[];
	
	    static createFrom(source: any = {}) {
	        return new INE11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoProceso = source["TipoProceso"];
	        this.TipoComite = source["TipoComite"];
	        this.IdContabilidad = source["IdContabilidad"];
	        this.Entidad = this.convertValues(source["Entidad"], EntidadINE11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class INE {
	    INE11?: INE11[];
	
	    static createFrom(source: any = {}) {
	        return new INE(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.INE11 = this.convertValues(source["INE11"], INE11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace institeducativas {
	
	export class InstitucioneEducativas10 {
	    Version: string;
	    NombreAlumno: string;
	    Curp: string;
	    NivelEducativo: string;
	    AutRvoe: string;
	    RfcPago?: string;
	
	    static createFrom(source: any = {}) {
	        return new InstitucioneEducativas10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.NombreAlumno = source["NombreAlumno"];
	        this.Curp = source["Curp"];
	        this.NivelEducativo = source["NivelEducativo"];
	        this.AutRvoe = source["AutRvoe"];
	        this.RfcPago = source["RfcPago"];
	    }
	}
	export class InstitucioneEducativas {
	    InstitucioneEducativas10?: InstitucioneEducativas10[];
	
	    static createFrom(source: any = {}) {
	        return new InstitucioneEducativas(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.InstitucioneEducativas10 = this.convertValues(source["InstitucioneEducativas10"], InstitucioneEducativas10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace leyendasfiscales {
	
	export class LeyendaLeyendasFis10 {
	    DisposicionFiscal?: string;
	    Norma?: string;
	    TextoLeyenda: string;
	
	    static createFrom(source: any = {}) {
	        return new LeyendaLeyendasFis10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.DisposicionFiscal = source["DisposicionFiscal"];
	        this.Norma = source["Norma"];
	        this.TextoLeyenda = source["TextoLeyenda"];
	    }
	}
	export class LeyendasFiscales10 {
	    Version: string;
	    Leyenda: LeyendaLeyendasFis10[];
	
	    static createFrom(source: any = {}) {
	        return new LeyendasFiscales10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Leyenda = this.convertValues(source["Leyenda"], LeyendaLeyendasFis10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class LeyendasFiscales {
	    LeyendasFiscales10?: LeyendasFiscales10[];
	
	    static createFrom(source: any = {}) {
	        return new LeyendasFiscales(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.LeyendasFiscales10 = this.convertValues(source["LeyendasFiscales10"], LeyendasFiscales10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace models {
	
	export class Book {
	    id: number[];
	    title: string;
	    author: string;
	    // Go type: time
	    published_at: any;
	    pages: number;
	
	    static createFrom(source: any = {}) {
	        return new Book(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.author = source["author"];
	        this.published_at = this.convertValues(source["published_at"], null);
	        this.pages = source["pages"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class User {
	    id: number;
	    name: string;
	    surnames: string;
	    // Go type: time
	    birth_date: any;
	    phone_number: string;
	    email: string;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.surnames = source["surnames"];
	        this.birth_date = this.convertValues(source["birth_date"], null);
	        this.phone_number = source["phone_number"];
	        this.email = source["email"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace nomina {
	
	export class AccionesOTitulosNomina12 {
	    ValorMercado: number;
	    PrecioAlOtorgarse: number;
	
	    static createFrom(source: any = {}) {
	        return new AccionesOTitulosNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ValorMercado = source["ValorMercado"];
	        this.PrecioAlOtorgarse = source["PrecioAlOtorgarse"];
	    }
	}
	export class CompensacionSaldosAFavorNomina12 {
	    SaldoAFavor: number;
	    Anio: string;
	    RemanenteSaldoAFavor: number;
	
	    static createFrom(source: any = {}) {
	        return new CompensacionSaldosAFavorNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SaldoAFavor = source["SaldoAFavor"];
	        this.Anio = source["Anio"];
	        this.RemanenteSaldoAFavor = source["RemanenteSaldoAFavor"];
	    }
	}
	export class DeduccionNomina11 {
	    Tipo: number;
	    Clave: string;
	    Concepto: string;
	    ImporteGravado: number;
	    ImporteExento: number;
	
	    static createFrom(source: any = {}) {
	        return new DeduccionNomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Clave = source["Clave"];
	        this.Concepto = source["Concepto"];
	        this.ImporteGravado = source["ImporteGravado"];
	        this.ImporteExento = source["ImporteExento"];
	    }
	}
	export class DeduccionNomina12 {
	    Tipo: string;
	    Clave: string;
	    Concepto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new DeduccionNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Clave = source["Clave"];
	        this.Concepto = source["Concepto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class DeduccionesNomina11 {
	    TotalGravado: number;
	    TotalExento: number;
	    Deduccion: DeduccionNomina11[];
	
	    static createFrom(source: any = {}) {
	        return new DeduccionesNomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalGravado = source["TotalGravado"];
	        this.TotalExento = source["TotalExento"];
	        this.Deduccion = this.convertValues(source["Deduccion"], DeduccionNomina11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DeduccionesNomina12 {
	    TotalOtrasDeducciones?: number;
	    TotalImpuestosRetenidos?: number;
	    Deduccion: DeduccionNomina12[];
	
	    static createFrom(source: any = {}) {
	        return new DeduccionesNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalOtrasDeducciones = source["TotalOtrasDeducciones"];
	        this.TotalImpuestosRetenidos = source["TotalImpuestosRetenidos"];
	        this.Deduccion = this.convertValues(source["Deduccion"], DeduccionNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EntidadSNCFNomina12 {
	    OrigenRecurso: string;
	    MontoRecursoPropio?: number;
	
	    static createFrom(source: any = {}) {
	        return new EntidadSNCFNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.OrigenRecurso = source["OrigenRecurso"];
	        this.MontoRecursoPropio = source["MontoRecursoPropio"];
	    }
	}
	export class EmisorNomina12 {
	    Curp?: string;
	    RegistroPatronal?: string;
	    RfcPatronOrigen?: string;
	    EntidadSncf?: EntidadSNCFNomina12;
	
	    static createFrom(source: any = {}) {
	        return new EmisorNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	        this.RegistroPatronal = source["RegistroPatronal"];
	        this.RfcPatronOrigen = source["RfcPatronOrigen"];
	        this.EntidadSncf = this.convertValues(source["EntidadSncf"], EntidadSNCFNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class HorasExtraNomina11 {
	    Dias: number;
	    TipoHoras: string;
	    HorasExtra: number;
	    ImportePagado: number;
	
	    static createFrom(source: any = {}) {
	        return new HorasExtraNomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Dias = source["Dias"];
	        this.TipoHoras = source["TipoHoras"];
	        this.HorasExtra = source["HorasExtra"];
	        this.ImportePagado = source["ImportePagado"];
	    }
	}
	export class HorasExtraNomina12 {
	    Dias: number;
	    TipoHoras: string;
	    HorasExtra: number;
	    ImportePagado: number;
	
	    static createFrom(source: any = {}) {
	        return new HorasExtraNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Dias = source["Dias"];
	        this.TipoHoras = source["TipoHoras"];
	        this.HorasExtra = source["HorasExtra"];
	        this.ImportePagado = source["ImportePagado"];
	    }
	}
	export class IncapacidadNomina11 {
	    Dias: number;
	    Tipo: number;
	    Descuento: number;
	
	    static createFrom(source: any = {}) {
	        return new IncapacidadNomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Dias = source["Dias"];
	        this.Tipo = source["Tipo"];
	        this.Descuento = source["Descuento"];
	    }
	}
	export class IncapacidadNomina12 {
	    Dias: number;
	    Tipo: string;
	    Importe?: number;
	
	    static createFrom(source: any = {}) {
	        return new IncapacidadNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Dias = source["Dias"];
	        this.Tipo = source["Tipo"];
	        this.Importe = source["Importe"];
	    }
	}
	export class JubilacionPensionRetiroNomina12 {
	    TotalUnaExhibicion?: number;
	    TotalParcialidad?: number;
	    MontoDiario?: number;
	    IngresoAcumulable: number;
	    IngresoNoAcumulable: number;
	
	    static createFrom(source: any = {}) {
	        return new JubilacionPensionRetiroNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalUnaExhibicion = source["TotalUnaExhibicion"];
	        this.TotalParcialidad = source["TotalParcialidad"];
	        this.MontoDiario = source["MontoDiario"];
	        this.IngresoAcumulable = source["IngresoAcumulable"];
	        this.IngresoNoAcumulable = source["IngresoNoAcumulable"];
	    }
	}
	export class SubsidioAlEmpleoNomina12 {
	    SubsidioCausado: number;
	
	    static createFrom(source: any = {}) {
	        return new SubsidioAlEmpleoNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.SubsidioCausado = source["SubsidioCausado"];
	    }
	}
	export class OtroPagoNomina12 {
	    Tipo: string;
	    Clave: string;
	    Concepto: string;
	    Importe: number;
	    SubsidioAlEmpleo?: SubsidioAlEmpleoNomina12;
	    CompensacionSaldosAFavor?: CompensacionSaldosAFavorNomina12;
	
	    static createFrom(source: any = {}) {
	        return new OtroPagoNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Clave = source["Clave"];
	        this.Concepto = source["Concepto"];
	        this.Importe = source["Importe"];
	        this.SubsidioAlEmpleo = this.convertValues(source["SubsidioAlEmpleo"], SubsidioAlEmpleoNomina12);
	        this.CompensacionSaldosAFavor = this.convertValues(source["CompensacionSaldosAFavor"], CompensacionSaldosAFavorNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SeparacionIndemnizacionNomina12 {
	    TotalPagado: number;
	    NumeroAniosServicio: number;
	    UltimoSueldoMensualOrdinario: number;
	    IngresoAcumulable: number;
	    IngresoNoAcumulable: number;
	
	    static createFrom(source: any = {}) {
	        return new SeparacionIndemnizacionNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalPagado = source["TotalPagado"];
	        this.NumeroAniosServicio = source["NumeroAniosServicio"];
	        this.UltimoSueldoMensualOrdinario = source["UltimoSueldoMensualOrdinario"];
	        this.IngresoAcumulable = source["IngresoAcumulable"];
	        this.IngresoNoAcumulable = source["IngresoNoAcumulable"];
	    }
	}
	export class PercepcionNomina12 {
	    Tipo: string;
	    Clave: string;
	    Concepto: string;
	    ImporteGravado: number;
	    ImporteExento: number;
	    AccionesOTitulos?: AccionesOTitulosNomina12;
	    HorasExtra?: HorasExtraNomina12[];
	
	    static createFrom(source: any = {}) {
	        return new PercepcionNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Clave = source["Clave"];
	        this.Concepto = source["Concepto"];
	        this.ImporteGravado = source["ImporteGravado"];
	        this.ImporteExento = source["ImporteExento"];
	        this.AccionesOTitulos = this.convertValues(source["AccionesOTitulos"], AccionesOTitulosNomina12);
	        this.HorasExtra = this.convertValues(source["HorasExtra"], HorasExtraNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PercepcionesNomina12 {
	    TotalSueldos?: number;
	    TotalSeparacionIndemnizacion?: number;
	    TotalJubilacionPensionRetiro?: number;
	    TotalGravado: number;
	    TotalExento: number;
	    Percepcion: PercepcionNomina12[];
	    JubilacionPensionRetiro?: JubilacionPensionRetiroNomina12;
	    SeparacionIndemnizacion?: SeparacionIndemnizacionNomina12;
	
	    static createFrom(source: any = {}) {
	        return new PercepcionesNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalSueldos = source["TotalSueldos"];
	        this.TotalSeparacionIndemnizacion = source["TotalSeparacionIndemnizacion"];
	        this.TotalJubilacionPensionRetiro = source["TotalJubilacionPensionRetiro"];
	        this.TotalGravado = source["TotalGravado"];
	        this.TotalExento = source["TotalExento"];
	        this.Percepcion = this.convertValues(source["Percepcion"], PercepcionNomina12);
	        this.JubilacionPensionRetiro = this.convertValues(source["JubilacionPensionRetiro"], JubilacionPensionRetiroNomina12);
	        this.SeparacionIndemnizacion = this.convertValues(source["SeparacionIndemnizacion"], SeparacionIndemnizacionNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SubContratacionNomina12 {
	    RfcLabora: string;
	    PorcentajeTiempo: number;
	
	    static createFrom(source: any = {}) {
	        return new SubContratacionNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.RfcLabora = source["RfcLabora"];
	        this.PorcentajeTiempo = source["PorcentajeTiempo"];
	    }
	}
	export class ReceptorNomina12 {
	    Curp: string;
	    NoSeguridadSocial?: string;
	    FechaInicioRelLaboral?: string;
	    // Go type: time
	    FechaInicioRelacionLaboral?: any;
	    Antiguedad?: string;
	    TipoContrato: string;
	    Sindicalizado?: string;
	    TipoJornada?: string;
	    TipoRegimen: string;
	    NoEmpleado: string;
	    Departamento?: string;
	    Puesto?: string;
	    RiesgoPuesto?: string;
	    PeriodicidadPago: string;
	    Banco?: string;
	    CuentaBancaria?: string;
	    SalarioBaseCotizacion?: number;
	    SalarioDiarioIntegrado?: number;
	    ClaveEntidadFederativa: string;
	    Subcontratacion?: SubContratacionNomina12[];
	
	    static createFrom(source: any = {}) {
	        return new ReceptorNomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	        this.NoSeguridadSocial = source["NoSeguridadSocial"];
	        this.FechaInicioRelLaboral = source["FechaInicioRelLaboral"];
	        this.FechaInicioRelacionLaboral = this.convertValues(source["FechaInicioRelacionLaboral"], null);
	        this.Antiguedad = source["Antiguedad"];
	        this.TipoContrato = source["TipoContrato"];
	        this.Sindicalizado = source["Sindicalizado"];
	        this.TipoJornada = source["TipoJornada"];
	        this.TipoRegimen = source["TipoRegimen"];
	        this.NoEmpleado = source["NoEmpleado"];
	        this.Departamento = source["Departamento"];
	        this.Puesto = source["Puesto"];
	        this.RiesgoPuesto = source["RiesgoPuesto"];
	        this.PeriodicidadPago = source["PeriodicidadPago"];
	        this.Banco = source["Banco"];
	        this.CuentaBancaria = source["CuentaBancaria"];
	        this.SalarioBaseCotizacion = source["SalarioBaseCotizacion"];
	        this.SalarioDiarioIntegrado = source["SalarioDiarioIntegrado"];
	        this.ClaveEntidadFederativa = source["ClaveEntidadFederativa"];
	        this.Subcontratacion = this.convertValues(source["Subcontratacion"], SubContratacionNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Nomina12 {
	    Version: string;
	    TipoNomina: string;
	    FechaPagoString: string;
	    // Go type: time
	    FechaPago: any;
	    FechaInicialPagoString: string;
	    // Go type: time
	    FechaInicialPago: any;
	    FechaFinalPagoString: string;
	    // Go type: time
	    FechaFinalPago: any;
	    NumeroDiasPagados: number;
	    TotalPercepciones?: number;
	    TotalDeducciones?: number;
	    TotalOtrosPagos?: number;
	    Emisor?: EmisorNomina12;
	    Receptor: ReceptorNomina12;
	    Percepciones?: PercepcionesNomina12;
	    Deducciones?: DeduccionesNomina12;
	    OtrosPagos?: OtroPagoNomina12[];
	    Incapacidades?: IncapacidadNomina12[];
	
	    static createFrom(source: any = {}) {
	        return new Nomina12(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoNomina = source["TipoNomina"];
	        this.FechaPagoString = source["FechaPagoString"];
	        this.FechaPago = this.convertValues(source["FechaPago"], null);
	        this.FechaInicialPagoString = source["FechaInicialPagoString"];
	        this.FechaInicialPago = this.convertValues(source["FechaInicialPago"], null);
	        this.FechaFinalPagoString = source["FechaFinalPagoString"];
	        this.FechaFinalPago = this.convertValues(source["FechaFinalPago"], null);
	        this.NumeroDiasPagados = source["NumeroDiasPagados"];
	        this.TotalPercepciones = source["TotalPercepciones"];
	        this.TotalDeducciones = source["TotalDeducciones"];
	        this.TotalOtrosPagos = source["TotalOtrosPagos"];
	        this.Emisor = this.convertValues(source["Emisor"], EmisorNomina12);
	        this.Receptor = this.convertValues(source["Receptor"], ReceptorNomina12);
	        this.Percepciones = this.convertValues(source["Percepciones"], PercepcionesNomina12);
	        this.Deducciones = this.convertValues(source["Deducciones"], DeduccionesNomina12);
	        this.OtrosPagos = this.convertValues(source["OtrosPagos"], OtroPagoNomina12);
	        this.Incapacidades = this.convertValues(source["Incapacidades"], IncapacidadNomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PercepcionNomina11 {
	    Tipo: number;
	    Clave: string;
	    Concepto: string;
	    ImporteGravado: number;
	    ImporteExento: number;
	
	    static createFrom(source: any = {}) {
	        return new PercepcionNomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Clave = source["Clave"];
	        this.Concepto = source["Concepto"];
	        this.ImporteGravado = source["ImporteGravado"];
	        this.ImporteExento = source["ImporteExento"];
	    }
	}
	export class PercepcionesNomina11 {
	    TotalGravado: number;
	    TotalExento: number;
	    Percepcion: PercepcionNomina11[];
	
	    static createFrom(source: any = {}) {
	        return new PercepcionesNomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalGravado = source["TotalGravado"];
	        this.TotalExento = source["TotalExento"];
	        this.Percepcion = this.convertValues(source["Percepcion"], PercepcionNomina11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Nomina11 {
	    Version: string;
	    RegistroPatronal?: string;
	    NoEmpleado: string;
	    Curp: string;
	    TipoRegimen: number;
	    NoSeguridadSocial?: string;
	    FechaPagoString: string;
	    // Go type: time
	    FechaPago: any;
	    FechaInicialPagoString: string;
	    // Go type: time
	    FechaInicialPago: any;
	    FechaFinalPagoString: string;
	    // Go type: time
	    FechaFinalPago: any;
	    NumerosDiasPagados: number;
	    Departamento?: string;
	    Clabe?: string;
	    Banco?: number;
	    FechaInicioRelLaboral?: string;
	    // Go type: time
	    FechaInicioRelacionLaboral?: any;
	    Antiguedad?: number;
	    Puesto?: string;
	    TipoContrato?: string;
	    TipoJornada?: string;
	    PeriodicidadPago: string;
	    SalarioBaseCotizacion?: number;
	    RiesgoPuesto?: number;
	    SalarioDiarioIntegrado?: number;
	    Percepciones?: PercepcionesNomina11;
	    Deducciones?: DeduccionesNomina11;
	    Incapacidades?: IncapacidadNomina11[];
	    HorasExtras?: HorasExtraNomina11[];
	
	    static createFrom(source: any = {}) {
	        return new Nomina11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.RegistroPatronal = source["RegistroPatronal"];
	        this.NoEmpleado = source["NoEmpleado"];
	        this.Curp = source["Curp"];
	        this.TipoRegimen = source["TipoRegimen"];
	        this.NoSeguridadSocial = source["NoSeguridadSocial"];
	        this.FechaPagoString = source["FechaPagoString"];
	        this.FechaPago = this.convertValues(source["FechaPago"], null);
	        this.FechaInicialPagoString = source["FechaInicialPagoString"];
	        this.FechaInicialPago = this.convertValues(source["FechaInicialPago"], null);
	        this.FechaFinalPagoString = source["FechaFinalPagoString"];
	        this.FechaFinalPago = this.convertValues(source["FechaFinalPago"], null);
	        this.NumerosDiasPagados = source["NumerosDiasPagados"];
	        this.Departamento = source["Departamento"];
	        this.Clabe = source["Clabe"];
	        this.Banco = source["Banco"];
	        this.FechaInicioRelLaboral = source["FechaInicioRelLaboral"];
	        this.FechaInicioRelacionLaboral = this.convertValues(source["FechaInicioRelacionLaboral"], null);
	        this.Antiguedad = source["Antiguedad"];
	        this.Puesto = source["Puesto"];
	        this.TipoContrato = source["TipoContrato"];
	        this.TipoJornada = source["TipoJornada"];
	        this.PeriodicidadPago = source["PeriodicidadPago"];
	        this.SalarioBaseCotizacion = source["SalarioBaseCotizacion"];
	        this.RiesgoPuesto = source["RiesgoPuesto"];
	        this.SalarioDiarioIntegrado = source["SalarioDiarioIntegrado"];
	        this.Percepciones = this.convertValues(source["Percepciones"], PercepcionesNomina11);
	        this.Deducciones = this.convertValues(source["Deducciones"], DeduccionesNomina11);
	        this.Incapacidades = this.convertValues(source["Incapacidades"], IncapacidadNomina11);
	        this.HorasExtras = this.convertValues(source["HorasExtras"], HorasExtraNomina11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Nomina {
	    Nomina11?: Nomina11[];
	    Nomina12?: Nomina12[];
	
	    static createFrom(source: any = {}) {
	        return new Nomina(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Nomina11 = this.convertValues(source["Nomina11"], Nomina11);
	        this.Nomina12 = this.convertValues(source["Nomina12"], Nomina12);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	
	
	

}

export namespace notariospublicos {
	
	export class DatosAdquirientesCopSCNotariosPub10 {
	    Nombre: string;
	    ApellidoPaterno?: string;
	    ApellidoMaterno?: string;
	    Rfc: string;
	    Curp?: string;
	    Porcentaje: number;
	
	    static createFrom(source: any = {}) {
	        return new DatosAdquirientesCopSCNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Nombre = source["Nombre"];
	        this.ApellidoPaterno = source["ApellidoPaterno"];
	        this.ApellidoMaterno = source["ApellidoMaterno"];
	        this.Rfc = source["Rfc"];
	        this.Curp = source["Curp"];
	        this.Porcentaje = source["Porcentaje"];
	    }
	}
	export class DatosUnAdquirienteNotariosPub10 {
	    Nombre: string;
	    ApellidoPaterno: string;
	    ApellidoMaterno: string;
	    Rfc: string;
	    Curp?: string;
	
	    static createFrom(source: any = {}) {
	        return new DatosUnAdquirienteNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Nombre = source["Nombre"];
	        this.ApellidoPaterno = source["ApellidoPaterno"];
	        this.ApellidoMaterno = source["ApellidoMaterno"];
	        this.Rfc = source["Rfc"];
	        this.Curp = source["Curp"];
	    }
	}
	export class DatosAdquirienteNotariosPub10 {
	    CoproSocConyugalE: string;
	    EsCopropiedadOSociedadConyugal: boolean;
	    DatosUnAdquiriente?: DatosUnAdquirienteNotariosPub10;
	    DatosAdquirientesCopropiedadOSociedadConyugal?: DatosAdquirientesCopSCNotariosPub10[];
	
	    static createFrom(source: any = {}) {
	        return new DatosAdquirienteNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CoproSocConyugalE = source["CoproSocConyugalE"];
	        this.EsCopropiedadOSociedadConyugal = source["EsCopropiedadOSociedadConyugal"];
	        this.DatosUnAdquiriente = this.convertValues(source["DatosUnAdquiriente"], DatosUnAdquirienteNotariosPub10);
	        this.DatosAdquirientesCopropiedadOSociedadConyugal = this.convertValues(source["DatosAdquirientesCopropiedadOSociedadConyugal"], DatosAdquirientesCopSCNotariosPub10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class DatosEnajenanteCopSCNotariosPub10 {
	    Nombre: string;
	    ApellidoPaterno?: string;
	    ApellidoMaterno?: string;
	    Rfc: string;
	    Curp?: string;
	    Porcentaje: number;
	
	    static createFrom(source: any = {}) {
	        return new DatosEnajenanteCopSCNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Nombre = source["Nombre"];
	        this.ApellidoPaterno = source["ApellidoPaterno"];
	        this.ApellidoMaterno = source["ApellidoMaterno"];
	        this.Rfc = source["Rfc"];
	        this.Curp = source["Curp"];
	        this.Porcentaje = source["Porcentaje"];
	    }
	}
	export class DatosUnEnajenanteNotariosPub10 {
	    Nombre: string;
	    ApellidoPaterno: string;
	    ApellidoMaterno: string;
	    Rfc: string;
	    Curp: string;
	
	    static createFrom(source: any = {}) {
	        return new DatosUnEnajenanteNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Nombre = source["Nombre"];
	        this.ApellidoPaterno = source["ApellidoPaterno"];
	        this.ApellidoMaterno = source["ApellidoMaterno"];
	        this.Rfc = source["Rfc"];
	        this.Curp = source["Curp"];
	    }
	}
	export class DatosEnajenanteNotariosPub10 {
	    CoproSocConyugalE: string;
	    EsCopropiedadOSociedadConyugal: boolean;
	    DatosUnEnajenante?: DatosUnEnajenanteNotariosPub10;
	    DatosEnajenantesCopropiedadOSociedadConyugal?: DatosEnajenanteCopSCNotariosPub10[];
	
	    static createFrom(source: any = {}) {
	        return new DatosEnajenanteNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.CoproSocConyugalE = source["CoproSocConyugalE"];
	        this.EsCopropiedadOSociedadConyugal = source["EsCopropiedadOSociedadConyugal"];
	        this.DatosUnEnajenante = this.convertValues(source["DatosUnEnajenante"], DatosUnEnajenanteNotariosPub10);
	        this.DatosEnajenantesCopropiedadOSociedadConyugal = this.convertValues(source["DatosEnajenantesCopropiedadOSociedadConyugal"], DatosEnajenanteCopSCNotariosPub10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DatosNotarioNotariosPub10 {
	    Curp: string;
	    NoNotaria: number;
	    EntidadFederativa: string;
	    Adscripcion?: string;
	
	    static createFrom(source: any = {}) {
	        return new DatosNotarioNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Curp = source["Curp"];
	        this.NoNotaria = source["NoNotaria"];
	        this.EntidadFederativa = source["EntidadFederativa"];
	        this.Adscripcion = source["Adscripcion"];
	    }
	}
	export class DatosOperacionNotariosPub10 {
	    NoInstrumentoNotarial: string;
	    FechaInstNotarial: string;
	    // Go type: time
	    FechaFirmaInstrumentoNotarial: any;
	    MontoOperacion: number;
	    Subtotal: number;
	    Iva: number;
	
	    static createFrom(source: any = {}) {
	        return new DatosOperacionNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NoInstrumentoNotarial = source["NoInstrumentoNotarial"];
	        this.FechaInstNotarial = source["FechaInstNotarial"];
	        this.FechaFirmaInstrumentoNotarial = this.convertValues(source["FechaFirmaInstrumentoNotarial"], null);
	        this.MontoOperacion = source["MontoOperacion"];
	        this.Subtotal = source["Subtotal"];
	        this.Iva = source["Iva"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	export class DescInmuebleNotariosPub10 {
	    Tipo: string;
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio: string;
	    Estado?: string;
	    Pais?: string;
	    CodigoPostal?: string;
	
	    static createFrom(source: any = {}) {
	        return new DescInmuebleNotariosPub10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Tipo = source["Tipo"];
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.Pais = source["Pais"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class NotariosPublicos10 {
	    Version: string;
	    DescripcionesInmuebles?: DescInmuebleNotariosPub10[];
	    DatosOperacion: DatosOperacionNotariosPub10;
	    DatosNotario: DatosNotarioNotariosPub10;
	    DatosEnajenante: DatosEnajenanteNotariosPub10;
	    DatosAdquiriente: DatosAdquirienteNotariosPub10;
	
	    static createFrom(source: any = {}) {
	        return new NotariosPublicos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.DescripcionesInmuebles = this.convertValues(source["DescripcionesInmuebles"], DescInmuebleNotariosPub10);
	        this.DatosOperacion = this.convertValues(source["DatosOperacion"], DatosOperacionNotariosPub10);
	        this.DatosNotario = this.convertValues(source["DatosNotario"], DatosNotarioNotariosPub10);
	        this.DatosEnajenante = this.convertValues(source["DatosEnajenante"], DatosEnajenanteNotariosPub10);
	        this.DatosAdquiriente = this.convertValues(source["DatosAdquiriente"], DatosAdquirienteNotariosPub10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class NotariosPublicos {
	    NotariosPublicos10?: NotariosPublicos10[];
	
	    static createFrom(source: any = {}) {
	        return new NotariosPublicos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.NotariosPublicos10 = this.convertValues(source["NotariosPublicos10"], NotariosPublicos10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace obrasantiguedades {
	
	export class ObrasAntiguedades10 {
	    Version: string;
	    TipoBien: string;
	    OtrosTipoBien?: string;
	    TituloAdquirido: string;
	    OtrosTitulosAdquiridos?: string;
	    Subtotal: number;
	    Iva: number;
	    FechaAdquisicionString: string;
	    // Go type: time
	    FechaAdquisicion: any;
	    CaracteristicasObraOPieza: string;
	
	    static createFrom(source: any = {}) {
	        return new ObrasAntiguedades10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoBien = source["TipoBien"];
	        this.OtrosTipoBien = source["OtrosTipoBien"];
	        this.TituloAdquirido = source["TituloAdquirido"];
	        this.OtrosTitulosAdquiridos = source["OtrosTitulosAdquiridos"];
	        this.Subtotal = source["Subtotal"];
	        this.Iva = source["Iva"];
	        this.FechaAdquisicionString = source["FechaAdquisicionString"];
	        this.FechaAdquisicion = this.convertValues(source["FechaAdquisicion"], null);
	        this.CaracteristicasObraOPieza = source["CaracteristicasObraOPieza"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ObrasAntiguedades {
	    ObrasAntiguedades10?: ObrasAntiguedades10[];
	
	    static createFrom(source: any = {}) {
	        return new ObrasAntiguedades(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ObrasAntiguedades10 = this.convertValues(source["ObrasAntiguedades10"], ObrasAntiguedades10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace pagoespecie {
	
	export class PagoEspecie10 {
	    Version: string;
	    ClavePadronInstitucionesCulturales: string;
	    FolioSolicitudDonacion: string;
	    NombrePiezaArte: string;
	    TecnicaProduccionPiezaArte: string;
	    AnioProduccionPiezaArte: string;
	    DimensionPiezaArte: string;
	
	    static createFrom(source: any = {}) {
	        return new PagoEspecie10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.ClavePadronInstitucionesCulturales = source["ClavePadronInstitucionesCulturales"];
	        this.FolioSolicitudDonacion = source["FolioSolicitudDonacion"];
	        this.NombrePiezaArte = source["NombrePiezaArte"];
	        this.TecnicaProduccionPiezaArte = source["TecnicaProduccionPiezaArte"];
	        this.AnioProduccionPiezaArte = source["AnioProduccionPiezaArte"];
	        this.DimensionPiezaArte = source["DimensionPiezaArte"];
	    }
	}
	export class PagoEnEspecie {
	    PagoEspecie10?: PagoEspecie10[];
	
	    static createFrom(source: any = {}) {
	        return new PagoEnEspecie(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PagoEspecie10 = this.convertValues(source["PagoEspecie10"], PagoEspecie10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace pagos {
	
	export class DoctoRelacionadoPagos10 {
	    IdDocumentoString: string;
	    IdDocumento: string;
	    Serie?: string;
	    Folio?: string;
	    Moneda: string;
	    TipoCambio?: number;
	    MetodoPago: string;
	    NoParcialidad?: number;
	    ImporteSaldoAnterior?: number;
	    ImportePagado?: number;
	    ImporteSaldoInsoluto?: number;
	
	    static createFrom(source: any = {}) {
	        return new DoctoRelacionadoPagos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.IdDocumentoString = source["IdDocumentoString"];
	        this.IdDocumento = source["IdDocumento"];
	        this.Serie = source["Serie"];
	        this.Folio = source["Folio"];
	        this.Moneda = source["Moneda"];
	        this.TipoCambio = source["TipoCambio"];
	        this.MetodoPago = source["MetodoPago"];
	        this.NoParcialidad = source["NoParcialidad"];
	        this.ImporteSaldoAnterior = source["ImporteSaldoAnterior"];
	        this.ImportePagado = source["ImportePagado"];
	        this.ImporteSaldoInsoluto = source["ImporteSaldoInsoluto"];
	    }
	}
	export class TrasladoDRPagos20 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota?: number;
	    Importe?: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoDRPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionDRPagos20 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionDRPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestosDRPagos20 {
	    Retenciones?: RetencionDRPagos20[];
	    Traslados?: TrasladoDRPagos20[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosDRPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionDRPagos20);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoDRPagos20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DoctoRelacionadoPagos20 {
	    IdDocumentoString: string;
	    IdDocumento: string;
	    Serie?: string;
	    Folio?: string;
	    Moneda: string;
	    Equivalencia?: number;
	    NoParcialidad: number;
	    ImporteSaldoAnterior: number;
	    ImportePagado: number;
	    ImporteSaldoInsoluto: number;
	    ObjetoImpuesto: string;
	    Impuestos?: ImpuestosDRPagos20;
	
	    static createFrom(source: any = {}) {
	        return new DoctoRelacionadoPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.IdDocumentoString = source["IdDocumentoString"];
	        this.IdDocumento = source["IdDocumento"];
	        this.Serie = source["Serie"];
	        this.Folio = source["Folio"];
	        this.Moneda = source["Moneda"];
	        this.Equivalencia = source["Equivalencia"];
	        this.NoParcialidad = source["NoParcialidad"];
	        this.ImporteSaldoAnterior = source["ImporteSaldoAnterior"];
	        this.ImportePagado = source["ImportePagado"];
	        this.ImporteSaldoInsoluto = source["ImporteSaldoInsoluto"];
	        this.ObjetoImpuesto = source["ObjetoImpuesto"];
	        this.Impuestos = this.convertValues(source["Impuestos"], ImpuestosDRPagos20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class TrasladoPagos10 {
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota: number;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoPagos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionPagos10 {
	    Impuesto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionPagos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestosPagos10 {
	    TotalImpuestosRetenidos?: number;
	    TotalImpuestosTrasladados?: number;
	    Retenciones?: RetencionPagos10[];
	    Traslados?: TrasladoPagos10[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosPagos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalImpuestosRetenidos = source["TotalImpuestosRetenidos"];
	        this.TotalImpuestosTrasladados = source["TotalImpuestosTrasladados"];
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionPagos10);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoPagos10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TrasladoPagos20 {
	    Base: number;
	    Impuesto: string;
	    TipoFactor: string;
	    TasaOCuota?: number;
	    Importe?: number;
	
	    static createFrom(source: any = {}) {
	        return new TrasladoPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Base = source["Base"];
	        this.Impuesto = source["Impuesto"];
	        this.TipoFactor = source["TipoFactor"];
	        this.TasaOCuota = source["TasaOCuota"];
	        this.Importe = source["Importe"];
	    }
	}
	export class RetencionPagos20 {
	    Impuesto: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new RetencionPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Impuesto = source["Impuesto"];
	        this.Importe = source["Importe"];
	    }
	}
	export class ImpuestosPagos20 {
	    Retenciones?: RetencionPagos20[];
	    Traslados?: TrasladoPagos20[];
	
	    static createFrom(source: any = {}) {
	        return new ImpuestosPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Retenciones = this.convertValues(source["Retenciones"], RetencionPagos20);
	        this.Traslados = this.convertValues(source["Traslados"], TrasladoPagos20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PagoPagos10 {
	    FechaPagoString: string;
	    // Go type: time
	    FechaPago: any;
	    FormaPago: string;
	    Moneda: string;
	    TipoCambio?: number;
	    Monto: number;
	    NoOperacion?: string;
	    RfcEmisorCuentaOrdenante?: string;
	    NombreBancoOrdenanteExtranjero?: string;
	    CuentaOrdenante?: string;
	    RfcEmisorCuentaBenBeneficiario?: string;
	    CuentaBeneficiario?: string;
	    TipoCadenaPago?: string;
	    CertificadoPago?: string;
	    CadenaPago?: string;
	    SelloPago?: string;
	    DocumentosRelacionados?: DoctoRelacionadoPagos10[];
	    Impuestos?: ImpuestosPagos10[];
	
	    static createFrom(source: any = {}) {
	        return new PagoPagos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FechaPagoString = source["FechaPagoString"];
	        this.FechaPago = this.convertValues(source["FechaPago"], null);
	        this.FormaPago = source["FormaPago"];
	        this.Moneda = source["Moneda"];
	        this.TipoCambio = source["TipoCambio"];
	        this.Monto = source["Monto"];
	        this.NoOperacion = source["NoOperacion"];
	        this.RfcEmisorCuentaOrdenante = source["RfcEmisorCuentaOrdenante"];
	        this.NombreBancoOrdenanteExtranjero = source["NombreBancoOrdenanteExtranjero"];
	        this.CuentaOrdenante = source["CuentaOrdenante"];
	        this.RfcEmisorCuentaBenBeneficiario = source["RfcEmisorCuentaBenBeneficiario"];
	        this.CuentaBeneficiario = source["CuentaBeneficiario"];
	        this.TipoCadenaPago = source["TipoCadenaPago"];
	        this.CertificadoPago = source["CertificadoPago"];
	        this.CadenaPago = source["CadenaPago"];
	        this.SelloPago = source["SelloPago"];
	        this.DocumentosRelacionados = this.convertValues(source["DocumentosRelacionados"], DoctoRelacionadoPagos10);
	        this.Impuestos = this.convertValues(source["Impuestos"], ImpuestosPagos10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class PagoPagos20 {
	    FechaPagoString: string;
	    // Go type: time
	    FechaPago: any;
	    FormaPago: string;
	    Moneda: string;
	    TipoCambio?: number;
	    Monto: number;
	    NoOperacion?: string;
	    RfcEmisorCuentaOrdenante?: string;
	    NombreBancoOrdenanteExtranjero?: string;
	    CuentaOrdenante?: string;
	    RfcEmisorCuentaBeneficiario?: string;
	    CuentaBeneficiario?: string;
	    TipoCadenaPago?: string;
	    CertificadoPago?: string;
	    CadenaPago?: string;
	    SelloPago?: string;
	    DocumentosRelacionados: DoctoRelacionadoPagos20[];
	    Impuestos?: ImpuestosPagos20;
	
	    static createFrom(source: any = {}) {
	        return new PagoPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.FechaPagoString = source["FechaPagoString"];
	        this.FechaPago = this.convertValues(source["FechaPago"], null);
	        this.FormaPago = source["FormaPago"];
	        this.Moneda = source["Moneda"];
	        this.TipoCambio = source["TipoCambio"];
	        this.Monto = source["Monto"];
	        this.NoOperacion = source["NoOperacion"];
	        this.RfcEmisorCuentaOrdenante = source["RfcEmisorCuentaOrdenante"];
	        this.NombreBancoOrdenanteExtranjero = source["NombreBancoOrdenanteExtranjero"];
	        this.CuentaOrdenante = source["CuentaOrdenante"];
	        this.RfcEmisorCuentaBeneficiario = source["RfcEmisorCuentaBeneficiario"];
	        this.CuentaBeneficiario = source["CuentaBeneficiario"];
	        this.TipoCadenaPago = source["TipoCadenaPago"];
	        this.CertificadoPago = source["CertificadoPago"];
	        this.CadenaPago = source["CadenaPago"];
	        this.SelloPago = source["SelloPago"];
	        this.DocumentosRelacionados = this.convertValues(source["DocumentosRelacionados"], DoctoRelacionadoPagos20);
	        this.Impuestos = this.convertValues(source["Impuestos"], ImpuestosPagos20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TotalesPagos20 {
	    TotalRetencionesIva?: number;
	    TotalRetencionesIsr?: number;
	    TotalRetencionesIeps?: number;
	    TotalTrasladosBaseIva16?: number;
	    TotalTrasladosImpuestoIva16?: number;
	    TotalTrasladosBaseIva8?: number;
	    TotalTrasladosImpuestoIva8?: number;
	    TotalTrasladosBaseIva0?: number;
	    TotalTrasladosImpuestoIva0?: number;
	    TotalTrasladosBaseIvaExento?: number;
	    MontoTotalPagos: number;
	
	    static createFrom(source: any = {}) {
	        return new TotalesPagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TotalRetencionesIva = source["TotalRetencionesIva"];
	        this.TotalRetencionesIsr = source["TotalRetencionesIsr"];
	        this.TotalRetencionesIeps = source["TotalRetencionesIeps"];
	        this.TotalTrasladosBaseIva16 = source["TotalTrasladosBaseIva16"];
	        this.TotalTrasladosImpuestoIva16 = source["TotalTrasladosImpuestoIva16"];
	        this.TotalTrasladosBaseIva8 = source["TotalTrasladosBaseIva8"];
	        this.TotalTrasladosImpuestoIva8 = source["TotalTrasladosImpuestoIva8"];
	        this.TotalTrasladosBaseIva0 = source["TotalTrasladosBaseIva0"];
	        this.TotalTrasladosImpuestoIva0 = source["TotalTrasladosImpuestoIva0"];
	        this.TotalTrasladosBaseIvaExento = source["TotalTrasladosBaseIvaExento"];
	        this.MontoTotalPagos = source["MontoTotalPagos"];
	    }
	}
	export class Pagos20 {
	    Version: string;
	    Totales: TotalesPagos20;
	    Pago: PagoPagos20[];
	
	    static createFrom(source: any = {}) {
	        return new Pagos20(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Totales = this.convertValues(source["Totales"], TotalesPagos20);
	        this.Pago = this.convertValues(source["Pago"], PagoPagos20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Pagos10 {
	    Version: string;
	    Pago: PagoPagos10[];
	
	    static createFrom(source: any = {}) {
	        return new Pagos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Pago = this.convertValues(source["Pago"], PagoPagos10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Pagos {
	    Pagos10?: Pagos10[];
	    Pagos20?: Pagos20[];
	
	    static createFrom(source: any = {}) {
	        return new Pagos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Pagos10 = this.convertValues(source["Pagos10"], Pagos10);
	        this.Pagos20 = this.convertValues(source["Pagos20"], Pagos20);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	
	
	

}

export namespace parcialesconstruccion {
	
	export class Inmueble {
	    Calle: string;
	    NoExterior?: string;
	    NoInterior?: string;
	    Colonia?: string;
	    Localidad?: string;
	    Referencia?: string;
	    Municipio: string;
	    Estado: string;
	    CodigoPostal: string;
	
	    static createFrom(source: any = {}) {
	        return new Inmueble(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Calle = source["Calle"];
	        this.NoExterior = source["NoExterior"];
	        this.NoInterior = source["NoInterior"];
	        this.Colonia = source["Colonia"];
	        this.Localidad = source["Localidad"];
	        this.Referencia = source["Referencia"];
	        this.Municipio = source["Municipio"];
	        this.Estado = source["Estado"];
	        this.CodigoPostal = source["CodigoPostal"];
	    }
	}
	export class ParcialesConstruccion10 {
	    Version: string;
	    NoPermisoLicenciaOAutorizacion: string;
	    Inmueble: Inmueble;
	
	    static createFrom(source: any = {}) {
	        return new ParcialesConstruccion10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.NoPermisoLicenciaOAutorizacion = source["NoPermisoLicenciaOAutorizacion"];
	        this.Inmueble = this.convertValues(source["Inmueble"], Inmueble);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ParcialesConstruccion {
	    ParcialesConstruccion10?: ParcialesConstruccion10[];
	
	    static createFrom(source: any = {}) {
	        return new ParcialesConstruccion(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ParcialesConstruccion10 = this.convertValues(source["ParcialesConstruccion10"], ParcialesConstruccion10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace pfintegrantecoordinado {
	
	export class PFIntegranteCoordinado10 {
	    Version: string;
	    ClaveVehicular: string;
	    Placa: string;
	    Rfc: string;
	
	    static createFrom(source: any = {}) {
	        return new PFIntegranteCoordinado10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.ClaveVehicular = source["ClaveVehicular"];
	        this.Placa = source["Placa"];
	        this.Rfc = source["Rfc"];
	    }
	}
	export class PFIntegranteCoordinado {
	    PFIntegranteCoordinado10?: PFIntegranteCoordinado10[];
	
	    static createFrom(source: any = {}) {
	        return new PFIntegranteCoordinado(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.PFIntegranteCoordinado10 = this.convertValues(source["PFIntegranteCoordinado10"], PFIntegranteCoordinado10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace renovacionsustitucion {
	
	export class VehiculosNuevos {
	    Anio: string;
	    Modelo?: string;
	    NoPlacas: string;
	    Rfc?: string;
	
	    static createFrom(source: any = {}) {
	        return new VehiculosNuevos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Anio = source["Anio"];
	        this.Modelo = source["Modelo"];
	        this.NoPlacas = source["NoPlacas"];
	        this.Rfc = source["Rfc"];
	    }
	}
	export class VehiculosUsados {
	    Precio: number;
	    Tipo: string;
	    Marca: string;
	    TipoOClase: string;
	    Anio: string;
	    Modelo?: string;
	    NoIdentificacionVehicular?: string;
	    NoSerie?: string;
	    NoPlacas: string;
	    NoMotor?: string;
	    NoFolioTarjetaCirculacion: string;
	    NumeroPedimentoImportacion?: string;
	    Aduana?: string;
	    FechaRegulVeh?: string;
	    // Go type: time
	    FechaRegulacionImportacion?: any;
	    FolioFiscal: string;
	
	    static createFrom(source: any = {}) {
	        return new VehiculosUsados(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Precio = source["Precio"];
	        this.Tipo = source["Tipo"];
	        this.Marca = source["Marca"];
	        this.TipoOClase = source["TipoOClase"];
	        this.Anio = source["Anio"];
	        this.Modelo = source["Modelo"];
	        this.NoIdentificacionVehicular = source["NoIdentificacionVehicular"];
	        this.NoSerie = source["NoSerie"];
	        this.NoPlacas = source["NoPlacas"];
	        this.NoMotor = source["NoMotor"];
	        this.NoFolioTarjetaCirculacion = source["NoFolioTarjetaCirculacion"];
	        this.NumeroPedimentoImportacion = source["NumeroPedimentoImportacion"];
	        this.Aduana = source["Aduana"];
	        this.FechaRegulVeh = source["FechaRegulVeh"];
	        this.FechaRegulacionImportacion = this.convertValues(source["FechaRegulacionImportacion"], null);
	        this.FolioFiscal = source["FolioFiscal"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DecretoRenovacion {
	    VehiculoEnajenado: string;
	    VehiculosUsados: VehiculosUsados[];
	    VehiculosNuevos: VehiculosNuevos[];
	
	    static createFrom(source: any = {}) {
	        return new DecretoRenovacion(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.VehiculoEnajenado = source["VehiculoEnajenado"];
	        this.VehiculosUsados = this.convertValues(source["VehiculosUsados"], VehiculosUsados);
	        this.VehiculosNuevos = this.convertValues(source["VehiculosNuevos"], VehiculosNuevos);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class DecretoSustitucion {
	    VehiculoEnajenado: string;
	    VehiculosUsados: VehiculosUsados[];
	    VehiculosNuevos: VehiculosNuevos[];
	
	    static createFrom(source: any = {}) {
	        return new DecretoSustitucion(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.VehiculoEnajenado = source["VehiculoEnajenado"];
	        this.VehiculosUsados = this.convertValues(source["VehiculosUsados"], VehiculosUsados);
	        this.VehiculosNuevos = this.convertValues(source["VehiculosNuevos"], VehiculosNuevos);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RenovacionSustitucion10 {
	    Version: string;
	    TipoDecreto: string;
	    DecretoRenovacion?: DecretoRenovacion;
	    DecretoSustitucion?: DecretoSustitucion;
	
	    static createFrom(source: any = {}) {
	        return new RenovacionSustitucion10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoDecreto = source["TipoDecreto"];
	        this.DecretoRenovacion = this.convertValues(source["DecretoRenovacion"], DecretoRenovacion);
	        this.DecretoSustitucion = this.convertValues(source["DecretoSustitucion"], DecretoSustitucion);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class RenovacionSustitucion {
	    RenovacionSustitucion10?: RenovacionSustitucion10[];
	
	    static createFrom(source: any = {}) {
	        return new RenovacionSustitucion(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.RenovacionSustitucion10 = this.convertValues(source["RenovacionSustitucion10"], RenovacionSustitucion10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	

}

export namespace timbrefiscaldigital {
	
	export class TimbreFiscalDigital10 {
	    Version: string;
	    Uuid: string;
	    Fecha: string;
	    // Go type: time
	    FechaTimbrado: any;
	    SelloCfd: string;
	    NoCertificadoSat: string;
	    SelloSat: string;
	
	    static createFrom(source: any = {}) {
	        return new TimbreFiscalDigital10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Uuid = source["Uuid"];
	        this.Fecha = source["Fecha"];
	        this.FechaTimbrado = this.convertValues(source["FechaTimbrado"], null);
	        this.SelloCfd = source["SelloCfd"];
	        this.NoCertificadoSat = source["NoCertificadoSat"];
	        this.SelloSat = source["SelloSat"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TimbreFiscalDigital11 {
	    Version: string;
	    Uuid: string;
	    Fecha: string;
	    // Go type: time
	    FechaTimbrado: any;
	    RfcProvCertif: string;
	    Leyenda?: string;
	    SelloCfd: string;
	    NoCertificadoSat: string;
	    SelloSat: string;
	
	    static createFrom(source: any = {}) {
	        return new TimbreFiscalDigital11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.Uuid = source["Uuid"];
	        this.Fecha = source["Fecha"];
	        this.FechaTimbrado = this.convertValues(source["FechaTimbrado"], null);
	        this.RfcProvCertif = source["RfcProvCertif"];
	        this.Leyenda = source["Leyenda"];
	        this.SelloCfd = source["SelloCfd"];
	        this.NoCertificadoSat = source["NoCertificadoSat"];
	        this.SelloSat = source["SelloSat"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TimbreFiscalDigital {
	    TimbreFiscalDigital11?: TimbreFiscalDigital11;
	    TimbreFiscalDigital10?: TimbreFiscalDigital10;
	
	    static createFrom(source: any = {}) {
	        return new TimbreFiscalDigital(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TimbreFiscalDigital11 = this.convertValues(source["TimbreFiscalDigital11"], TimbreFiscalDigital11);
	        this.TimbreFiscalDigital10 = this.convertValues(source["TimbreFiscalDigital10"], TimbreFiscalDigital10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	

}

export namespace turistapasajeroextranjero {
	
	export class DatosTransito {
	    Via: string;
	    TipoId: string;
	    NumeroId: string;
	    Nacionalidad: string;
	    EmpresaTransporte: string;
	    IdTransporte?: string;
	
	    static createFrom(source: any = {}) {
	        return new DatosTransito(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Via = source["Via"];
	        this.TipoId = source["TipoId"];
	        this.NumeroId = source["NumeroId"];
	        this.Nacionalidad = source["Nacionalidad"];
	        this.EmpresaTransporte = source["EmpresaTransporte"];
	        this.IdTransporte = source["IdTransporte"];
	    }
	}
	export class TuristaPasajeroExtranjero10 {
	    Version: string;
	    FechaTransitoString: string;
	    // Go type: time
	    FechaTransito: any;
	    TipoTransito: string;
	    DatosTransito: DatosTransito;
	
	    static createFrom(source: any = {}) {
	        return new TuristaPasajeroExtranjero10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.FechaTransitoString = source["FechaTransitoString"];
	        this.FechaTransito = this.convertValues(source["FechaTransito"], null);
	        this.TipoTransito = source["TipoTransito"];
	        this.DatosTransito = this.convertValues(source["DatosTransito"], DatosTransito);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class TuristaPasajeroExtranjero {
	    TuristaPasajeroExtranjero10?: TuristaPasajeroExtranjero10[];
	
	    static createFrom(source: any = {}) {
	        return new TuristaPasajeroExtranjero(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.TuristaPasajeroExtranjero10 = this.convertValues(source["TuristaPasajeroExtranjero10"], TuristaPasajeroExtranjero10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace valesdespensa {
	
	export class Conceptos {
	    Identificador: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Rfc: string;
	    Curp: string;
	    Nombre: string;
	    NoSeguridadSocial?: string;
	    Importe: number;
	
	    static createFrom(source: any = {}) {
	        return new Conceptos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Identificador = source["Identificador"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Rfc = source["Rfc"];
	        this.Curp = source["Curp"];
	        this.Nombre = source["Nombre"];
	        this.NoSeguridadSocial = source["NoSeguridadSocial"];
	        this.Importe = source["Importe"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ValesDespensa10 {
	    Version: string;
	    TipoOperacion: string;
	    RegistroPatronal?: string;
	    NoCuenta: string;
	    Total: number;
	    Conceptos: Conceptos[];
	
	    static createFrom(source: any = {}) {
	        return new ValesDespensa10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.TipoOperacion = source["TipoOperacion"];
	        this.RegistroPatronal = source["RegistroPatronal"];
	        this.NoCuenta = source["NoCuenta"];
	        this.Total = source["Total"];
	        this.Conceptos = this.convertValues(source["Conceptos"], Conceptos);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ValesDespensa {
	    ValesDespensa10?: ValesDespensa10[];
	
	    static createFrom(source: any = {}) {
	        return new ValesDespensa(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ValesDespensa10 = this.convertValues(source["ValesDespensa10"], ValesDespensa10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace vehiculousado {
	
	export class InformacionAduanera {
	    Numero: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Aduana?: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduanera(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Aduana = source["Aduana"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VehiculoUsado10 {
	    Version: string;
	    MontoAdquisicion: number;
	    MontoEnajenacion: number;
	    ClaveVehicular: string;
	    Marca: string;
	    Tipo: string;
	    Modelo: string;
	    NoMotor?: string;
	    NoSerie?: string;
	    NoIdentificacionVehicular?: string;
	    Valor: number;
	    InformacionAduanera?: InformacionAduanera[];
	
	    static createFrom(source: any = {}) {
	        return new VehiculoUsado10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.MontoAdquisicion = source["MontoAdquisicion"];
	        this.MontoEnajenacion = source["MontoEnajenacion"];
	        this.ClaveVehicular = source["ClaveVehicular"];
	        this.Marca = source["Marca"];
	        this.Tipo = source["Tipo"];
	        this.Modelo = source["Modelo"];
	        this.NoMotor = source["NoMotor"];
	        this.NoSerie = source["NoSerie"];
	        this.NoIdentificacionVehicular = source["NoIdentificacionVehicular"];
	        this.Valor = source["Valor"];
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduanera);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VehiculoUsado {
	    VehiculoUsado10?: VehiculoUsado10[];
	
	    static createFrom(source: any = {}) {
	        return new VehiculoUsado(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.VehiculoUsado10 = this.convertValues(source["VehiculoUsado10"], VehiculoUsado10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace ventavehiculos {
	
	export class InformacionAduaneraVentVehi10 {
	    Numero: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Aduana?: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduaneraVentVehi10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Aduana = source["Aduana"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class InformacionAduaneraVentVehi11 {
	    Numero: string;
	    FechaString: string;
	    // Go type: time
	    Fecha: any;
	    Aduana?: string;
	
	    static createFrom(source: any = {}) {
	        return new InformacionAduaneraVentVehi11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Numero = source["Numero"];
	        this.FechaString = source["FechaString"];
	        this.Fecha = this.convertValues(source["Fecha"], null);
	        this.Aduana = source["Aduana"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ParteVentVehi10 {
	    InformacionAduanera?: InformacionAduaneraVentVehi10[];
	    Cantidad: string;
	    Unidad?: string;
	    NoIdentificacion?: string;
	    Descripcion: string;
	    ValorUnitario?: string;
	    Importe?: string;
	
	    static createFrom(source: any = {}) {
	        return new ParteVentVehi10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduaneraVentVehi10);
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ParteVentVehi11 {
	    InformacionAduanera?: InformacionAduaneraVentVehi11[];
	    Cantidad: string;
	    Unidad?: string;
	    NoIdentificacion?: string;
	    Descripcion: string;
	    ValorUnitario?: string;
	    Importe?: string;
	
	    static createFrom(source: any = {}) {
	        return new ParteVentVehi11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.InformacionAduanera = this.convertValues(source["InformacionAduanera"], InformacionAduaneraVentVehi11);
	        this.Cantidad = source["Cantidad"];
	        this.Unidad = source["Unidad"];
	        this.NoIdentificacion = source["NoIdentificacion"];
	        this.Descripcion = source["Descripcion"];
	        this.ValorUnitario = source["ValorUnitario"];
	        this.Importe = source["Importe"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VentaVehiculos11 {
	    Version: string;
	    ClaveVehicular: string;
	    Niv: string;
	    Parte?: ParteVentVehi11[];
	
	    static createFrom(source: any = {}) {
	        return new VentaVehiculos11(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.ClaveVehicular = source["ClaveVehicular"];
	        this.Niv = source["Niv"];
	        this.Parte = this.convertValues(source["Parte"], ParteVentVehi11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VentaVehiculos10 {
	    Version: string;
	    ClaveVehicular: string;
	    Parte?: ParteVentVehi10[];
	
	    static createFrom(source: any = {}) {
	        return new VentaVehiculos10(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Version = source["Version"];
	        this.ClaveVehicular = source["ClaveVehicular"];
	        this.Parte = this.convertValues(source["Parte"], ParteVentVehi10);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VentaVehiculos {
	    VentaVehiculos10?: VentaVehiculos10[];
	    VentaVehiculos11?: VentaVehiculos11[];
	
	    static createFrom(source: any = {}) {
	        return new VentaVehiculos(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.VentaVehiculos10 = this.convertValues(source["VentaVehiculos10"], VentaVehiculos10);
	        this.VentaVehiculos11 = this.convertValues(source["VentaVehiculos11"], VentaVehiculos11);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	

}

