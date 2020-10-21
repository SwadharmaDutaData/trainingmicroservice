import * as $protobuf from "protobufjs";
/** Namespace product. */
export namespace product {

    /** Namespace grpc. */
    namespace grpc {

        /** Represents a LbService */
        class LbService extends $protobuf.rpc.Service {

            /**
             * Constructs a new LbService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new LbService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): LbService;

            /**
             * Calls ResponseFromServer.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Value
             */
            public responseFromServer(request: google.protobuf.IEmpty, callback: product.grpc.LbService.ResponseFromServerCallback): void;

            /**
             * Calls ResponseFromServer.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public responseFromServer(request: google.protobuf.IEmpty): Promise<google.protobuf.Value>;
        }

        namespace LbService {

            /**
             * Callback as used by {@link product.grpc.LbService#responseFromServer}.
             * @param error Error, if any
             * @param [response] Value
             */
            type ResponseFromServerCallback = (error: (Error|null), response?: google.protobuf.Value) => void;
        }

        /** Represents a ProductService */
        class ProductService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ProductService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ProductService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ProductService;

            /**
             * Calls GetAllProduct.
             * @param request Param message or plain object
             * @param callback Node-style callback called with the error, if any, and ProductsOrError
             */
            public getAllProduct(request: product.protobuf.CProduct.IParam, callback: product.grpc.ProductService.GetAllProductCallback): void;

            /**
             * Calls GetAllProduct.
             * @param request Param message or plain object
             * @returns Promise
             */
            public getAllProduct(request: product.protobuf.CProduct.IParam): Promise<product.protobuf.CProduct.ProductsOrError>;

            /**
             * Calls SaveProduct.
             * @param request Product message or plain object
             * @param callback Node-style callback called with the error, if any, and ProductOrError
             */
            public saveProduct(request: product.protobuf.CProduct.IProduct, callback: product.grpc.ProductService.SaveProductCallback): void;

            /**
             * Calls SaveProduct.
             * @param request Product message or plain object
             * @returns Promise
             */
            public saveProduct(request: product.protobuf.CProduct.IProduct): Promise<product.protobuf.CProduct.ProductOrError>;

            /**
             * Calls GetProductInfo.
             * @param request Product message or plain object
             * @param callback Node-style callback called with the error, if any, and ProductOrError
             */
            public getProductInfo(request: product.protobuf.CProduct.IProduct, callback: product.grpc.ProductService.GetProductInfoCallback): void;

            /**
             * Calls GetProductInfo.
             * @param request Product message or plain object
             * @returns Promise
             */
            public getProductInfo(request: product.protobuf.CProduct.IProduct): Promise<product.protobuf.CProduct.ProductOrError>;
        }

        namespace ProductService {

            /**
             * Callback as used by {@link product.grpc.ProductService#getAllProduct}.
             * @param error Error, if any
             * @param [response] ProductsOrError
             */
            type GetAllProductCallback = (error: (Error|null), response?: product.protobuf.CProduct.ProductsOrError) => void;

            /**
             * Callback as used by {@link product.grpc.ProductService#saveProduct}.
             * @param error Error, if any
             * @param [response] ProductOrError
             */
            type SaveProductCallback = (error: (Error|null), response?: product.protobuf.CProduct.ProductOrError) => void;

            /**
             * Callback as used by {@link product.grpc.ProductService#getProductInfo}.
             * @param error Error, if any
             * @param [response] ProductOrError
             */
            type GetProductInfoCallback = (error: (Error|null), response?: product.protobuf.CProduct.ProductOrError) => void;
        }

        /** Represents a StockService */
        class StockService extends $protobuf.rpc.Service {

            /**
             * Constructs a new StockService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new StockService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): StockService;

            /**
             * Calls GetOutOfStockEstimation.
             * @param request Product message or plain object
             * @param callback Node-style callback called with the error, if any, and TimestampOrError
             */
            public getOutOfStockEstimation(request: product.protobuf.CProduct.IProduct, callback: product.grpc.StockService.GetOutOfStockEstimationCallback): void;

            /**
             * Calls GetOutOfStockEstimation.
             * @param request Product message or plain object
             * @returns Promise
             */
            public getOutOfStockEstimation(request: product.protobuf.CProduct.IProduct): Promise<product.protobuf.CStock.TimestampOrError>;

