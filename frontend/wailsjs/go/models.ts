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

export namespace services {
	
	export class SampleFile {
	    id: string;
	    fileType: string;
	    sizeInText: string;
	    sizeInBytes: number;
	    downloadUrl: string;
	    downloaded: number;
	    downloadProgress: number;
	    state: string;
	    error?: string;
	
	    static createFrom(source: any = {}) {
	        return new SampleFile(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.fileType = source["fileType"];
	        this.sizeInText = source["sizeInText"];
	        this.sizeInBytes = source["sizeInBytes"];
	        this.downloadUrl = source["downloadUrl"];
	        this.downloaded = source["downloaded"];
	        this.downloadProgress = source["downloadProgress"];
	        this.state = source["state"];
	        this.error = source["error"];
	    }
	}

}

