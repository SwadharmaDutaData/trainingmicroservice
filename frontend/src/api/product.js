/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.product = (function() {

    /**
     * Namespace product.
     * @exports product
     * @namespace
     */
    var product = {};

    product.grpc = (function() {

        /**
         * Namespace grpc.
         * @memberof product
         * @namespace
         */
        var grpc = {};

        grpc.LbService = (function() {

            /**
             * Constructs a new LbService service.
             * @memberof product.grpc
             * @classdesc Represents a LbService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function LbService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (LbService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = LbService;

            /**
             * Creates new LbService service using the specified rpc implementation.
             * @function create
             * @memberof product.grpc.LbService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {LbService} RPC service. Useful where requests and/or responses are streamed.
             */
            LbService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link product.grpc.LbService#responseFromServer}.
             * @memberof product.grpc.LbService
             * @typedef ResponseFromServerCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {google.protobuf.Value} [response] Value
             */

            /**
             * Calls ResponseFromServer.
             * @function responseFromServer
             * @memberof product.grpc.LbService
             * @instance
             * @param {google.protobuf.IEmpty} request Empty message or plain object
             * @param {product.grpc.LbService.ResponseFromServerCallback} callback Node-style callback called with the error, if any, and Value
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(LbService.prototype.responseFromServer = function responseFromServer(request, callback) {
                return this.rpcCall(responseFromServer, $root.google.protobuf.Empty, $root.google.protobuf.Value, request, callback);
            }, "name", { value: "ResponseFromServer" });

            /**
             * Calls ResponseFromServer.
             * @function responseFromServer
             * @memberof product.grpc.LbService
             * @instance
             * @param {google.protobuf.IEmpty} request Empty message or plain object
             * @returns {Promise<google.protobuf.Value>} Promise
             * @variation 2
             */

            return LbService;
        })();

        grpc.ProductService = (function() {

            /**
             * Constructs a new ProductService service.
             * @memberof product.grpc
             * @classdesc Represents a ProductService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ProductService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (ProductService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ProductService;

            /**
             * Creates new ProductService service using the specified rpc implementation.
             * @function create
             * @memberof product.grpc.ProductService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {ProductService} RPC service. Useful where requests and/or responses are streamed.
             */
            ProductService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link product.grpc.ProductService#getAllProduct}.
             * @memberof product.grpc.ProductService
             * @typedef GetAllProductCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {product.protobuf.CProduct.ProductsOrError} [response] ProductsOrError
             */

            /**
             * Calls GetAllProduct.
             * @function getAllProduct
             * @memberof product.grpc.ProductService
             * @instance
             * @param {product.protobuf.CProduct.IParam} request Param message or plain object
             * @param {product.grpc.ProductService.GetAllProductCallback} callback Node-style callback called with the error, if any, and ProductsOrError
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ProductService.prototype.getAllProduct = function getAllProduct(request, callback) {
                return this.rpcCall(getAllProduct, $root.product.protobuf.CProduct.Param, $root.product.protobuf.CProduct.ProductsOrError, request, callback);
            }, "name", { value: "GetAllProduct" });

            /**
             * Calls GetAllProduct.
             * @function getAllProduct
             * @memberof product.grpc.ProductService
             * @instance
             * @param {product.protobuf.CProduct.IParam} request Param message or plain object
             * @returns {Promise<product.protobuf.CProduct.ProductsOrError>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link product.grpc.ProductService#saveProduct}.
             * @memberof product.grpc.ProductService
             * @typedef SaveProductCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {product.protobuf.CProduct.ProductOrError} [response] ProductOrError
             */

            /**
             * Calls SaveProduct.
             * @function saveProduct
             * @memberof product.grpc.ProductService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @param {product.grpc.ProductService.SaveProductCallback} callback Node-style callback called with the error, if any, and ProductOrError
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ProductService.prototype.saveProduct = function saveProduct(request, callback) {
                return this.rpcCall(saveProduct, $root.product.protobuf.CProduct.Product, $root.product.protobuf.CProduct.ProductOrError, request, callback);
            }, "name", { value: "SaveProduct" });

            /**
             * Calls SaveProduct.
             * @function saveProduct
             * @memberof product.grpc.ProductService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @returns {Promise<product.protobuf.CProduct.ProductOrError>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link product.grpc.ProductService#getProductInfo}.
             * @memberof product.grpc.ProductService
             * @typedef GetProductInfoCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {product.protobuf.CProduct.ProductOrError} [response] ProductOrError
             */

            /**
             * Calls GetProductInfo.
             * @function getProductInfo
             * @memberof product.grpc.ProductService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @param {product.grpc.ProductService.GetProductInfoCallback} callback Node-style callback called with the error, if any, and ProductOrError
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ProductService.prototype.getProductInfo = function getProductInfo(request, callback) {
                return this.rpcCall(getProductInfo, $root.product.protobuf.CProduct.Product, $root.product.protobuf.CProduct.ProductOrError, request, callback);
            }, "name", { value: "GetProductInfo" });

            /**
             * Calls GetProductInfo.
             * @function getProductInfo
             * @memberof product.grpc.ProductService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @returns {Promise<product.protobuf.CProduct.ProductOrError>} Promise
             * @variation 2
             */

            return ProductService;
        })();

        grpc.StockService = (function() {

            /**
             * Constructs a new StockService service.
             * @memberof product.grpc
             * @classdesc Represents a StockService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function StockService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (StockService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = StockService;

            /**
             * Creates new StockService service using the specified rpc implementation.
             * @function create
             * @memberof product.grpc.StockService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {StockService} RPC service. Useful where requests and/or responses are streamed.
             */
            StockService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link product.grpc.StockService#getOutOfStockEstimation}.
             * @memberof product.grpc.StockService
             * @typedef GetOutOfStockEstimationCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {product.protobuf.CStock.TimestampOrError} [response] TimestampOrError
             */

            /**
             * Calls GetOutOfStockEstimation.
             * @function getOutOfStockEstimation
             * @memberof product.grpc.StockService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @param {product.grpc.StockService.GetOutOfStockEstimationCallback} callback Node-style callback called with the error, if any, and TimestampOrError
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(StockService.prototype.getOutOfStockEstimation = function getOutOfStockEstimation(request, callback) {
                return this.rpcCall(getOutOfStockEstimation, $root.product.protobuf.CProduct.Product, $root.product.protobuf.CStock.TimestampOrError, request, callback);
            }, "name", { value: "GetOutOfStockEstimation" });

            /**
             * Calls GetOutOfStockEstimation.
             * @function getOutOfStockEstimation
             * @memberof product.grpc.StockService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @returns {Promise<product.protobuf.CStock.TimestampOrError>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link product.grpc.StockService#saveStock}.
             * @memberof product.grpc.StockService
             * @typedef SaveStockCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {product.protobuf.CStock.StockOrError} [response] StockOrError
             */

            /**
             * Calls SaveStock.
             * @function saveStock
             * @memberof product.grpc.StockService
             * @instance
             * @param {product.protobuf.CStock.IStock} request Stock message or plain object
             * @param {product.grpc.StockService.SaveStockCallback} callback Node-style callback called with the error, if any, and StockOrError
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(StockService.prototype.saveStock = function saveStock(request, callback) {
                return this.rpcCall(saveStock, $root.product.protobuf.CStock.Stock, $root.product.protobuf.CStock.StockOrError, request, callback);
            }, "name", { value: "SaveStock" });

            /**
             * Calls SaveStock.
             * @function saveStock
             * @memberof product.grpc.StockService
             * @instance
             * @param {product.protobuf.CStock.IStock} request Stock message or plain object
             * @returns {Promise<product.protobuf.CStock.StockOrError>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link product.grpc.StockService#getStockOf}.
             * @memberof product.grpc.StockService
             * @typedef GetStockOfCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {product.protobuf.CStock.StockOrError} [response] StockOrError
             */

            /**
             * Calls GetStockOf.
             * @function getStockOf
             * @memberof product.grpc.StockService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @param {product.grpc.StockService.GetStockOfCallback} callback Node-style callback called with the error, if any, and StockOrError
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(StockService.prototype.getStockOf = function getStockOf(request, callback) {
                return this.rpcCall(getStockOf, $root.product.protobuf.CProduct.Product, $root.product.protobuf.CStock.StockOrError, request, callback);
            }, "name", { value: "GetStockOf" });

            /**
             * Calls GetStockOf.
             * @function getStockOf
             * @memberof product.grpc.StockService
             * @instance
             * @param {product.protobuf.CProduct.IProduct} request Product message or plain object
             * @returns {Promise<product.protobuf.CStock.StockOrError>} Promise
             * @variation 2
             */

            return StockService;
        })();

        return grpc;
    })();

    product.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof product
         * @namespace
         */
        var protobuf = {};

        protobuf.CProduct = (function() {

            /**
             * Properties of a CProduct.
             * @memberof product.protobuf
             * @interface ICProduct
             */

            /**
             * Constructs a new CProduct.
             * @memberof product.protobuf
             * @classdesc Represents a CProduct.
             * @implements ICProduct
             * @constructor
             * @param {product.protobuf.ICProduct=} [properties] Properties to set
             */
            function CProduct(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CProduct instance using the specified properties.
             * @function create
             * @memberof product.protobuf.CProduct
             * @static
             * @param {product.protobuf.ICProduct=} [properties] Properties to set
             * @returns {product.protobuf.CProduct} CProduct instance
             */
            CProduct.create = function create(properties) {
                return new CProduct(properties);
            };

            /**
             * Encodes the specified CProduct message. Does not implicitly {@link product.protobuf.CProduct.verify|verify} messages.
             * @function encode
             * @memberof product.protobuf.CProduct
             * @static
             * @param {product.protobuf.ICProduct} message CProduct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CProduct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CProduct message, length delimited. Does not implicitly {@link product.protobuf.CProduct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof product.protobuf.CProduct
             * @static
             * @param {product.protobuf.ICProduct} message CProduct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CProduct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CProduct message from the specified reader or buffer.
             * @function decode
             * @memberof product.protobuf.CProduct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {product.protobuf.CProduct} CProduct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CProduct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CProduct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof product.protobuf.CProduct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {product.protobuf.CProduct} CProduct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CProduct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CProduct message.
             * @function verify
             * @memberof product.protobuf.CProduct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CProduct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CProduct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof product.protobuf.CProduct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {product.protobuf.CProduct} CProduct
             */
            CProduct.fromObject = function fromObject(object) {
                if (object instanceof $root.product.protobuf.CProduct)
                    return object;
                return new $root.product.protobuf.CProduct();
            };

            /**
             * Creates a plain object from a CProduct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof product.protobuf.CProduct
             * @static
             * @param {product.protobuf.CProduct} message CProduct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CProduct.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CProduct to JSON.
             * @function toJSON
             * @memberof product.protobuf.CProduct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CProduct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CProduct.Param = (function() {

                /**
                 * Properties of a Param.
                 * @memberof product.protobuf.CProduct
                 * @interface IParam
                 * @property {number|null} [page] Param page
                 * @property {number|null} [recordsPerPage] Param recordsPerPage
                 * @property {google.protobuf.IValue|null} [sortBy] Param sortBy
                 */

                /**
                 * Constructs a new Param.
                 * @memberof product.protobuf.CProduct
                 * @classdesc Represents a Param.
                 * @implements IParam
                 * @constructor
                 * @param {product.protobuf.CProduct.IParam=} [properties] Properties to set
                 */
                function Param(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Param page.
                 * @member {number} page
                 * @memberof product.protobuf.CProduct.Param
                 * @instance
                 */
                Param.prototype.page = 0;

                /**
                 * Param recordsPerPage.
                 * @member {number} recordsPerPage
                 * @memberof product.protobuf.CProduct.Param
                 * @instance
                 */
                Param.prototype.recordsPerPage = 0;

                /**
                 * Param sortBy.
                 * @member {google.protobuf.IValue|null|undefined} sortBy
                 * @memberof product.protobuf.CProduct.Param
                 * @instance
                 */
                Param.prototype.sortBy = null;

                /**
                 * Creates a new Param instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {product.protobuf.CProduct.IParam=} [properties] Properties to set
                 * @returns {product.protobuf.CProduct.Param} Param instance
                 */
                Param.create = function create(properties) {
                    return new Param(properties);
                };

                /**
                 * Encodes the specified Param message. Does not implicitly {@link product.protobuf.CProduct.Param.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {product.protobuf.CProduct.IParam} message Param message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Param.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
                    if (message.recordsPerPage != null && Object.hasOwnProperty.call(message, "recordsPerPage"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.recordsPerPage);
                    if (message.sortBy != null && Object.hasOwnProperty.call(message, "sortBy"))
                        $root.google.protobuf.Value.encode(message.sortBy, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Param message, length delimited. Does not implicitly {@link product.protobuf.CProduct.Param.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {product.protobuf.CProduct.IParam} message Param message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Param.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Param message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CProduct.Param} Param
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Param.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct.Param();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.page = reader.int32();
                            break;
                        case 2:
                            message.recordsPerPage = reader.int32();
                            break;
                        case 3:
                            message.sortBy = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Param message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CProduct.Param} Param
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Param.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Param message.
                 * @function verify
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Param.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.page != null && message.hasOwnProperty("page"))
                        if (!$util.isInteger(message.page))
                            return "page: integer expected";
                    if (message.recordsPerPage != null && message.hasOwnProperty("recordsPerPage"))
                        if (!$util.isInteger(message.recordsPerPage))
                            return "recordsPerPage: integer expected";
                    if (message.sortBy != null && message.hasOwnProperty("sortBy")) {
                        var error = $root.google.protobuf.Value.verify(message.sortBy);
                        if (error)
                            return "sortBy." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Param message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CProduct.Param} Param
                 */
                Param.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CProduct.Param)
                        return object;
                    var message = new $root.product.protobuf.CProduct.Param();
                    if (object.page != null)
                        message.page = object.page | 0;
                    if (object.recordsPerPage != null)
                        message.recordsPerPage = object.recordsPerPage | 0;
                    if (object.sortBy != null) {
                        if (typeof object.sortBy !== "object")
                            throw TypeError(".product.protobuf.CProduct.Param.sortBy: object expected");
                        message.sortBy = $root.google.protobuf.Value.fromObject(object.sortBy);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Param message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CProduct.Param
                 * @static
                 * @param {product.protobuf.CProduct.Param} message Param
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Param.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.page = 0;
                        object.recordsPerPage = 0;
                        object.sortBy = null;
                    }
                    if (message.page != null && message.hasOwnProperty("page"))
                        object.page = message.page;
                    if (message.recordsPerPage != null && message.hasOwnProperty("recordsPerPage"))
                        object.recordsPerPage = message.recordsPerPage;
                    if (message.sortBy != null && message.hasOwnProperty("sortBy"))
                        object.sortBy = $root.google.protobuf.Value.toObject(message.sortBy, options);
                    return object;
                };

                /**
                 * Converts this Param to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CProduct.Param
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Param.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Param;
            })();

            CProduct.ProductsOrError = (function() {

                /**
                 * Properties of a ProductsOrError.
                 * @memberof product.protobuf.CProduct
                 * @interface IProductsOrError
                 * @property {google.protobuf.IValue|null} [error] ProductsOrError error
                 * @property {product.protobuf.CProduct.IProducts|null} [batch] ProductsOrError batch
                 */

                /**
                 * Constructs a new ProductsOrError.
                 * @memberof product.protobuf.CProduct
                 * @classdesc Represents a ProductsOrError.
                 * @implements IProductsOrError
                 * @constructor
                 * @param {product.protobuf.CProduct.IProductsOrError=} [properties] Properties to set
                 */
                function ProductsOrError(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ProductsOrError error.
                 * @member {google.protobuf.IValue|null|undefined} error
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @instance
                 */
                ProductsOrError.prototype.error = null;

                /**
                 * ProductsOrError batch.
                 * @member {product.protobuf.CProduct.IProducts|null|undefined} batch
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @instance
                 */
                ProductsOrError.prototype.batch = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ProductsOrError kind.
                 * @member {"error"|"batch"|undefined} kind
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @instance
                 */
                Object.defineProperty(ProductsOrError.prototype, "kind", {
                    get: $util.oneOfGetter($oneOfFields = ["error", "batch"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ProductsOrError instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {product.protobuf.CProduct.IProductsOrError=} [properties] Properties to set
                 * @returns {product.protobuf.CProduct.ProductsOrError} ProductsOrError instance
                 */
                ProductsOrError.create = function create(properties) {
                    return new ProductsOrError(properties);
                };

                /**
                 * Encodes the specified ProductsOrError message. Does not implicitly {@link product.protobuf.CProduct.ProductsOrError.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {product.protobuf.CProduct.IProductsOrError} message ProductsOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProductsOrError.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.google.protobuf.Value.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.batch != null && Object.hasOwnProperty.call(message, "batch"))
                        $root.product.protobuf.CProduct.Products.encode(message.batch, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ProductsOrError message, length delimited. Does not implicitly {@link product.protobuf.CProduct.ProductsOrError.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {product.protobuf.CProduct.IProductsOrError} message ProductsOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProductsOrError.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ProductsOrError message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CProduct.ProductsOrError} ProductsOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProductsOrError.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct.ProductsOrError();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.batch = $root.product.protobuf.CProduct.Products.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ProductsOrError message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CProduct.ProductsOrError} ProductsOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProductsOrError.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ProductsOrError message.
                 * @function verify
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProductsOrError.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.kind = 1;
                        {
                            var error = $root.google.protobuf.Value.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    if (message.batch != null && message.hasOwnProperty("batch")) {
                        if (properties.kind === 1)
                            return "kind: multiple values";
                        properties.kind = 1;
                        {
                            var error = $root.product.protobuf.CProduct.Products.verify(message.batch);
                            if (error)
                                return "batch." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ProductsOrError message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CProduct.ProductsOrError} ProductsOrError
                 */
                ProductsOrError.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CProduct.ProductsOrError)
                        return object;
                    var message = new $root.product.protobuf.CProduct.ProductsOrError();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".product.protobuf.CProduct.ProductsOrError.error: object expected");
                        message.error = $root.google.protobuf.Value.fromObject(object.error);
                    }
                    if (object.batch != null) {
                        if (typeof object.batch !== "object")
                            throw TypeError(".product.protobuf.CProduct.ProductsOrError.batch: object expected");
                        message.batch = $root.product.protobuf.CProduct.Products.fromObject(object.batch);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ProductsOrError message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @static
                 * @param {product.protobuf.CProduct.ProductsOrError} message ProductsOrError
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProductsOrError.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.protobuf.Value.toObject(message.error, options);
                        if (options.oneofs)
                            object.kind = "error";
                    }
                    if (message.batch != null && message.hasOwnProperty("batch")) {
                        object.batch = $root.product.protobuf.CProduct.Products.toObject(message.batch, options);
                        if (options.oneofs)
                            object.kind = "batch";
                    }
                    return object;
                };

                /**
                 * Converts this ProductsOrError to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CProduct.ProductsOrError
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProductsOrError.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ProductsOrError;
            })();

            CProduct.ProductOrError = (function() {

                /**
                 * Properties of a ProductOrError.
                 * @memberof product.protobuf.CProduct
                 * @interface IProductOrError
                 * @property {google.protobuf.IValue|null} [error] ProductOrError error
                 * @property {product.protobuf.CProduct.IProduct|null} [product] ProductOrError product
                 */

                /**
                 * Constructs a new ProductOrError.
                 * @memberof product.protobuf.CProduct
                 * @classdesc Represents a ProductOrError.
                 * @implements IProductOrError
                 * @constructor
                 * @param {product.protobuf.CProduct.IProductOrError=} [properties] Properties to set
                 */
                function ProductOrError(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ProductOrError error.
                 * @member {google.protobuf.IValue|null|undefined} error
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @instance
                 */
                ProductOrError.prototype.error = null;

                /**
                 * ProductOrError product.
                 * @member {product.protobuf.CProduct.IProduct|null|undefined} product
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @instance
                 */
                ProductOrError.prototype.product = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * ProductOrError type.
                 * @member {"error"|"product"|undefined} type
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @instance
                 */
                Object.defineProperty(ProductOrError.prototype, "type", {
                    get: $util.oneOfGetter($oneOfFields = ["error", "product"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ProductOrError instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {product.protobuf.CProduct.IProductOrError=} [properties] Properties to set
                 * @returns {product.protobuf.CProduct.ProductOrError} ProductOrError instance
                 */
                ProductOrError.create = function create(properties) {
                    return new ProductOrError(properties);
                };

                /**
                 * Encodes the specified ProductOrError message. Does not implicitly {@link product.protobuf.CProduct.ProductOrError.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {product.protobuf.CProduct.IProductOrError} message ProductOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProductOrError.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.google.protobuf.Value.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                        $root.product.protobuf.CProduct.Product.encode(message.product, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ProductOrError message, length delimited. Does not implicitly {@link product.protobuf.CProduct.ProductOrError.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {product.protobuf.CProduct.IProductOrError} message ProductOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ProductOrError.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ProductOrError message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CProduct.ProductOrError} ProductOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProductOrError.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct.ProductOrError();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.product = $root.product.protobuf.CProduct.Product.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ProductOrError message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CProduct.ProductOrError} ProductOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ProductOrError.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ProductOrError message.
                 * @function verify
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ProductOrError.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.type = 1;
                        {
                            var error = $root.google.protobuf.Value.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    if (message.product != null && message.hasOwnProperty("product")) {
                        if (properties.type === 1)
                            return "type: multiple values";
                        properties.type = 1;
                        {
                            var error = $root.product.protobuf.CProduct.Product.verify(message.product);
                            if (error)
                                return "product." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ProductOrError message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CProduct.ProductOrError} ProductOrError
                 */
                ProductOrError.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CProduct.ProductOrError)
                        return object;
                    var message = new $root.product.protobuf.CProduct.ProductOrError();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".product.protobuf.CProduct.ProductOrError.error: object expected");
                        message.error = $root.google.protobuf.Value.fromObject(object.error);
                    }
                    if (object.product != null) {
                        if (typeof object.product !== "object")
                            throw TypeError(".product.protobuf.CProduct.ProductOrError.product: object expected");
                        message.product = $root.product.protobuf.CProduct.Product.fromObject(object.product);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ProductOrError message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @static
                 * @param {product.protobuf.CProduct.ProductOrError} message ProductOrError
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ProductOrError.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.protobuf.Value.toObject(message.error, options);
                        if (options.oneofs)
                            object.type = "error";
                    }
                    if (message.product != null && message.hasOwnProperty("product")) {
                        object.product = $root.product.protobuf.CProduct.Product.toObject(message.product, options);
                        if (options.oneofs)
                            object.type = "product";
                    }
                    return object;
                };

                /**
                 * Converts this ProductOrError to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CProduct.ProductOrError
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ProductOrError.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ProductOrError;
            })();

            CProduct.EmptyOrError = (function() {

                /**
                 * Properties of an EmptyOrError.
                 * @memberof product.protobuf.CProduct
                 * @interface IEmptyOrError
                 * @property {google.protobuf.IValue|null} [error] EmptyOrError error
                 */

                /**
                 * Constructs a new EmptyOrError.
                 * @memberof product.protobuf.CProduct
                 * @classdesc Represents an EmptyOrError.
                 * @implements IEmptyOrError
                 * @constructor
                 * @param {product.protobuf.CProduct.IEmptyOrError=} [properties] Properties to set
                 */
                function EmptyOrError(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EmptyOrError error.
                 * @member {google.protobuf.IValue|null|undefined} error
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @instance
                 */
                EmptyOrError.prototype.error = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * EmptyOrError type.
                 * @member {"error"|undefined} type
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @instance
                 */
                Object.defineProperty(EmptyOrError.prototype, "type", {
                    get: $util.oneOfGetter($oneOfFields = ["error"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new EmptyOrError instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {product.protobuf.CProduct.IEmptyOrError=} [properties] Properties to set
                 * @returns {product.protobuf.CProduct.EmptyOrError} EmptyOrError instance
                 */
                EmptyOrError.create = function create(properties) {
                    return new EmptyOrError(properties);
                };

                /**
                 * Encodes the specified EmptyOrError message. Does not implicitly {@link product.protobuf.CProduct.EmptyOrError.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {product.protobuf.CProduct.IEmptyOrError} message EmptyOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EmptyOrError.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.google.protobuf.Value.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EmptyOrError message, length delimited. Does not implicitly {@link product.protobuf.CProduct.EmptyOrError.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {product.protobuf.CProduct.IEmptyOrError} message EmptyOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EmptyOrError.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CProduct.EmptyOrError} EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EmptyOrError.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct.EmptyOrError();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CProduct.EmptyOrError} EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EmptyOrError.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EmptyOrError message.
                 * @function verify
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EmptyOrError.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.type = 1;
                        {
                            var error = $root.google.protobuf.Value.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an EmptyOrError message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CProduct.EmptyOrError} EmptyOrError
                 */
                EmptyOrError.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CProduct.EmptyOrError)
                        return object;
                    var message = new $root.product.protobuf.CProduct.EmptyOrError();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".product.protobuf.CProduct.EmptyOrError.error: object expected");
                        message.error = $root.google.protobuf.Value.fromObject(object.error);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EmptyOrError message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @static
                 * @param {product.protobuf.CProduct.EmptyOrError} message EmptyOrError
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EmptyOrError.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.protobuf.Value.toObject(message.error, options);
                        if (options.oneofs)
                            object.type = "error";
                    }
                    return object;
                };

                /**
                 * Converts this EmptyOrError to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CProduct.EmptyOrError
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EmptyOrError.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EmptyOrError;
            })();

            CProduct.Products = (function() {

                /**
                 * Properties of a Products.
                 * @memberof product.protobuf.CProduct
                 * @interface IProducts
                 * @property {Array.<product.protobuf.CProduct.IProduct>|null} [record] Products record
                 */

                /**
                 * Constructs a new Products.
                 * @memberof product.protobuf.CProduct
                 * @classdesc Represents a Products.
                 * @implements IProducts
                 * @constructor
                 * @param {product.protobuf.CProduct.IProducts=} [properties] Properties to set
                 */
                function Products(properties) {
                    this.record = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Products record.
                 * @member {Array.<product.protobuf.CProduct.IProduct>} record
                 * @memberof product.protobuf.CProduct.Products
                 * @instance
                 */
                Products.prototype.record = $util.emptyArray;

                /**
                 * Creates a new Products instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {product.protobuf.CProduct.IProducts=} [properties] Properties to set
                 * @returns {product.protobuf.CProduct.Products} Products instance
                 */
                Products.create = function create(properties) {
                    return new Products(properties);
                };

                /**
                 * Encodes the specified Products message. Does not implicitly {@link product.protobuf.CProduct.Products.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {product.protobuf.CProduct.IProducts} message Products message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Products.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.record != null && message.record.length)
                        for (var i = 0; i < message.record.length; ++i)
                            $root.product.protobuf.CProduct.Product.encode(message.record[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Products message, length delimited. Does not implicitly {@link product.protobuf.CProduct.Products.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {product.protobuf.CProduct.IProducts} message Products message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Products.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Products message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CProduct.Products} Products
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Products.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct.Products();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.record && message.record.length))
                                message.record = [];
                            message.record.push($root.product.protobuf.CProduct.Product.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Products message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CProduct.Products} Products
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Products.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Products message.
                 * @function verify
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Products.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.record != null && message.hasOwnProperty("record")) {
                        if (!Array.isArray(message.record))
                            return "record: array expected";
                        for (var i = 0; i < message.record.length; ++i) {
                            var error = $root.product.protobuf.CProduct.Product.verify(message.record[i]);
                            if (error)
                                return "record." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Products message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CProduct.Products} Products
                 */
                Products.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CProduct.Products)
                        return object;
                    var message = new $root.product.protobuf.CProduct.Products();
                    if (object.record) {
                        if (!Array.isArray(object.record))
                            throw TypeError(".product.protobuf.CProduct.Products.record: array expected");
                        message.record = [];
                        for (var i = 0; i < object.record.length; ++i) {
                            if (typeof object.record[i] !== "object")
                                throw TypeError(".product.protobuf.CProduct.Products.record: object expected");
                            message.record[i] = $root.product.protobuf.CProduct.Product.fromObject(object.record[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Products message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CProduct.Products
                 * @static
                 * @param {product.protobuf.CProduct.Products} message Products
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Products.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.record = [];
                    if (message.record && message.record.length) {
                        object.record = [];
                        for (var j = 0; j < message.record.length; ++j)
                            object.record[j] = $root.product.protobuf.CProduct.Product.toObject(message.record[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Products to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CProduct.Products
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Products.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Products;
            })();

            CProduct.Product = (function() {

                /**
                 * Properties of a Product.
                 * @memberof product.protobuf.CProduct
                 * @interface IProduct
                 * @property {number|Long|null} [id] Product id
                 * @property {string|null} [name] Product name
                 * @property {string|null} [fieldBaru] Product fieldBaru
                 * @property {product.protobuf.CStock.IStock|null} [stock] Product stock
                 * @property {product.protobuf.CStock.ITimestampOrError|null} [outOfStockInfo] Product outOfStockInfo
                 */

                /**
                 * Constructs a new Product.
                 * @memberof product.protobuf.CProduct
                 * @classdesc Represents a Product.
                 * @implements IProduct
                 * @constructor
                 * @param {product.protobuf.CProduct.IProduct=} [properties] Properties to set
                 */
                function Product(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Product id.
                 * @member {number|Long} id
                 * @memberof product.protobuf.CProduct.Product
                 * @instance
                 */
                Product.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Product name.
                 * @member {string} name
                 * @memberof product.protobuf.CProduct.Product
                 * @instance
                 */
                Product.prototype.name = "";

                /**
                 * Product fieldBaru.
                 * @member {string} fieldBaru
                 * @memberof product.protobuf.CProduct.Product
                 * @instance
                 */
                Product.prototype.fieldBaru = "";

                /**
                 * Product stock.
                 * @member {product.protobuf.CStock.IStock|null|undefined} stock
                 * @memberof product.protobuf.CProduct.Product
                 * @instance
                 */
                Product.prototype.stock = null;

                /**
                 * Product outOfStockInfo.
                 * @member {product.protobuf.CStock.ITimestampOrError|null|undefined} outOfStockInfo
                 * @memberof product.protobuf.CProduct.Product
                 * @instance
                 */
                Product.prototype.outOfStockInfo = null;

                /**
                 * Creates a new Product instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {product.protobuf.CProduct.IProduct=} [properties] Properties to set
                 * @returns {product.protobuf.CProduct.Product} Product instance
                 */
                Product.create = function create(properties) {
                    return new Product(properties);
                };

                /**
                 * Encodes the specified Product message. Does not implicitly {@link product.protobuf.CProduct.Product.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {product.protobuf.CProduct.IProduct} message Product message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Product.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.fieldBaru != null && Object.hasOwnProperty.call(message, "fieldBaru"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.fieldBaru);
                    if (message.stock != null && Object.hasOwnProperty.call(message, "stock"))
                        $root.product.protobuf.CStock.Stock.encode(message.stock, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.outOfStockInfo != null && Object.hasOwnProperty.call(message, "outOfStockInfo"))
                        $root.product.protobuf.CStock.TimestampOrError.encode(message.outOfStockInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Product message, length delimited. Does not implicitly {@link product.protobuf.CProduct.Product.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {product.protobuf.CProduct.IProduct} message Product message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Product.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Product message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CProduct.Product} Product
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Product.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CProduct.Product();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 4:
                            message.fieldBaru = reader.string();
                            break;
                        case 5:
                            message.stock = $root.product.protobuf.CStock.Stock.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.outOfStockInfo = $root.product.protobuf.CStock.TimestampOrError.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Product message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CProduct.Product} Product
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Product.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Product message.
                 * @function verify
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Product.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.fieldBaru != null && message.hasOwnProperty("fieldBaru"))
                        if (!$util.isString(message.fieldBaru))
                            return "fieldBaru: string expected";
                    if (message.stock != null && message.hasOwnProperty("stock")) {
                        var error = $root.product.protobuf.CStock.Stock.verify(message.stock);
                        if (error)
                            return "stock." + error;
                    }
                    if (message.outOfStockInfo != null && message.hasOwnProperty("outOfStockInfo")) {
                        var error = $root.product.protobuf.CStock.TimestampOrError.verify(message.outOfStockInfo);
                        if (error)
                            return "outOfStockInfo." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Product message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CProduct.Product} Product
                 */
                Product.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CProduct.Product)
                        return object;
                    var message = new $root.product.protobuf.CProduct.Product();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.fieldBaru != null)
                        message.fieldBaru = String(object.fieldBaru);
                    if (object.stock != null) {
                        if (typeof object.stock !== "object")
                            throw TypeError(".product.protobuf.CProduct.Product.stock: object expected");
                        message.stock = $root.product.protobuf.CStock.Stock.fromObject(object.stock);
                    }
                    if (object.outOfStockInfo != null) {
                        if (typeof object.outOfStockInfo !== "object")
                            throw TypeError(".product.protobuf.CProduct.Product.outOfStockInfo: object expected");
                        message.outOfStockInfo = $root.product.protobuf.CStock.TimestampOrError.fromObject(object.outOfStockInfo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Product message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CProduct.Product
                 * @static
                 * @param {product.protobuf.CProduct.Product} message Product
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Product.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.fieldBaru = "";
                        object.stock = null;
                        object.outOfStockInfo = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.fieldBaru != null && message.hasOwnProperty("fieldBaru"))
                        object.fieldBaru = message.fieldBaru;
                    if (message.stock != null && message.hasOwnProperty("stock"))
                        object.stock = $root.product.protobuf.CStock.Stock.toObject(message.stock, options);
                    if (message.outOfStockInfo != null && message.hasOwnProperty("outOfStockInfo"))
                        object.outOfStockInfo = $root.product.protobuf.CStock.TimestampOrError.toObject(message.outOfStockInfo, options);
                    return object;
                };

                /**
                 * Converts this Product to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CProduct.Product
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Product.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Product;
            })();

            return CProduct;
        })();

        protobuf.CStock = (function() {

            /**
             * Properties of a CStock.
             * @memberof product.protobuf
             * @interface ICStock
             */

            /**
             * Constructs a new CStock.
             * @memberof product.protobuf
             * @classdesc Represents a CStock.
             * @implements ICStock
             * @constructor
             * @param {product.protobuf.ICStock=} [properties] Properties to set
             */
            function CStock(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new CStock instance using the specified properties.
             * @function create
             * @memberof product.protobuf.CStock
             * @static
             * @param {product.protobuf.ICStock=} [properties] Properties to set
             * @returns {product.protobuf.CStock} CStock instance
             */
            CStock.create = function create(properties) {
                return new CStock(properties);
            };

            /**
             * Encodes the specified CStock message. Does not implicitly {@link product.protobuf.CStock.verify|verify} messages.
             * @function encode
             * @memberof product.protobuf.CStock
             * @static
             * @param {product.protobuf.ICStock} message CStock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CStock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified CStock message, length delimited. Does not implicitly {@link product.protobuf.CStock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof product.protobuf.CStock
             * @static
             * @param {product.protobuf.ICStock} message CStock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CStock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CStock message from the specified reader or buffer.
             * @function decode
             * @memberof product.protobuf.CStock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {product.protobuf.CStock} CStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CStock.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CStock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CStock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof product.protobuf.CStock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {product.protobuf.CStock} CStock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CStock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CStock message.
             * @function verify
             * @memberof product.protobuf.CStock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CStock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a CStock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof product.protobuf.CStock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {product.protobuf.CStock} CStock
             */
            CStock.fromObject = function fromObject(object) {
                if (object instanceof $root.product.protobuf.CStock)
                    return object;
                return new $root.product.protobuf.CStock();
            };

            /**
             * Creates a plain object from a CStock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof product.protobuf.CStock
             * @static
             * @param {product.protobuf.CStock} message CStock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CStock.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this CStock to JSON.
             * @function toJSON
             * @memberof product.protobuf.CStock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CStock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            CStock.Stock = (function() {

                /**
                 * Properties of a Stock.
                 * @memberof product.protobuf.CStock
                 * @interface IStock
                 * @property {number|Long|null} [productId] Stock productId
                 * @property {number|null} [number] Stock number
                 * @property {google.protobuf.ITimestamp|null} [lastIncoming] Stock lastIncoming
                 * @property {google.protobuf.ITimestamp|null} [lastOutgoing] Stock lastOutgoing
                 */

                /**
                 * Constructs a new Stock.
                 * @memberof product.protobuf.CStock
                 * @classdesc Represents a Stock.
                 * @implements IStock
                 * @constructor
                 * @param {product.protobuf.CStock.IStock=} [properties] Properties to set
                 */
                function Stock(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Stock productId.
                 * @member {number|Long} productId
                 * @memberof product.protobuf.CStock.Stock
                 * @instance
                 */
                Stock.prototype.productId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Stock number.
                 * @member {number} number
                 * @memberof product.protobuf.CStock.Stock
                 * @instance
                 */
                Stock.prototype.number = 0;

                /**
                 * Stock lastIncoming.
                 * @member {google.protobuf.ITimestamp|null|undefined} lastIncoming
                 * @memberof product.protobuf.CStock.Stock
                 * @instance
                 */
                Stock.prototype.lastIncoming = null;

                /**
                 * Stock lastOutgoing.
                 * @member {google.protobuf.ITimestamp|null|undefined} lastOutgoing
                 * @memberof product.protobuf.CStock.Stock
                 * @instance
                 */
                Stock.prototype.lastOutgoing = null;

                /**
                 * Creates a new Stock instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {product.protobuf.CStock.IStock=} [properties] Properties to set
                 * @returns {product.protobuf.CStock.Stock} Stock instance
                 */
                Stock.create = function create(properties) {
                    return new Stock(properties);
                };

                /**
                 * Encodes the specified Stock message. Does not implicitly {@link product.protobuf.CStock.Stock.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {product.protobuf.CStock.IStock} message Stock message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Stock.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
                    if (message.lastIncoming != null && Object.hasOwnProperty.call(message, "lastIncoming"))
                        $root.google.protobuf.Timestamp.encode(message.lastIncoming, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.lastOutgoing != null && Object.hasOwnProperty.call(message, "lastOutgoing"))
                        $root.google.protobuf.Timestamp.encode(message.lastOutgoing, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.productId != null && Object.hasOwnProperty.call(message, "productId"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int64(message.productId);
                    return writer;
                };

                /**
                 * Encodes the specified Stock message, length delimited. Does not implicitly {@link product.protobuf.CStock.Stock.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {product.protobuf.CStock.IStock} message Stock message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Stock.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Stock message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CStock.Stock} Stock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Stock.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CStock.Stock();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 4:
                            message.productId = reader.int64();
                            break;
                        case 1:
                            message.number = reader.int32();
                            break;
                        case 2:
                            message.lastIncoming = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.lastOutgoing = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Stock message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CStock.Stock} Stock
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Stock.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Stock message.
                 * @function verify
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Stock.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.productId != null && message.hasOwnProperty("productId"))
                        if (!$util.isInteger(message.productId) && !(message.productId && $util.isInteger(message.productId.low) && $util.isInteger(message.productId.high)))
                            return "productId: integer|Long expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.lastIncoming != null && message.hasOwnProperty("lastIncoming")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.lastIncoming);
                        if (error)
                            return "lastIncoming." + error;
                    }
                    if (message.lastOutgoing != null && message.hasOwnProperty("lastOutgoing")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.lastOutgoing);
                        if (error)
                            return "lastOutgoing." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Stock message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CStock.Stock} Stock
                 */
                Stock.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CStock.Stock)
                        return object;
                    var message = new $root.product.protobuf.CStock.Stock();
                    if (object.productId != null)
                        if ($util.Long)
                            (message.productId = $util.Long.fromValue(object.productId)).unsigned = false;
                        else if (typeof object.productId === "string")
                            message.productId = parseInt(object.productId, 10);
                        else if (typeof object.productId === "number")
                            message.productId = object.productId;
                        else if (typeof object.productId === "object")
                            message.productId = new $util.LongBits(object.productId.low >>> 0, object.productId.high >>> 0).toNumber();
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.lastIncoming != null) {
                        if (typeof object.lastIncoming !== "object")
                            throw TypeError(".product.protobuf.CStock.Stock.lastIncoming: object expected");
                        message.lastIncoming = $root.google.protobuf.Timestamp.fromObject(object.lastIncoming);
                    }
                    if (object.lastOutgoing != null) {
                        if (typeof object.lastOutgoing !== "object")
                            throw TypeError(".product.protobuf.CStock.Stock.lastOutgoing: object expected");
                        message.lastOutgoing = $root.google.protobuf.Timestamp.fromObject(object.lastOutgoing);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Stock message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CStock.Stock
                 * @static
                 * @param {product.protobuf.CStock.Stock} message Stock
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Stock.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.number = 0;
                        object.lastIncoming = null;
                        object.lastOutgoing = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.productId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.productId = options.longs === String ? "0" : 0;
                    }
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.lastIncoming != null && message.hasOwnProperty("lastIncoming"))
                        object.lastIncoming = $root.google.protobuf.Timestamp.toObject(message.lastIncoming, options);
                    if (message.lastOutgoing != null && message.hasOwnProperty("lastOutgoing"))
                        object.lastOutgoing = $root.google.protobuf.Timestamp.toObject(message.lastOutgoing, options);
                    if (message.productId != null && message.hasOwnProperty("productId"))
                        if (typeof message.productId === "number")
                            object.productId = options.longs === String ? String(message.productId) : message.productId;
                        else
                            object.productId = options.longs === String ? $util.Long.prototype.toString.call(message.productId) : options.longs === Number ? new $util.LongBits(message.productId.low >>> 0, message.productId.high >>> 0).toNumber() : message.productId;
                    return object;
                };

                /**
                 * Converts this Stock to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CStock.Stock
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Stock.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Stock;
            })();

            CStock.StockOrError = (function() {

                /**
                 * Properties of a StockOrError.
                 * @memberof product.protobuf.CStock
                 * @interface IStockOrError
                 * @property {google.protobuf.IValue|null} [error] StockOrError error
                 * @property {product.protobuf.CStock.IStock|null} [stock] StockOrError stock
                 */

                /**
                 * Constructs a new StockOrError.
                 * @memberof product.protobuf.CStock
                 * @classdesc Represents a StockOrError.
                 * @implements IStockOrError
                 * @constructor
                 * @param {product.protobuf.CStock.IStockOrError=} [properties] Properties to set
                 */
                function StockOrError(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * StockOrError error.
                 * @member {google.protobuf.IValue|null|undefined} error
                 * @memberof product.protobuf.CStock.StockOrError
                 * @instance
                 */
                StockOrError.prototype.error = null;

                /**
                 * StockOrError stock.
                 * @member {product.protobuf.CStock.IStock|null|undefined} stock
                 * @memberof product.protobuf.CStock.StockOrError
                 * @instance
                 */
                StockOrError.prototype.stock = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * StockOrError type.
                 * @member {"error"|"stock"|undefined} type
                 * @memberof product.protobuf.CStock.StockOrError
                 * @instance
                 */
                Object.defineProperty(StockOrError.prototype, "type", {
                    get: $util.oneOfGetter($oneOfFields = ["error", "stock"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new StockOrError instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {product.protobuf.CStock.IStockOrError=} [properties] Properties to set
                 * @returns {product.protobuf.CStock.StockOrError} StockOrError instance
                 */
                StockOrError.create = function create(properties) {
                    return new StockOrError(properties);
                };

                /**
                 * Encodes the specified StockOrError message. Does not implicitly {@link product.protobuf.CStock.StockOrError.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {product.protobuf.CStock.IStockOrError} message StockOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StockOrError.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.google.protobuf.Value.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.stock != null && Object.hasOwnProperty.call(message, "stock"))
                        $root.product.protobuf.CStock.Stock.encode(message.stock, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified StockOrError message, length delimited. Does not implicitly {@link product.protobuf.CStock.StockOrError.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {product.protobuf.CStock.IStockOrError} message StockOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StockOrError.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a StockOrError message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CStock.StockOrError} StockOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StockOrError.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CStock.StockOrError();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.stock = $root.product.protobuf.CStock.Stock.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a StockOrError message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CStock.StockOrError} StockOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StockOrError.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a StockOrError message.
                 * @function verify
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StockOrError.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.type = 1;
                        {
                            var error = $root.google.protobuf.Value.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    if (message.stock != null && message.hasOwnProperty("stock")) {
                        if (properties.type === 1)
                            return "type: multiple values";
                        properties.type = 1;
                        {
                            var error = $root.product.protobuf.CStock.Stock.verify(message.stock);
                            if (error)
                                return "stock." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a StockOrError message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CStock.StockOrError} StockOrError
                 */
                StockOrError.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CStock.StockOrError)
                        return object;
                    var message = new $root.product.protobuf.CStock.StockOrError();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".product.protobuf.CStock.StockOrError.error: object expected");
                        message.error = $root.google.protobuf.Value.fromObject(object.error);
                    }
                    if (object.stock != null) {
                        if (typeof object.stock !== "object")
                            throw TypeError(".product.protobuf.CStock.StockOrError.stock: object expected");
                        message.stock = $root.product.protobuf.CStock.Stock.fromObject(object.stock);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a StockOrError message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CStock.StockOrError
                 * @static
                 * @param {product.protobuf.CStock.StockOrError} message StockOrError
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StockOrError.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.protobuf.Value.toObject(message.error, options);
                        if (options.oneofs)
                            object.type = "error";
                    }
                    if (message.stock != null && message.hasOwnProperty("stock")) {
                        object.stock = $root.product.protobuf.CStock.Stock.toObject(message.stock, options);
                        if (options.oneofs)
                            object.type = "stock";
                    }
                    return object;
                };

                /**
                 * Converts this StockOrError to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CStock.StockOrError
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StockOrError.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return StockOrError;
            })();

            CStock.TimestampOrError = (function() {

                /**
                 * Properties of a TimestampOrError.
                 * @memberof product.protobuf.CStock
                 * @interface ITimestampOrError
                 * @property {google.protobuf.IValue|null} [error] TimestampOrError error
                 * @property {google.protobuf.ITimestamp|null} [outOfStockTime] TimestampOrError outOfStockTime
                 */

                /**
                 * Constructs a new TimestampOrError.
                 * @memberof product.protobuf.CStock
                 * @classdesc Represents a TimestampOrError.
                 * @implements ITimestampOrError
                 * @constructor
                 * @param {product.protobuf.CStock.ITimestampOrError=} [properties] Properties to set
                 */
                function TimestampOrError(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TimestampOrError error.
                 * @member {google.protobuf.IValue|null|undefined} error
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @instance
                 */
                TimestampOrError.prototype.error = null;

                /**
                 * TimestampOrError outOfStockTime.
                 * @member {google.protobuf.ITimestamp|null|undefined} outOfStockTime
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @instance
                 */
                TimestampOrError.prototype.outOfStockTime = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * TimestampOrError type.
                 * @member {"error"|"outOfStockTime"|undefined} type
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @instance
                 */
                Object.defineProperty(TimestampOrError.prototype, "type", {
                    get: $util.oneOfGetter($oneOfFields = ["error", "outOfStockTime"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new TimestampOrError instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {product.protobuf.CStock.ITimestampOrError=} [properties] Properties to set
                 * @returns {product.protobuf.CStock.TimestampOrError} TimestampOrError instance
                 */
                TimestampOrError.create = function create(properties) {
                    return new TimestampOrError(properties);
                };

                /**
                 * Encodes the specified TimestampOrError message. Does not implicitly {@link product.protobuf.CStock.TimestampOrError.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {product.protobuf.CStock.ITimestampOrError} message TimestampOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TimestampOrError.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.google.protobuf.Value.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.outOfStockTime != null && Object.hasOwnProperty.call(message, "outOfStockTime"))
                        $root.google.protobuf.Timestamp.encode(message.outOfStockTime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified TimestampOrError message, length delimited. Does not implicitly {@link product.protobuf.CStock.TimestampOrError.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {product.protobuf.CStock.ITimestampOrError} message TimestampOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TimestampOrError.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TimestampOrError message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CStock.TimestampOrError} TimestampOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TimestampOrError.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CStock.TimestampOrError();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.outOfStockTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TimestampOrError message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CStock.TimestampOrError} TimestampOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TimestampOrError.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TimestampOrError message.
                 * @function verify
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TimestampOrError.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.type = 1;
                        {
                            var error = $root.google.protobuf.Value.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    if (message.outOfStockTime != null && message.hasOwnProperty("outOfStockTime")) {
                        if (properties.type === 1)
                            return "type: multiple values";
                        properties.type = 1;
                        {
                            var error = $root.google.protobuf.Timestamp.verify(message.outOfStockTime);
                            if (error)
                                return "outOfStockTime." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a TimestampOrError message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CStock.TimestampOrError} TimestampOrError
                 */
                TimestampOrError.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CStock.TimestampOrError)
                        return object;
                    var message = new $root.product.protobuf.CStock.TimestampOrError();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".product.protobuf.CStock.TimestampOrError.error: object expected");
                        message.error = $root.google.protobuf.Value.fromObject(object.error);
                    }
                    if (object.outOfStockTime != null) {
                        if (typeof object.outOfStockTime !== "object")
                            throw TypeError(".product.protobuf.CStock.TimestampOrError.outOfStockTime: object expected");
                        message.outOfStockTime = $root.google.protobuf.Timestamp.fromObject(object.outOfStockTime);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TimestampOrError message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @static
                 * @param {product.protobuf.CStock.TimestampOrError} message TimestampOrError
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TimestampOrError.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.protobuf.Value.toObject(message.error, options);
                        if (options.oneofs)
                            object.type = "error";
                    }
                    if (message.outOfStockTime != null && message.hasOwnProperty("outOfStockTime")) {
                        object.outOfStockTime = $root.google.protobuf.Timestamp.toObject(message.outOfStockTime, options);
                        if (options.oneofs)
                            object.type = "outOfStockTime";
                    }
                    return object;
                };

                /**
                 * Converts this TimestampOrError to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CStock.TimestampOrError
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TimestampOrError.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TimestampOrError;
            })();

            CStock.EmptyOrError = (function() {

                /**
                 * Properties of an EmptyOrError.
                 * @memberof product.protobuf.CStock
                 * @interface IEmptyOrError
                 * @property {google.protobuf.IValue|null} [error] EmptyOrError error
                 */

                /**
                 * Constructs a new EmptyOrError.
                 * @memberof product.protobuf.CStock
                 * @classdesc Represents an EmptyOrError.
                 * @implements IEmptyOrError
                 * @constructor
                 * @param {product.protobuf.CStock.IEmptyOrError=} [properties] Properties to set
                 */
                function EmptyOrError(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * EmptyOrError error.
                 * @member {google.protobuf.IValue|null|undefined} error
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @instance
                 */
                EmptyOrError.prototype.error = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * EmptyOrError type.
                 * @member {"error"|undefined} type
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @instance
                 */
                Object.defineProperty(EmptyOrError.prototype, "type", {
                    get: $util.oneOfGetter($oneOfFields = ["error"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new EmptyOrError instance using the specified properties.
                 * @function create
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {product.protobuf.CStock.IEmptyOrError=} [properties] Properties to set
                 * @returns {product.protobuf.CStock.EmptyOrError} EmptyOrError instance
                 */
                EmptyOrError.create = function create(properties) {
                    return new EmptyOrError(properties);
                };

                /**
                 * Encodes the specified EmptyOrError message. Does not implicitly {@link product.protobuf.CStock.EmptyOrError.verify|verify} messages.
                 * @function encode
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {product.protobuf.CStock.IEmptyOrError} message EmptyOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EmptyOrError.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                        $root.google.protobuf.Value.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified EmptyOrError message, length delimited. Does not implicitly {@link product.protobuf.CStock.EmptyOrError.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {product.protobuf.CStock.IEmptyOrError} message EmptyOrError message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EmptyOrError.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer.
                 * @function decode
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {product.protobuf.CStock.EmptyOrError} EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EmptyOrError.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.product.protobuf.CStock.EmptyOrError();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.error = $root.google.protobuf.Value.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an EmptyOrError message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {product.protobuf.CStock.EmptyOrError} EmptyOrError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EmptyOrError.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an EmptyOrError message.
                 * @function verify
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EmptyOrError.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        properties.type = 1;
                        {
                            var error = $root.google.protobuf.Value.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an EmptyOrError message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {product.protobuf.CStock.EmptyOrError} EmptyOrError
                 */
                EmptyOrError.fromObject = function fromObject(object) {
                    if (object instanceof $root.product.protobuf.CStock.EmptyOrError)
                        return object;
                    var message = new $root.product.protobuf.CStock.EmptyOrError();
                    if (object.error != null) {
                        if (typeof object.error !== "object")
                            throw TypeError(".product.protobuf.CStock.EmptyOrError.error: object expected");
                        message.error = $root.google.protobuf.Value.fromObject(object.error);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an EmptyOrError message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @static
                 * @param {product.protobuf.CStock.EmptyOrError} message EmptyOrError
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EmptyOrError.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.error != null && message.hasOwnProperty("error")) {
                        object.error = $root.google.protobuf.Value.toObject(message.error, options);
                        if (options.oneofs)
                            object.type = "error";
                    }
                    return object;
                };

                /**
                 * Converts this EmptyOrError to JSON.
                 * @function toJSON
                 * @memberof product.protobuf.CStock.EmptyOrError
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EmptyOrError.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return EmptyOrError;
            })();

            return CStock;
        })();

        return protobuf;
    })();

    return product;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (message.fields === $util.emptyObject)
                            message.fields = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.fields[key] = value;
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    var key = Object.keys(message.fields);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                var message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                var keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = 0;

            /**
             * Value numberValue.
             * @member {number} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = 0;

            /**
             * Value stringValue.
             * @member {string} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = "";

            /**
             * Value boolValue.
             * @member {boolean} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = false;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.nullValue = reader.int32();
                        break;
                    case 2:
                        message.numberValue = reader.double();
                        break;
                    case 3:
                        message.stringValue = reader.string();
                        break;
                    case 4:
                        message.boolValue = reader.bool();
                        break;
                    case 5:
                        message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                var message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.values && message.values.length))
                            message.values = [];
                        message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                var message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ListValue;
        })();

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

$root.Root = (function() {

    /**
     * Properties of a Root.
     * @exports IRoot
     * @interface IRoot
     */

    /**
     * Constructs a new Root.
     * @exports Root
     * @classdesc Represents a Root.
     * @implements IRoot
     * @constructor
     * @param {IRoot=} [properties] Properties to set
     */
    function Root(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Root instance using the specified properties.
     * @function create
     * @memberof Root
     * @static
     * @param {IRoot=} [properties] Properties to set
     * @returns {Root} Root instance
     */
    Root.create = function create(properties) {
        return new Root(properties);
    };

    /**
     * Encodes the specified Root message. Does not implicitly {@link Root.verify|verify} messages.
     * @function encode
     * @memberof Root
     * @static
     * @param {IRoot} message Root message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Root.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Root message, length delimited. Does not implicitly {@link Root.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Root
     * @static
     * @param {IRoot} message Root message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Root.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Root message from the specified reader or buffer.
     * @function decode
     * @memberof Root
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Root} Root
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Root.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Root();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Root message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Root
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Root} Root
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Root.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Root message.
     * @function verify
     * @memberof Root
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Root.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a Root message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Root
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Root} Root
     */
    Root.fromObject = function fromObject(object) {
        if (object instanceof $root.Root)
            return object;
        return new $root.Root();
    };

    /**
     * Creates a plain object from a Root message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Root
     * @static
     * @param {Root} message Root
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Root.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Root to JSON.
     * @function toJSON
     * @memberof Root
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Root.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Root;
})();

module.exports = $root;