            /**
             * Calls SaveStock.
             * @param request Stock message or plain object
             * @param callback Node-style callback called with the error, if any, and StockOrError
             */
            public saveStock(request: product.protobuf.CStock.IStock, callback: product.grpc.StockService.SaveStockCallback): void;

            /**
             * Calls SaveStock.
             * @param request Stock message or plain object
             * @returns Promise
             */
            public saveStock(request: product.protobuf.CStock.IStock): Promise<product.protobuf.CStock.StockOrError>;

            /**
             * Calls GetStockOf.
             * @param request Product message or plain object
             * @param callback Node-style callback called with the error, if any, and StockOrError
             */
            public getStockOf(request: product.protobuf.CProduct.IProduct, callback: product.grpc.StockService.GetStockOfCallback): void;

            /**
             * Calls GetStockOf.
             * @param request Product message or plain object
             * @returns Promise
             */
            public getStockOf(request: product.protobuf.CProduct.IProduct): Promise<product.protobuf.CStock.StockOrError>;
        }

        namespace StockService {

            /**
             * Callback as used by {@link product.grpc.StockService#getOutOfStockEstimation}.
             * @param error Error, if any
             * @param [response] TimestampOrError
             */
            type GetOutOfStockEstimationCallback = (error: (Error|null), response?: product.protobuf.CStock.TimestampOrError) => void;

            /**
             * Callback as used by {@link product.grpc.StockService#saveStock}.
             * @param error Error, if any
             * @param [response] StockOrError
             */
            type SaveStockCallback = (error: (Error|null), response?: product.protobuf.CStock.StockOrError) => void;

            /**
             * Callback as used by {@link product.grpc.StockService#getStockOf}.
             * @param error Error, if any
             * @param [response] StockOrError
             */
            type GetStockOfCallback = (error: (Error|null), response?: product.protobuf.CStock.StockOrError) => void;
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a CProduct. */
        interface ICProduct {
        }

        /** Represents a CProduct. */
        class CProduct implements ICProduct {

            /**
             * Constructs a new CProduct.
             * @param [properties] Properties to set
             */
            constructor(properties?: product.protobuf.ICProduct);

            /**
             * Creates a new CProduct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CProduct instance
             */
            public static create(properties?: product.protobuf.ICProduct): product.protobuf.CProduct;

            /**
             * Encodes the specified CProduct message. Does not implicitly {@link product.protobuf.CProduct.verify|verify} messages.
             * @param message CProduct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: product.protobuf.ICProduct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CProduct message, length delimited. Does not implicitly {@link product.protobuf.CProduct.verify|verify} messages.
             * @param message CProduct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: product.protobuf.ICProduct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CProduct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CProduct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct;

            /**
             * Decodes a CProduct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CProduct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct;

            /**
             * Verifies a CProduct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CProduct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CProduct
             */
            public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct;

            /**
             * Creates a plain object from a CProduct message. Also converts values to other types if specified.
             * @param message CProduct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: product.protobuf.CProduct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CProduct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CProduct {

            /** Properties of a Param. */
            interface IParam {

                /** Param page */
                page?: (number|null);

                /** Param recordsPerPage */
                recordsPerPage?: (number|null);

                /** Param sortBy */
                sortBy?: (google.protobuf.IValue|null);
            }

            /** Represents a Param. */
            class Param implements IParam {

                /**
                 * Constructs a new Param.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CProduct.IParam);

                /** Param page. */
                public page: number;

                /** Param recordsPerPage. */
                public recordsPerPage: number;

                /** Param sortBy. */
                public sortBy?: (google.protobuf.IValue|null);

                /**
                 * Creates a new Param instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Param instance
                 */
                public static create(properties?: product.protobuf.CProduct.IParam): product.protobuf.CProduct.Param;

                /**
                 * Encodes the specified Param message. Does not implicitly {@link product.protobuf.CProduct.Param.verify|verify} messages.
                 * @param message Param message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CProduct.IParam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Param message, length delimited. Does not implicitly {@link product.protobuf.CProduct.Param.verify|verify} messages.
                 * @param message Param message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CProduct.IParam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Param message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Param
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct.Param;

                /**
                 * Decodes a Param message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Param
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct.Param;

                /**
                 * Verifies a Param message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Param message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Param
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct.Param;

                /**
                 * Creates a plain object from a Param message. Also converts values to other types if specified.
                 * @param message Param
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CProduct.Param, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Param to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ProductsOrError. */
            interface IProductsOrError {

                /** ProductsOrError error */
                error?: (google.protobuf.IValue|null);

                /** ProductsOrError batch */
                batch?: (product.protobuf.CProduct.IProducts|null);
            }

            /** Represents a ProductsOrError. */
            class ProductsOrError implements IProductsOrError {

                /**
                 * Constructs a new ProductsOrError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CProduct.IProductsOrError);

                /** ProductsOrError error. */
                public error?: (google.protobuf.IValue|null);

                /** ProductsOrError batch. */
                public batch?: (product.protobuf.CProduct.IProducts|null);

                /** ProductsOrError kind. */
                public kind?: ("error"|"batch");

                /**
                 * Creates a new ProductsOrError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductsOrError instance
                 */
                public static create(properties?: product.protobuf.CProduct.IProductsOrError): product.protobuf.CProduct.ProductsOrError;

                /**
                 * Encodes the specified ProductsOrError message. Does not implicitly {@link product.protobuf.CProduct.ProductsOrError.verify|verify} messages.
                 * @param message ProductsOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CProduct.IProductsOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductsOrError message, length delimited. Does not implicitly {@link product.protobuf.CProduct.ProductsOrError.verify|verify} messages.
                 * @param message ProductsOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CProduct.IProductsOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductsOrError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductsOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct.ProductsOrError;

                /**
                 * Decodes a ProductsOrError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductsOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct.ProductsOrError;

                /**
                 * Verifies a ProductsOrError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductsOrError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductsOrError
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct.ProductsOrError;

                /**
                 * Creates a plain object from a ProductsOrError message. Also converts values to other types if specified.
                 * @param message ProductsOrError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CProduct.ProductsOrError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductsOrError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ProductOrError. */
            interface IProductOrError {

                /** ProductOrError error */
                error?: (google.protobuf.IValue|null);

                /** ProductOrError product */
                product?: (product.protobuf.CProduct.IProduct|null);
            }

            /** Represents a ProductOrError. */
            class ProductOrError implements IProductOrError {

                /**
                 * Constructs a new ProductOrError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CProduct.IProductOrError);

                /** ProductOrError error. */
                public error?: (google.protobuf.IValue|null);

                /** ProductOrError product. */
                public product?: (product.protobuf.CProduct.IProduct|null);

                /** ProductOrError type. */
                public type?: ("error"|"product");

                /**
                 * Creates a new ProductOrError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ProductOrError instance
                 */
                public static create(properties?: product.protobuf.CProduct.IProductOrError): product.protobuf.CProduct.ProductOrError;

                /**
                 * Encodes the specified ProductOrError message. Does not implicitly {@link product.protobuf.CProduct.ProductOrError.verify|verify} messages.
                 * @param message ProductOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CProduct.IProductOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ProductOrError message, length delimited. Does not implicitly {@link product.protobuf.CProduct.ProductOrError.verify|verify} messages.
                 * @param message ProductOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CProduct.IProductOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ProductOrError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ProductOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct.ProductOrError;

                /**
                 * Decodes a ProductOrError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ProductOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct.ProductOrError;

                /**
                 * Verifies a ProductOrError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ProductOrError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ProductOrError
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct.ProductOrError;

                /**
                 * Creates a plain object from a ProductOrError message. Also converts values to other types if specified.
                 * @param message ProductOrError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CProduct.ProductOrError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ProductOrError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EmptyOrError. */
            interface IEmptyOrError {

                /** EmptyOrError error */
                error?: (google.protobuf.IValue|null);
            }

            /** Represents an EmptyOrError. */
            class EmptyOrError implements IEmptyOrError {

                /**
                 * Constructs a new EmptyOrError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CProduct.IEmptyOrError);

                /** EmptyOrError error. */
                public error?: (google.protobuf.IValue|null);

                /** EmptyOrError type. */
                public type?: "error";

                /**
                 * Creates a new EmptyOrError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EmptyOrError instance
                 */
                public static create(properties?: product.protobuf.CProduct.IEmptyOrError): product.protobuf.CProduct.EmptyOrError;

                /**
                 * Encodes the specified EmptyOrError message. Does not implicitly {@link product.protobuf.CProduct.EmptyOrError.verify|verify} messages.
                 * @param message EmptyOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CProduct.IEmptyOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EmptyOrError message, length delimited. Does not implicitly {@link product.protobuf.CProduct.EmptyOrError.verify|verify} messages.
                 * @param message EmptyOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CProduct.IEmptyOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct.EmptyOrError;

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct.EmptyOrError;

                /**
                 * Verifies an EmptyOrError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EmptyOrError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EmptyOrError
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct.EmptyOrError;

                /**
                 * Creates a plain object from an EmptyOrError message. Also converts values to other types if specified.
                 * @param message EmptyOrError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CProduct.EmptyOrError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EmptyOrError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Products. */
            interface IProducts {

                /** Products record */
                record?: (product.protobuf.CProduct.IProduct[]|null);
            }

            /** Represents a Products. */
            class Products implements IProducts {

                /**
                 * Constructs a new Products.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CProduct.IProducts);

                /** Products record. */
                public record: product.protobuf.CProduct.IProduct[];

                /**
                 * Creates a new Products instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Products instance
                 */
                public static create(properties?: product.protobuf.CProduct.IProducts): product.protobuf.CProduct.Products;

                /**
                 * Encodes the specified Products message. Does not implicitly {@link product.protobuf.CProduct.Products.verify|verify} messages.
                 * @param message Products message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CProduct.IProducts, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Products message, length delimited. Does not implicitly {@link product.protobuf.CProduct.Products.verify|verify} messages.
                 * @param message Products message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CProduct.IProducts, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Products message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Products
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct.Products;

                /**
                 * Decodes a Products message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Products
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct.Products;

                /**
                 * Verifies a Products message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Products message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Products
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct.Products;

                /**
                 * Creates a plain object from a Products message. Also converts values to other types if specified.
                 * @param message Products
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CProduct.Products, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Products to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Product. */
            interface IProduct {

                /** Product id */
                id?: (number|Long|null);

                /** Product name */
                name?: (string|null);

                /** Product fieldBaru */
                fieldBaru?: (string|null);

                /** Product stock */
                stock?: (product.protobuf.CStock.IStock|null);

                /** Product outOfStockInfo */
                outOfStockInfo?: (product.protobuf.CStock.ITimestampOrError|null);
            }

            /** Represents a Product. */
            class Product implements IProduct {

                /**
                 * Constructs a new Product.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CProduct.IProduct);

                /** Product id. */
                public id: (number|Long);

                /** Product name. */
                public name: string;

                /** Product fieldBaru. */
                public fieldBaru: string;

                /** Product stock. */
                public stock?: (product.protobuf.CStock.IStock|null);

                /** Product outOfStockInfo. */
                public outOfStockInfo?: (product.protobuf.CStock.ITimestampOrError|null);

                /**
                 * Creates a new Product instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Product instance
                 */
                public static create(properties?: product.protobuf.CProduct.IProduct): product.protobuf.CProduct.Product;

                /**
                 * Encodes the specified Product message. Does not implicitly {@link product.protobuf.CProduct.Product.verify|verify} messages.
                 * @param message Product message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CProduct.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Product message, length delimited. Does not implicitly {@link product.protobuf.CProduct.Product.verify|verify} messages.
                 * @param message Product message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CProduct.IProduct, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Product message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Product
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CProduct.Product;

                /**
                 * Decodes a Product message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Product
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CProduct.Product;

                /**
                 * Verifies a Product message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Product message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Product
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CProduct.Product;

                /**
                 * Creates a plain object from a Product message. Also converts values to other types if specified.
                 * @param message Product
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CProduct.Product, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Product to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a CStock. */
        interface ICStock {
        }

        /** Represents a CStock. */
        class CStock implements ICStock {

            /**
             * Constructs a new CStock.
             * @param [properties] Properties to set
             */
            constructor(properties?: product.protobuf.ICStock);

            /**
             * Creates a new CStock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CStock instance
             */
            public static create(properties?: product.protobuf.ICStock): product.protobuf.CStock;

            /**
             * Encodes the specified CStock message. Does not implicitly {@link product.protobuf.CStock.verify|verify} messages.
             * @param message CStock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: product.protobuf.ICStock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CStock message, length delimited. Does not implicitly {@link product.protobuf.CStock.verify|verify} messages.
             * @param message CStock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: product.protobuf.ICStock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CStock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CStock;

            /**
             * Decodes a CStock message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CStock;

            /**
             * Verifies a CStock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CStock message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CStock
             */
            public static fromObject(object: { [k: string]: any }): product.protobuf.CStock;

            /**
             * Creates a plain object from a CStock message. Also converts values to other types if specified.
             * @param message CStock
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: product.protobuf.CStock, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CStock to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace CStock {

            /** Properties of a Stock. */
            interface IStock {

                /** Stock productId */
                productId?: (number|Long|null);

                /** Stock number */
                number?: (number|null);

                /** Stock lastIncoming */
                lastIncoming?: (google.protobuf.ITimestamp|null);

                /** Stock lastOutgoing */
                lastOutgoing?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a Stock. */
            class Stock implements IStock {

                /**
                 * Constructs a new Stock.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CStock.IStock);

                /** Stock productId. */
                public productId: (number|Long);

                /** Stock number. */
                public number: number;

                /** Stock lastIncoming. */
                public lastIncoming?: (google.protobuf.ITimestamp|null);

                /** Stock lastOutgoing. */
                public lastOutgoing?: (google.protobuf.ITimestamp|null);

                /**
                 * Creates a new Stock instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Stock instance
                 */
                public static create(properties?: product.protobuf.CStock.IStock): product.protobuf.CStock.Stock;

                /**
                 * Encodes the specified Stock message. Does not implicitly {@link product.protobuf.CStock.Stock.verify|verify} messages.
                 * @param message Stock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CStock.IStock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Stock message, length delimited. Does not implicitly {@link product.protobuf.CStock.Stock.verify|verify} messages.
                 * @param message Stock message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CStock.IStock, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Stock message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Stock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CStock.Stock;

                /**
                 * Decodes a Stock message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Stock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CStock.Stock;

                /**
                 * Verifies a Stock message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Stock message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Stock
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CStock.Stock;

                /**
                 * Creates a plain object from a Stock message. Also converts values to other types if specified.
                 * @param message Stock
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CStock.Stock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Stock to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a StockOrError. */
            interface IStockOrError {

                /** StockOrError error */
                error?: (google.protobuf.IValue|null);

                /** StockOrError stock */
                stock?: (product.protobuf.CStock.IStock|null);
            }

            /** Represents a StockOrError. */
            class StockOrError implements IStockOrError {

                /**
                 * Constructs a new StockOrError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CStock.IStockOrError);

                /** StockOrError error. */
                public error?: (google.protobuf.IValue|null);

                /** StockOrError stock. */
                public stock?: (product.protobuf.CStock.IStock|null);

                /** StockOrError type. */
                public type?: ("error"|"stock");

                /**
                 * Creates a new StockOrError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns StockOrError instance
                 */
                public static create(properties?: product.protobuf.CStock.IStockOrError): product.protobuf.CStock.StockOrError;

                /**
                 * Encodes the specified StockOrError message. Does not implicitly {@link product.protobuf.CStock.StockOrError.verify|verify} messages.
                 * @param message StockOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CStock.IStockOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified StockOrError message, length delimited. Does not implicitly {@link product.protobuf.CStock.StockOrError.verify|verify} messages.
                 * @param message StockOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CStock.IStockOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a StockOrError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns StockOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CStock.StockOrError;

                /**
                 * Decodes a StockOrError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns StockOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CStock.StockOrError;

                /**
                 * Verifies a StockOrError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a StockOrError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns StockOrError
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CStock.StockOrError;

                /**
                 * Creates a plain object from a StockOrError message. Also converts values to other types if specified.
                 * @param message StockOrError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CStock.StockOrError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this StockOrError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TimestampOrError. */
            interface ITimestampOrError {

                /** TimestampOrError error */
                error?: (google.protobuf.IValue|null);

                /** TimestampOrError outOfStockTime */
                outOfStockTime?: (google.protobuf.ITimestamp|null);
            }

            /** Represents a TimestampOrError. */
            class TimestampOrError implements ITimestampOrError {

                /**
                 * Constructs a new TimestampOrError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CStock.ITimestampOrError);

                /** TimestampOrError error. */
                public error?: (google.protobuf.IValue|null);

                /** TimestampOrError outOfStockTime. */
                public outOfStockTime?: (google.protobuf.ITimestamp|null);

                /** TimestampOrError type. */
                public type?: ("error"|"outOfStockTime");

                /**
                 * Creates a new TimestampOrError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TimestampOrError instance
                 */
                public static create(properties?: product.protobuf.CStock.ITimestampOrError): product.protobuf.CStock.TimestampOrError;

                /**
                 * Encodes the specified TimestampOrError message. Does not implicitly {@link product.protobuf.CStock.TimestampOrError.verify|verify} messages.
                 * @param message TimestampOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CStock.ITimestampOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TimestampOrError message, length delimited. Does not implicitly {@link product.protobuf.CStock.TimestampOrError.verify|verify} messages.
                 * @param message TimestampOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CStock.ITimestampOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TimestampOrError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TimestampOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CStock.TimestampOrError;

                /**
                 * Decodes a TimestampOrError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TimestampOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CStock.TimestampOrError;

                /**
                 * Verifies a TimestampOrError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TimestampOrError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TimestampOrError
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CStock.TimestampOrError;

                /**
                 * Creates a plain object from a TimestampOrError message. Also converts values to other types if specified.
                 * @param message TimestampOrError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CStock.TimestampOrError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TimestampOrError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EmptyOrError. */
            interface IEmptyOrError {

                /** EmptyOrError error */
                error?: (google.protobuf.IValue|null);
            }

            /** Represents an EmptyOrError. */
            class EmptyOrError implements IEmptyOrError {

                /**
                 * Constructs a new EmptyOrError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: product.protobuf.CStock.IEmptyOrError);

                /** EmptyOrError error. */
                public error?: (google.protobuf.IValue|null);

                /** EmptyOrError type. */
                public type?: "error";

                /**
                 * Creates a new EmptyOrError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EmptyOrError instance
                 */
                public static create(properties?: product.protobuf.CStock.IEmptyOrError): product.protobuf.CStock.EmptyOrError;

                /**
                 * Encodes the specified EmptyOrError message. Does not implicitly {@link product.protobuf.CStock.EmptyOrError.verify|verify} messages.
                 * @param message EmptyOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: product.protobuf.CStock.IEmptyOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EmptyOrError message, length delimited. Does not implicitly {@link product.protobuf.CStock.EmptyOrError.verify|verify} messages.
                 * @param message EmptyOrError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: product.protobuf.CStock.IEmptyOrError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): product.protobuf.CStock.EmptyOrError;

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): product.protobuf.CStock.EmptyOrError;

                /**
                 * Verifies an EmptyOrError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EmptyOrError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EmptyOrError
                 */
                public static fromObject(object: { [k: string]: any }): product.protobuf.CStock.EmptyOrError;

                /**
                 * Creates a plain object from an EmptyOrError message. Also converts values to other types if specified.
                 * @param message EmptyOrError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: product.protobuf.CStock.EmptyOrError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EmptyOrError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a Root. */
export interface IRoot {
}

/** Represents a Root. */
export class Root implements IRoot {

    /**
     * Constructs a new Root.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoot);

    /**
     * Creates a new Root instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Root instance
     */
    public static create(properties?: IRoot): Root;

    /**
     * Encodes the specified Root message. Does not implicitly {@link Root.verify|verify} messages.
     * @param message Root message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Root message, length delimited. Does not implicitly {@link Root.verify|verify} messages.
     * @param message Root message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoot, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Root message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Root
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Root;

    /**
     * Decodes a Root message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Root
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Root;

    /**
     * Verifies a Root message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Root message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Root
     */
    public static fromObject(object: { [k: string]: any }): Root;

    /**
     * Creates a plain object from a Root message. Also converts values to other types if specified.
     * @param message Root
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Root, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Root to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
