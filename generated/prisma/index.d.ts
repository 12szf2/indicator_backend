
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Alapadatok
 * 
 */
export type Alapadatok = $Result.DefaultSelection<Prisma.$AlapadatokPayload>
/**
 * Model Szakirany
 * 
 */
export type Szakirany = $Result.DefaultSelection<Prisma.$SzakiranyPayload>
/**
 * Model Szakma
 * 
 */
export type Szakma = $Result.DefaultSelection<Prisma.$SzakmaPayload>
/**
 * Model Tanulo_Letszam
 * 
 */
export type Tanulo_Letszam = $Result.DefaultSelection<Prisma.$Tanulo_LetszamPayload>
/**
 * Model Tanar_Letszam
 * 
 */
export type Tanar_Letszam = $Result.DefaultSelection<Prisma.$Tanar_LetszamPayload>
/**
 * Model Felvettek_Szama
 * 
 */
export type Felvettek_Szama = $Result.DefaultSelection<Prisma.$Felvettek_SzamaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alapadatoks
 * const alapadatoks = await prisma.alapadatok.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Alapadatoks
   * const alapadatoks = await prisma.alapadatok.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.alapadatok`: Exposes CRUD operations for the **Alapadatok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alapadatoks
    * const alapadatoks = await prisma.alapadatok.findMany()
    * ```
    */
  get alapadatok(): Prisma.AlapadatokDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.szakirany`: Exposes CRUD operations for the **Szakirany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Szakiranies
    * const szakiranies = await prisma.szakirany.findMany()
    * ```
    */
  get szakirany(): Prisma.SzakiranyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.szakma`: Exposes CRUD operations for the **Szakma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Szakmas
    * const szakmas = await prisma.szakma.findMany()
    * ```
    */
  get szakma(): Prisma.SzakmaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tanulo_Letszam`: Exposes CRUD operations for the **Tanulo_Letszam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tanulo_Letszams
    * const tanulo_Letszams = await prisma.tanulo_Letszam.findMany()
    * ```
    */
  get tanulo_Letszam(): Prisma.Tanulo_LetszamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tanar_Letszam`: Exposes CRUD operations for the **Tanar_Letszam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tanar_Letszams
    * const tanar_Letszams = await prisma.tanar_Letszam.findMany()
    * ```
    */
  get tanar_Letszam(): Prisma.Tanar_LetszamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.felvettek_Szama`: Exposes CRUD operations for the **Felvettek_Szama** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Felvettek_Szamas
    * const felvettek_Szamas = await prisma.felvettek_Szama.findMany()
    * ```
    */
  get felvettek_Szama(): Prisma.Felvettek_SzamaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Alapadatok: 'Alapadatok',
    Szakirany: 'Szakirany',
    Szakma: 'Szakma',
    Tanulo_Letszam: 'Tanulo_Letszam',
    Tanar_Letszam: 'Tanar_Letszam',
    Felvettek_Szama: 'Felvettek_Szama'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "alapadatok" | "szakirany" | "szakma" | "tanulo_Letszam" | "tanar_Letszam" | "felvettek_Szama"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Alapadatok: {
        payload: Prisma.$AlapadatokPayload<ExtArgs>
        fields: Prisma.AlapadatokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlapadatokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlapadatokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>
          }
          findFirst: {
            args: Prisma.AlapadatokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlapadatokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>
          }
          findMany: {
            args: Prisma.AlapadatokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>[]
          }
          create: {
            args: Prisma.AlapadatokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>
          }
          createMany: {
            args: Prisma.AlapadatokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlapadatokCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>[]
          }
          delete: {
            args: Prisma.AlapadatokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>
          }
          update: {
            args: Prisma.AlapadatokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>
          }
          deleteMany: {
            args: Prisma.AlapadatokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlapadatokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlapadatokUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>[]
          }
          upsert: {
            args: Prisma.AlapadatokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlapadatokPayload>
          }
          aggregate: {
            args: Prisma.AlapadatokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlapadatok>
          }
          groupBy: {
            args: Prisma.AlapadatokGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlapadatokGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlapadatokCountArgs<ExtArgs>
            result: $Utils.Optional<AlapadatokCountAggregateOutputType> | number
          }
        }
      }
      Szakirany: {
        payload: Prisma.$SzakiranyPayload<ExtArgs>
        fields: Prisma.SzakiranyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SzakiranyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SzakiranyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>
          }
          findFirst: {
            args: Prisma.SzakiranyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SzakiranyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>
          }
          findMany: {
            args: Prisma.SzakiranyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>[]
          }
          create: {
            args: Prisma.SzakiranyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>
          }
          createMany: {
            args: Prisma.SzakiranyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SzakiranyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>[]
          }
          delete: {
            args: Prisma.SzakiranyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>
          }
          update: {
            args: Prisma.SzakiranyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>
          }
          deleteMany: {
            args: Prisma.SzakiranyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SzakiranyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SzakiranyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>[]
          }
          upsert: {
            args: Prisma.SzakiranyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakiranyPayload>
          }
          aggregate: {
            args: Prisma.SzakiranyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSzakirany>
          }
          groupBy: {
            args: Prisma.SzakiranyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SzakiranyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SzakiranyCountArgs<ExtArgs>
            result: $Utils.Optional<SzakiranyCountAggregateOutputType> | number
          }
        }
      }
      Szakma: {
        payload: Prisma.$SzakmaPayload<ExtArgs>
        fields: Prisma.SzakmaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SzakmaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SzakmaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>
          }
          findFirst: {
            args: Prisma.SzakmaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SzakmaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>
          }
          findMany: {
            args: Prisma.SzakmaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>[]
          }
          create: {
            args: Prisma.SzakmaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>
          }
          createMany: {
            args: Prisma.SzakmaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SzakmaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>[]
          }
          delete: {
            args: Prisma.SzakmaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>
          }
          update: {
            args: Prisma.SzakmaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>
          }
          deleteMany: {
            args: Prisma.SzakmaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SzakmaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SzakmaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>[]
          }
          upsert: {
            args: Prisma.SzakmaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SzakmaPayload>
          }
          aggregate: {
            args: Prisma.SzakmaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSzakma>
          }
          groupBy: {
            args: Prisma.SzakmaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SzakmaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SzakmaCountArgs<ExtArgs>
            result: $Utils.Optional<SzakmaCountAggregateOutputType> | number
          }
        }
      }
      Tanulo_Letszam: {
        payload: Prisma.$Tanulo_LetszamPayload<ExtArgs>
        fields: Prisma.Tanulo_LetszamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tanulo_LetszamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tanulo_LetszamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>
          }
          findFirst: {
            args: Prisma.Tanulo_LetszamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tanulo_LetszamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>
          }
          findMany: {
            args: Prisma.Tanulo_LetszamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>[]
          }
          create: {
            args: Prisma.Tanulo_LetszamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>
          }
          createMany: {
            args: Prisma.Tanulo_LetszamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Tanulo_LetszamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>[]
          }
          delete: {
            args: Prisma.Tanulo_LetszamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>
          }
          update: {
            args: Prisma.Tanulo_LetszamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>
          }
          deleteMany: {
            args: Prisma.Tanulo_LetszamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tanulo_LetszamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Tanulo_LetszamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>[]
          }
          upsert: {
            args: Prisma.Tanulo_LetszamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanulo_LetszamPayload>
          }
          aggregate: {
            args: Prisma.Tanulo_LetszamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTanulo_Letszam>
          }
          groupBy: {
            args: Prisma.Tanulo_LetszamGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tanulo_LetszamGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tanulo_LetszamCountArgs<ExtArgs>
            result: $Utils.Optional<Tanulo_LetszamCountAggregateOutputType> | number
          }
        }
      }
      Tanar_Letszam: {
        payload: Prisma.$Tanar_LetszamPayload<ExtArgs>
        fields: Prisma.Tanar_LetszamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tanar_LetszamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tanar_LetszamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>
          }
          findFirst: {
            args: Prisma.Tanar_LetszamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tanar_LetszamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>
          }
          findMany: {
            args: Prisma.Tanar_LetszamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>[]
          }
          create: {
            args: Prisma.Tanar_LetszamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>
          }
          createMany: {
            args: Prisma.Tanar_LetszamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Tanar_LetszamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>[]
          }
          delete: {
            args: Prisma.Tanar_LetszamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>
          }
          update: {
            args: Prisma.Tanar_LetszamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>
          }
          deleteMany: {
            args: Prisma.Tanar_LetszamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tanar_LetszamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Tanar_LetszamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>[]
          }
          upsert: {
            args: Prisma.Tanar_LetszamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanar_LetszamPayload>
          }
          aggregate: {
            args: Prisma.Tanar_LetszamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTanar_Letszam>
          }
          groupBy: {
            args: Prisma.Tanar_LetszamGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tanar_LetszamGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tanar_LetszamCountArgs<ExtArgs>
            result: $Utils.Optional<Tanar_LetszamCountAggregateOutputType> | number
          }
        }
      }
      Felvettek_Szama: {
        payload: Prisma.$Felvettek_SzamaPayload<ExtArgs>
        fields: Prisma.Felvettek_SzamaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Felvettek_SzamaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Felvettek_SzamaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>
          }
          findFirst: {
            args: Prisma.Felvettek_SzamaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Felvettek_SzamaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>
          }
          findMany: {
            args: Prisma.Felvettek_SzamaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>[]
          }
          create: {
            args: Prisma.Felvettek_SzamaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>
          }
          createMany: {
            args: Prisma.Felvettek_SzamaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Felvettek_SzamaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>[]
          }
          delete: {
            args: Prisma.Felvettek_SzamaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>
          }
          update: {
            args: Prisma.Felvettek_SzamaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>
          }
          deleteMany: {
            args: Prisma.Felvettek_SzamaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Felvettek_SzamaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Felvettek_SzamaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>[]
          }
          upsert: {
            args: Prisma.Felvettek_SzamaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Felvettek_SzamaPayload>
          }
          aggregate: {
            args: Prisma.Felvettek_SzamaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFelvettek_Szama>
          }
          groupBy: {
            args: Prisma.Felvettek_SzamaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Felvettek_SzamaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Felvettek_SzamaCountArgs<ExtArgs>
            result: $Utils.Optional<Felvettek_SzamaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    alapadatok?: AlapadatokOmit
    szakirany?: SzakiranyOmit
    szakma?: SzakmaOmit
    tanulo_Letszam?: Tanulo_LetszamOmit
    tanar_Letszam?: Tanar_LetszamOmit
    felvettek_Szama?: Felvettek_SzamaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlapadatokCountOutputType
   */

  export type AlapadatokCountOutputType = {
    tanulo_letszam: number
    tanar_letszam: number
    felvettek_szama: number
  }

  export type AlapadatokCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | AlapadatokCountOutputTypeCountTanulo_letszamArgs
    tanar_letszam?: boolean | AlapadatokCountOutputTypeCountTanar_letszamArgs
    felvettek_szama?: boolean | AlapadatokCountOutputTypeCountFelvettek_szamaArgs
  }

  // Custom InputTypes
  /**
   * AlapadatokCountOutputType without action
   */
  export type AlapadatokCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlapadatokCountOutputType
     */
    select?: AlapadatokCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlapadatokCountOutputType without action
   */
  export type AlapadatokCountOutputTypeCountTanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanulo_LetszamWhereInput
  }

  /**
   * AlapadatokCountOutputType without action
   */
  export type AlapadatokCountOutputTypeCountTanar_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanar_LetszamWhereInput
  }

  /**
   * AlapadatokCountOutputType without action
   */
  export type AlapadatokCountOutputTypeCountFelvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Felvettek_SzamaWhereInput
  }


  /**
   * Count Type SzakiranyCountOutputType
   */

  export type SzakiranyCountOutputType = {
    tanulo_letszam: number
  }

  export type SzakiranyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | SzakiranyCountOutputTypeCountTanulo_letszamArgs
  }

  // Custom InputTypes
  /**
   * SzakiranyCountOutputType without action
   */
  export type SzakiranyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SzakiranyCountOutputType
     */
    select?: SzakiranyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SzakiranyCountOutputType without action
   */
  export type SzakiranyCountOutputTypeCountTanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanulo_LetszamWhereInput
  }


  /**
   * Count Type SzakmaCountOutputType
   */

  export type SzakmaCountOutputType = {
    tanulo_letszam: number
    felvettek_szama: number
  }

  export type SzakmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | SzakmaCountOutputTypeCountTanulo_letszamArgs
    felvettek_szama?: boolean | SzakmaCountOutputTypeCountFelvettek_szamaArgs
  }

  // Custom InputTypes
  /**
   * SzakmaCountOutputType without action
   */
  export type SzakmaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SzakmaCountOutputType
     */
    select?: SzakmaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SzakmaCountOutputType without action
   */
  export type SzakmaCountOutputTypeCountTanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanulo_LetszamWhereInput
  }

  /**
   * SzakmaCountOutputType without action
   */
  export type SzakmaCountOutputTypeCountFelvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Felvettek_SzamaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Alapadatok
   */

  export type AggregateAlapadatok = {
    _count: AlapadatokCountAggregateOutputType | null
    _min: AlapadatokMinAggregateOutputType | null
    _max: AlapadatokMaxAggregateOutputType | null
  }

  export type AlapadatokMinAggregateOutputType = {
    id: string | null
    iskola_neve: string | null
    intezmeny_tipus: string | null
  }

  export type AlapadatokMaxAggregateOutputType = {
    id: string | null
    iskola_neve: string | null
    intezmeny_tipus: string | null
  }

  export type AlapadatokCountAggregateOutputType = {
    id: number
    iskola_neve: number
    intezmeny_tipus: number
    _all: number
  }


  export type AlapadatokMinAggregateInputType = {
    id?: true
    iskola_neve?: true
    intezmeny_tipus?: true
  }

  export type AlapadatokMaxAggregateInputType = {
    id?: true
    iskola_neve?: true
    intezmeny_tipus?: true
  }

  export type AlapadatokCountAggregateInputType = {
    id?: true
    iskola_neve?: true
    intezmeny_tipus?: true
    _all?: true
  }

  export type AlapadatokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alapadatok to aggregate.
     */
    where?: AlapadatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alapadatoks to fetch.
     */
    orderBy?: AlapadatokOrderByWithRelationInput | AlapadatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlapadatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alapadatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alapadatoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alapadatoks
    **/
    _count?: true | AlapadatokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlapadatokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlapadatokMaxAggregateInputType
  }

  export type GetAlapadatokAggregateType<T extends AlapadatokAggregateArgs> = {
        [P in keyof T & keyof AggregateAlapadatok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlapadatok[P]>
      : GetScalarType<T[P], AggregateAlapadatok[P]>
  }




  export type AlapadatokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlapadatokWhereInput
    orderBy?: AlapadatokOrderByWithAggregationInput | AlapadatokOrderByWithAggregationInput[]
    by: AlapadatokScalarFieldEnum[] | AlapadatokScalarFieldEnum
    having?: AlapadatokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlapadatokCountAggregateInputType | true
    _min?: AlapadatokMinAggregateInputType
    _max?: AlapadatokMaxAggregateInputType
  }

  export type AlapadatokGroupByOutputType = {
    id: string
    iskola_neve: string
    intezmeny_tipus: string
    _count: AlapadatokCountAggregateOutputType | null
    _min: AlapadatokMinAggregateOutputType | null
    _max: AlapadatokMaxAggregateOutputType | null
  }

  type GetAlapadatokGroupByPayload<T extends AlapadatokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlapadatokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlapadatokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlapadatokGroupByOutputType[P]>
            : GetScalarType<T[P], AlapadatokGroupByOutputType[P]>
        }
      >
    >


  export type AlapadatokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iskola_neve?: boolean
    intezmeny_tipus?: boolean
    tanulo_letszam?: boolean | Alapadatok$tanulo_letszamArgs<ExtArgs>
    tanar_letszam?: boolean | Alapadatok$tanar_letszamArgs<ExtArgs>
    felvettek_szama?: boolean | Alapadatok$felvettek_szamaArgs<ExtArgs>
    _count?: boolean | AlapadatokCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alapadatok"]>

  export type AlapadatokSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iskola_neve?: boolean
    intezmeny_tipus?: boolean
  }, ExtArgs["result"]["alapadatok"]>

  export type AlapadatokSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iskola_neve?: boolean
    intezmeny_tipus?: boolean
  }, ExtArgs["result"]["alapadatok"]>

  export type AlapadatokSelectScalar = {
    id?: boolean
    iskola_neve?: boolean
    intezmeny_tipus?: boolean
  }

  export type AlapadatokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iskola_neve" | "intezmeny_tipus", ExtArgs["result"]["alapadatok"]>
  export type AlapadatokInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | Alapadatok$tanulo_letszamArgs<ExtArgs>
    tanar_letszam?: boolean | Alapadatok$tanar_letszamArgs<ExtArgs>
    felvettek_szama?: boolean | Alapadatok$felvettek_szamaArgs<ExtArgs>
    _count?: boolean | AlapadatokCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlapadatokIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlapadatokIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlapadatokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alapadatok"
    objects: {
      tanulo_letszam: Prisma.$Tanulo_LetszamPayload<ExtArgs>[]
      tanar_letszam: Prisma.$Tanar_LetszamPayload<ExtArgs>[]
      felvettek_szama: Prisma.$Felvettek_SzamaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      iskola_neve: string
      intezmeny_tipus: string
    }, ExtArgs["result"]["alapadatok"]>
    composites: {}
  }

  type AlapadatokGetPayload<S extends boolean | null | undefined | AlapadatokDefaultArgs> = $Result.GetResult<Prisma.$AlapadatokPayload, S>

  type AlapadatokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlapadatokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlapadatokCountAggregateInputType | true
    }

  export interface AlapadatokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alapadatok'], meta: { name: 'Alapadatok' } }
    /**
     * Find zero or one Alapadatok that matches the filter.
     * @param {AlapadatokFindUniqueArgs} args - Arguments to find a Alapadatok
     * @example
     * // Get one Alapadatok
     * const alapadatok = await prisma.alapadatok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlapadatokFindUniqueArgs>(args: SelectSubset<T, AlapadatokFindUniqueArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alapadatok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlapadatokFindUniqueOrThrowArgs} args - Arguments to find a Alapadatok
     * @example
     * // Get one Alapadatok
     * const alapadatok = await prisma.alapadatok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlapadatokFindUniqueOrThrowArgs>(args: SelectSubset<T, AlapadatokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alapadatok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokFindFirstArgs} args - Arguments to find a Alapadatok
     * @example
     * // Get one Alapadatok
     * const alapadatok = await prisma.alapadatok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlapadatokFindFirstArgs>(args?: SelectSubset<T, AlapadatokFindFirstArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alapadatok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokFindFirstOrThrowArgs} args - Arguments to find a Alapadatok
     * @example
     * // Get one Alapadatok
     * const alapadatok = await prisma.alapadatok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlapadatokFindFirstOrThrowArgs>(args?: SelectSubset<T, AlapadatokFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alapadatoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alapadatoks
     * const alapadatoks = await prisma.alapadatok.findMany()
     * 
     * // Get first 10 Alapadatoks
     * const alapadatoks = await prisma.alapadatok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alapadatokWithIdOnly = await prisma.alapadatok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlapadatokFindManyArgs>(args?: SelectSubset<T, AlapadatokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alapadatok.
     * @param {AlapadatokCreateArgs} args - Arguments to create a Alapadatok.
     * @example
     * // Create one Alapadatok
     * const Alapadatok = await prisma.alapadatok.create({
     *   data: {
     *     // ... data to create a Alapadatok
     *   }
     * })
     * 
     */
    create<T extends AlapadatokCreateArgs>(args: SelectSubset<T, AlapadatokCreateArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alapadatoks.
     * @param {AlapadatokCreateManyArgs} args - Arguments to create many Alapadatoks.
     * @example
     * // Create many Alapadatoks
     * const alapadatok = await prisma.alapadatok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlapadatokCreateManyArgs>(args?: SelectSubset<T, AlapadatokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alapadatoks and returns the data saved in the database.
     * @param {AlapadatokCreateManyAndReturnArgs} args - Arguments to create many Alapadatoks.
     * @example
     * // Create many Alapadatoks
     * const alapadatok = await prisma.alapadatok.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alapadatoks and only return the `id`
     * const alapadatokWithIdOnly = await prisma.alapadatok.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlapadatokCreateManyAndReturnArgs>(args?: SelectSubset<T, AlapadatokCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alapadatok.
     * @param {AlapadatokDeleteArgs} args - Arguments to delete one Alapadatok.
     * @example
     * // Delete one Alapadatok
     * const Alapadatok = await prisma.alapadatok.delete({
     *   where: {
     *     // ... filter to delete one Alapadatok
     *   }
     * })
     * 
     */
    delete<T extends AlapadatokDeleteArgs>(args: SelectSubset<T, AlapadatokDeleteArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alapadatok.
     * @param {AlapadatokUpdateArgs} args - Arguments to update one Alapadatok.
     * @example
     * // Update one Alapadatok
     * const alapadatok = await prisma.alapadatok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlapadatokUpdateArgs>(args: SelectSubset<T, AlapadatokUpdateArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alapadatoks.
     * @param {AlapadatokDeleteManyArgs} args - Arguments to filter Alapadatoks to delete.
     * @example
     * // Delete a few Alapadatoks
     * const { count } = await prisma.alapadatok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlapadatokDeleteManyArgs>(args?: SelectSubset<T, AlapadatokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alapadatoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alapadatoks
     * const alapadatok = await prisma.alapadatok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlapadatokUpdateManyArgs>(args: SelectSubset<T, AlapadatokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alapadatoks and returns the data updated in the database.
     * @param {AlapadatokUpdateManyAndReturnArgs} args - Arguments to update many Alapadatoks.
     * @example
     * // Update many Alapadatoks
     * const alapadatok = await prisma.alapadatok.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alapadatoks and only return the `id`
     * const alapadatokWithIdOnly = await prisma.alapadatok.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlapadatokUpdateManyAndReturnArgs>(args: SelectSubset<T, AlapadatokUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alapadatok.
     * @param {AlapadatokUpsertArgs} args - Arguments to update or create a Alapadatok.
     * @example
     * // Update or create a Alapadatok
     * const alapadatok = await prisma.alapadatok.upsert({
     *   create: {
     *     // ... data to create a Alapadatok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alapadatok we want to update
     *   }
     * })
     */
    upsert<T extends AlapadatokUpsertArgs>(args: SelectSubset<T, AlapadatokUpsertArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alapadatoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokCountArgs} args - Arguments to filter Alapadatoks to count.
     * @example
     * // Count the number of Alapadatoks
     * const count = await prisma.alapadatok.count({
     *   where: {
     *     // ... the filter for the Alapadatoks we want to count
     *   }
     * })
    **/
    count<T extends AlapadatokCountArgs>(
      args?: Subset<T, AlapadatokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlapadatokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alapadatok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlapadatokAggregateArgs>(args: Subset<T, AlapadatokAggregateArgs>): Prisma.PrismaPromise<GetAlapadatokAggregateType<T>>

    /**
     * Group by Alapadatok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlapadatokGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlapadatokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlapadatokGroupByArgs['orderBy'] }
        : { orderBy?: AlapadatokGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlapadatokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlapadatokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alapadatok model
   */
  readonly fields: AlapadatokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alapadatok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlapadatokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanulo_letszam<T extends Alapadatok$tanulo_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$tanulo_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanar_letszam<T extends Alapadatok$tanar_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$tanar_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    felvettek_szama<T extends Alapadatok$felvettek_szamaArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$felvettek_szamaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alapadatok model
   */
  interface AlapadatokFieldRefs {
    readonly id: FieldRef<"Alapadatok", 'String'>
    readonly iskola_neve: FieldRef<"Alapadatok", 'String'>
    readonly intezmeny_tipus: FieldRef<"Alapadatok", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alapadatok findUnique
   */
  export type AlapadatokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * Filter, which Alapadatok to fetch.
     */
    where: AlapadatokWhereUniqueInput
  }

  /**
   * Alapadatok findUniqueOrThrow
   */
  export type AlapadatokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * Filter, which Alapadatok to fetch.
     */
    where: AlapadatokWhereUniqueInput
  }

  /**
   * Alapadatok findFirst
   */
  export type AlapadatokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * Filter, which Alapadatok to fetch.
     */
    where?: AlapadatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alapadatoks to fetch.
     */
    orderBy?: AlapadatokOrderByWithRelationInput | AlapadatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alapadatoks.
     */
    cursor?: AlapadatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alapadatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alapadatoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alapadatoks.
     */
    distinct?: AlapadatokScalarFieldEnum | AlapadatokScalarFieldEnum[]
  }

  /**
   * Alapadatok findFirstOrThrow
   */
  export type AlapadatokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * Filter, which Alapadatok to fetch.
     */
    where?: AlapadatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alapadatoks to fetch.
     */
    orderBy?: AlapadatokOrderByWithRelationInput | AlapadatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alapadatoks.
     */
    cursor?: AlapadatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alapadatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alapadatoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alapadatoks.
     */
    distinct?: AlapadatokScalarFieldEnum | AlapadatokScalarFieldEnum[]
  }

  /**
   * Alapadatok findMany
   */
  export type AlapadatokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * Filter, which Alapadatoks to fetch.
     */
    where?: AlapadatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alapadatoks to fetch.
     */
    orderBy?: AlapadatokOrderByWithRelationInput | AlapadatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alapadatoks.
     */
    cursor?: AlapadatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alapadatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alapadatoks.
     */
    skip?: number
    distinct?: AlapadatokScalarFieldEnum | AlapadatokScalarFieldEnum[]
  }

  /**
   * Alapadatok create
   */
  export type AlapadatokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * The data needed to create a Alapadatok.
     */
    data: XOR<AlapadatokCreateInput, AlapadatokUncheckedCreateInput>
  }

  /**
   * Alapadatok createMany
   */
  export type AlapadatokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alapadatoks.
     */
    data: AlapadatokCreateManyInput | AlapadatokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alapadatok createManyAndReturn
   */
  export type AlapadatokCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * The data used to create many Alapadatoks.
     */
    data: AlapadatokCreateManyInput | AlapadatokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alapadatok update
   */
  export type AlapadatokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * The data needed to update a Alapadatok.
     */
    data: XOR<AlapadatokUpdateInput, AlapadatokUncheckedUpdateInput>
    /**
     * Choose, which Alapadatok to update.
     */
    where: AlapadatokWhereUniqueInput
  }

  /**
   * Alapadatok updateMany
   */
  export type AlapadatokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alapadatoks.
     */
    data: XOR<AlapadatokUpdateManyMutationInput, AlapadatokUncheckedUpdateManyInput>
    /**
     * Filter which Alapadatoks to update
     */
    where?: AlapadatokWhereInput
    /**
     * Limit how many Alapadatoks to update.
     */
    limit?: number
  }

  /**
   * Alapadatok updateManyAndReturn
   */
  export type AlapadatokUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * The data used to update Alapadatoks.
     */
    data: XOR<AlapadatokUpdateManyMutationInput, AlapadatokUncheckedUpdateManyInput>
    /**
     * Filter which Alapadatoks to update
     */
    where?: AlapadatokWhereInput
    /**
     * Limit how many Alapadatoks to update.
     */
    limit?: number
  }

  /**
   * Alapadatok upsert
   */
  export type AlapadatokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * The filter to search for the Alapadatok to update in case it exists.
     */
    where: AlapadatokWhereUniqueInput
    /**
     * In case the Alapadatok found by the `where` argument doesn't exist, create a new Alapadatok with this data.
     */
    create: XOR<AlapadatokCreateInput, AlapadatokUncheckedCreateInput>
    /**
     * In case the Alapadatok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlapadatokUpdateInput, AlapadatokUncheckedUpdateInput>
  }

  /**
   * Alapadatok delete
   */
  export type AlapadatokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
    /**
     * Filter which Alapadatok to delete.
     */
    where: AlapadatokWhereUniqueInput
  }

  /**
   * Alapadatok deleteMany
   */
  export type AlapadatokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alapadatoks to delete
     */
    where?: AlapadatokWhereInput
    /**
     * Limit how many Alapadatoks to delete.
     */
    limit?: number
  }

  /**
   * Alapadatok.tanulo_letszam
   */
  export type Alapadatok$tanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    where?: Tanulo_LetszamWhereInput
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    cursor?: Tanulo_LetszamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tanulo_LetszamScalarFieldEnum | Tanulo_LetszamScalarFieldEnum[]
  }

  /**
   * Alapadatok.tanar_letszam
   */
  export type Alapadatok$tanar_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    where?: Tanar_LetszamWhereInput
    orderBy?: Tanar_LetszamOrderByWithRelationInput | Tanar_LetszamOrderByWithRelationInput[]
    cursor?: Tanar_LetszamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tanar_LetszamScalarFieldEnum | Tanar_LetszamScalarFieldEnum[]
  }

  /**
   * Alapadatok.felvettek_szama
   */
  export type Alapadatok$felvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    where?: Felvettek_SzamaWhereInput
    orderBy?: Felvettek_SzamaOrderByWithRelationInput | Felvettek_SzamaOrderByWithRelationInput[]
    cursor?: Felvettek_SzamaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Felvettek_SzamaScalarFieldEnum | Felvettek_SzamaScalarFieldEnum[]
  }

  /**
   * Alapadatok without action
   */
  export type AlapadatokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alapadatok
     */
    select?: AlapadatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alapadatok
     */
    omit?: AlapadatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlapadatokInclude<ExtArgs> | null
  }


  /**
   * Model Szakirany
   */

  export type AggregateSzakirany = {
    _count: SzakiranyCountAggregateOutputType | null
    _min: SzakiranyMinAggregateOutputType | null
    _max: SzakiranyMaxAggregateOutputType | null
  }

  export type SzakiranyMinAggregateOutputType = {
    id: string | null
    nev: string | null
  }

  export type SzakiranyMaxAggregateOutputType = {
    id: string | null
    nev: string | null
  }

  export type SzakiranyCountAggregateOutputType = {
    id: number
    nev: number
    _all: number
  }


  export type SzakiranyMinAggregateInputType = {
    id?: true
    nev?: true
  }

  export type SzakiranyMaxAggregateInputType = {
    id?: true
    nev?: true
  }

  export type SzakiranyCountAggregateInputType = {
    id?: true
    nev?: true
    _all?: true
  }

  export type SzakiranyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Szakirany to aggregate.
     */
    where?: SzakiranyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakiranies to fetch.
     */
    orderBy?: SzakiranyOrderByWithRelationInput | SzakiranyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SzakiranyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakiranies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakiranies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Szakiranies
    **/
    _count?: true | SzakiranyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SzakiranyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SzakiranyMaxAggregateInputType
  }

  export type GetSzakiranyAggregateType<T extends SzakiranyAggregateArgs> = {
        [P in keyof T & keyof AggregateSzakirany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSzakirany[P]>
      : GetScalarType<T[P], AggregateSzakirany[P]>
  }




  export type SzakiranyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SzakiranyWhereInput
    orderBy?: SzakiranyOrderByWithAggregationInput | SzakiranyOrderByWithAggregationInput[]
    by: SzakiranyScalarFieldEnum[] | SzakiranyScalarFieldEnum
    having?: SzakiranyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SzakiranyCountAggregateInputType | true
    _min?: SzakiranyMinAggregateInputType
    _max?: SzakiranyMaxAggregateInputType
  }

  export type SzakiranyGroupByOutputType = {
    id: string
    nev: string
    _count: SzakiranyCountAggregateOutputType | null
    _min: SzakiranyMinAggregateOutputType | null
    _max: SzakiranyMaxAggregateOutputType | null
  }

  type GetSzakiranyGroupByPayload<T extends SzakiranyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SzakiranyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SzakiranyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SzakiranyGroupByOutputType[P]>
            : GetScalarType<T[P], SzakiranyGroupByOutputType[P]>
        }
      >
    >


  export type SzakiranySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nev?: boolean
    tanulo_letszam?: boolean | Szakirany$tanulo_letszamArgs<ExtArgs>
    _count?: boolean | SzakiranyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["szakirany"]>

  export type SzakiranySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nev?: boolean
  }, ExtArgs["result"]["szakirany"]>

  export type SzakiranySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nev?: boolean
  }, ExtArgs["result"]["szakirany"]>

  export type SzakiranySelectScalar = {
    id?: boolean
    nev?: boolean
  }

  export type SzakiranyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nev", ExtArgs["result"]["szakirany"]>
  export type SzakiranyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | Szakirany$tanulo_letszamArgs<ExtArgs>
    _count?: boolean | SzakiranyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SzakiranyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SzakiranyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SzakiranyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Szakirany"
    objects: {
      tanulo_letszam: Prisma.$Tanulo_LetszamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nev: string
    }, ExtArgs["result"]["szakirany"]>
    composites: {}
  }

  type SzakiranyGetPayload<S extends boolean | null | undefined | SzakiranyDefaultArgs> = $Result.GetResult<Prisma.$SzakiranyPayload, S>

  type SzakiranyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SzakiranyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SzakiranyCountAggregateInputType | true
    }

  export interface SzakiranyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Szakirany'], meta: { name: 'Szakirany' } }
    /**
     * Find zero or one Szakirany that matches the filter.
     * @param {SzakiranyFindUniqueArgs} args - Arguments to find a Szakirany
     * @example
     * // Get one Szakirany
     * const szakirany = await prisma.szakirany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SzakiranyFindUniqueArgs>(args: SelectSubset<T, SzakiranyFindUniqueArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Szakirany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SzakiranyFindUniqueOrThrowArgs} args - Arguments to find a Szakirany
     * @example
     * // Get one Szakirany
     * const szakirany = await prisma.szakirany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SzakiranyFindUniqueOrThrowArgs>(args: SelectSubset<T, SzakiranyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Szakirany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyFindFirstArgs} args - Arguments to find a Szakirany
     * @example
     * // Get one Szakirany
     * const szakirany = await prisma.szakirany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SzakiranyFindFirstArgs>(args?: SelectSubset<T, SzakiranyFindFirstArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Szakirany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyFindFirstOrThrowArgs} args - Arguments to find a Szakirany
     * @example
     * // Get one Szakirany
     * const szakirany = await prisma.szakirany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SzakiranyFindFirstOrThrowArgs>(args?: SelectSubset<T, SzakiranyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Szakiranies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Szakiranies
     * const szakiranies = await prisma.szakirany.findMany()
     * 
     * // Get first 10 Szakiranies
     * const szakiranies = await prisma.szakirany.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const szakiranyWithIdOnly = await prisma.szakirany.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SzakiranyFindManyArgs>(args?: SelectSubset<T, SzakiranyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Szakirany.
     * @param {SzakiranyCreateArgs} args - Arguments to create a Szakirany.
     * @example
     * // Create one Szakirany
     * const Szakirany = await prisma.szakirany.create({
     *   data: {
     *     // ... data to create a Szakirany
     *   }
     * })
     * 
     */
    create<T extends SzakiranyCreateArgs>(args: SelectSubset<T, SzakiranyCreateArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Szakiranies.
     * @param {SzakiranyCreateManyArgs} args - Arguments to create many Szakiranies.
     * @example
     * // Create many Szakiranies
     * const szakirany = await prisma.szakirany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SzakiranyCreateManyArgs>(args?: SelectSubset<T, SzakiranyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Szakiranies and returns the data saved in the database.
     * @param {SzakiranyCreateManyAndReturnArgs} args - Arguments to create many Szakiranies.
     * @example
     * // Create many Szakiranies
     * const szakirany = await prisma.szakirany.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Szakiranies and only return the `id`
     * const szakiranyWithIdOnly = await prisma.szakirany.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SzakiranyCreateManyAndReturnArgs>(args?: SelectSubset<T, SzakiranyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Szakirany.
     * @param {SzakiranyDeleteArgs} args - Arguments to delete one Szakirany.
     * @example
     * // Delete one Szakirany
     * const Szakirany = await prisma.szakirany.delete({
     *   where: {
     *     // ... filter to delete one Szakirany
     *   }
     * })
     * 
     */
    delete<T extends SzakiranyDeleteArgs>(args: SelectSubset<T, SzakiranyDeleteArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Szakirany.
     * @param {SzakiranyUpdateArgs} args - Arguments to update one Szakirany.
     * @example
     * // Update one Szakirany
     * const szakirany = await prisma.szakirany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SzakiranyUpdateArgs>(args: SelectSubset<T, SzakiranyUpdateArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Szakiranies.
     * @param {SzakiranyDeleteManyArgs} args - Arguments to filter Szakiranies to delete.
     * @example
     * // Delete a few Szakiranies
     * const { count } = await prisma.szakirany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SzakiranyDeleteManyArgs>(args?: SelectSubset<T, SzakiranyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Szakiranies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Szakiranies
     * const szakirany = await prisma.szakirany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SzakiranyUpdateManyArgs>(args: SelectSubset<T, SzakiranyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Szakiranies and returns the data updated in the database.
     * @param {SzakiranyUpdateManyAndReturnArgs} args - Arguments to update many Szakiranies.
     * @example
     * // Update many Szakiranies
     * const szakirany = await prisma.szakirany.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Szakiranies and only return the `id`
     * const szakiranyWithIdOnly = await prisma.szakirany.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SzakiranyUpdateManyAndReturnArgs>(args: SelectSubset<T, SzakiranyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Szakirany.
     * @param {SzakiranyUpsertArgs} args - Arguments to update or create a Szakirany.
     * @example
     * // Update or create a Szakirany
     * const szakirany = await prisma.szakirany.upsert({
     *   create: {
     *     // ... data to create a Szakirany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Szakirany we want to update
     *   }
     * })
     */
    upsert<T extends SzakiranyUpsertArgs>(args: SelectSubset<T, SzakiranyUpsertArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Szakiranies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyCountArgs} args - Arguments to filter Szakiranies to count.
     * @example
     * // Count the number of Szakiranies
     * const count = await prisma.szakirany.count({
     *   where: {
     *     // ... the filter for the Szakiranies we want to count
     *   }
     * })
    **/
    count<T extends SzakiranyCountArgs>(
      args?: Subset<T, SzakiranyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SzakiranyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Szakirany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SzakiranyAggregateArgs>(args: Subset<T, SzakiranyAggregateArgs>): Prisma.PrismaPromise<GetSzakiranyAggregateType<T>>

    /**
     * Group by Szakirany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakiranyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SzakiranyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SzakiranyGroupByArgs['orderBy'] }
        : { orderBy?: SzakiranyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SzakiranyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSzakiranyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Szakirany model
   */
  readonly fields: SzakiranyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Szakirany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SzakiranyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanulo_letszam<T extends Szakirany$tanulo_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Szakirany$tanulo_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Szakirany model
   */
  interface SzakiranyFieldRefs {
    readonly id: FieldRef<"Szakirany", 'String'>
    readonly nev: FieldRef<"Szakirany", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Szakirany findUnique
   */
  export type SzakiranyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * Filter, which Szakirany to fetch.
     */
    where: SzakiranyWhereUniqueInput
  }

  /**
   * Szakirany findUniqueOrThrow
   */
  export type SzakiranyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * Filter, which Szakirany to fetch.
     */
    where: SzakiranyWhereUniqueInput
  }

  /**
   * Szakirany findFirst
   */
  export type SzakiranyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * Filter, which Szakirany to fetch.
     */
    where?: SzakiranyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakiranies to fetch.
     */
    orderBy?: SzakiranyOrderByWithRelationInput | SzakiranyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Szakiranies.
     */
    cursor?: SzakiranyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakiranies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakiranies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Szakiranies.
     */
    distinct?: SzakiranyScalarFieldEnum | SzakiranyScalarFieldEnum[]
  }

  /**
   * Szakirany findFirstOrThrow
   */
  export type SzakiranyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * Filter, which Szakirany to fetch.
     */
    where?: SzakiranyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakiranies to fetch.
     */
    orderBy?: SzakiranyOrderByWithRelationInput | SzakiranyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Szakiranies.
     */
    cursor?: SzakiranyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakiranies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakiranies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Szakiranies.
     */
    distinct?: SzakiranyScalarFieldEnum | SzakiranyScalarFieldEnum[]
  }

  /**
   * Szakirany findMany
   */
  export type SzakiranyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * Filter, which Szakiranies to fetch.
     */
    where?: SzakiranyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakiranies to fetch.
     */
    orderBy?: SzakiranyOrderByWithRelationInput | SzakiranyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Szakiranies.
     */
    cursor?: SzakiranyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakiranies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakiranies.
     */
    skip?: number
    distinct?: SzakiranyScalarFieldEnum | SzakiranyScalarFieldEnum[]
  }

  /**
   * Szakirany create
   */
  export type SzakiranyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * The data needed to create a Szakirany.
     */
    data: XOR<SzakiranyCreateInput, SzakiranyUncheckedCreateInput>
  }

  /**
   * Szakirany createMany
   */
  export type SzakiranyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Szakiranies.
     */
    data: SzakiranyCreateManyInput | SzakiranyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Szakirany createManyAndReturn
   */
  export type SzakiranyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * The data used to create many Szakiranies.
     */
    data: SzakiranyCreateManyInput | SzakiranyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Szakirany update
   */
  export type SzakiranyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * The data needed to update a Szakirany.
     */
    data: XOR<SzakiranyUpdateInput, SzakiranyUncheckedUpdateInput>
    /**
     * Choose, which Szakirany to update.
     */
    where: SzakiranyWhereUniqueInput
  }

  /**
   * Szakirany updateMany
   */
  export type SzakiranyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Szakiranies.
     */
    data: XOR<SzakiranyUpdateManyMutationInput, SzakiranyUncheckedUpdateManyInput>
    /**
     * Filter which Szakiranies to update
     */
    where?: SzakiranyWhereInput
    /**
     * Limit how many Szakiranies to update.
     */
    limit?: number
  }

  /**
   * Szakirany updateManyAndReturn
   */
  export type SzakiranyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * The data used to update Szakiranies.
     */
    data: XOR<SzakiranyUpdateManyMutationInput, SzakiranyUncheckedUpdateManyInput>
    /**
     * Filter which Szakiranies to update
     */
    where?: SzakiranyWhereInput
    /**
     * Limit how many Szakiranies to update.
     */
    limit?: number
  }

  /**
   * Szakirany upsert
   */
  export type SzakiranyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * The filter to search for the Szakirany to update in case it exists.
     */
    where: SzakiranyWhereUniqueInput
    /**
     * In case the Szakirany found by the `where` argument doesn't exist, create a new Szakirany with this data.
     */
    create: XOR<SzakiranyCreateInput, SzakiranyUncheckedCreateInput>
    /**
     * In case the Szakirany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SzakiranyUpdateInput, SzakiranyUncheckedUpdateInput>
  }

  /**
   * Szakirany delete
   */
  export type SzakiranyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
    /**
     * Filter which Szakirany to delete.
     */
    where: SzakiranyWhereUniqueInput
  }

  /**
   * Szakirany deleteMany
   */
  export type SzakiranyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Szakiranies to delete
     */
    where?: SzakiranyWhereInput
    /**
     * Limit how many Szakiranies to delete.
     */
    limit?: number
  }

  /**
   * Szakirany.tanulo_letszam
   */
  export type Szakirany$tanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    where?: Tanulo_LetszamWhereInput
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    cursor?: Tanulo_LetszamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tanulo_LetszamScalarFieldEnum | Tanulo_LetszamScalarFieldEnum[]
  }

  /**
   * Szakirany without action
   */
  export type SzakiranyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakirany
     */
    select?: SzakiranySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakirany
     */
    omit?: SzakiranyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakiranyInclude<ExtArgs> | null
  }


  /**
   * Model Szakma
   */

  export type AggregateSzakma = {
    _count: SzakmaCountAggregateOutputType | null
    _min: SzakmaMinAggregateOutputType | null
    _max: SzakmaMaxAggregateOutputType | null
  }

  export type SzakmaMinAggregateOutputType = {
    id: string | null
    nev: string | null
  }

  export type SzakmaMaxAggregateOutputType = {
    id: string | null
    nev: string | null
  }

  export type SzakmaCountAggregateOutputType = {
    id: number
    nev: number
    _all: number
  }


  export type SzakmaMinAggregateInputType = {
    id?: true
    nev?: true
  }

  export type SzakmaMaxAggregateInputType = {
    id?: true
    nev?: true
  }

  export type SzakmaCountAggregateInputType = {
    id?: true
    nev?: true
    _all?: true
  }

  export type SzakmaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Szakma to aggregate.
     */
    where?: SzakmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakmas to fetch.
     */
    orderBy?: SzakmaOrderByWithRelationInput | SzakmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SzakmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Szakmas
    **/
    _count?: true | SzakmaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SzakmaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SzakmaMaxAggregateInputType
  }

  export type GetSzakmaAggregateType<T extends SzakmaAggregateArgs> = {
        [P in keyof T & keyof AggregateSzakma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSzakma[P]>
      : GetScalarType<T[P], AggregateSzakma[P]>
  }




  export type SzakmaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SzakmaWhereInput
    orderBy?: SzakmaOrderByWithAggregationInput | SzakmaOrderByWithAggregationInput[]
    by: SzakmaScalarFieldEnum[] | SzakmaScalarFieldEnum
    having?: SzakmaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SzakmaCountAggregateInputType | true
    _min?: SzakmaMinAggregateInputType
    _max?: SzakmaMaxAggregateInputType
  }

  export type SzakmaGroupByOutputType = {
    id: string
    nev: string
    _count: SzakmaCountAggregateOutputType | null
    _min: SzakmaMinAggregateOutputType | null
    _max: SzakmaMaxAggregateOutputType | null
  }

  type GetSzakmaGroupByPayload<T extends SzakmaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SzakmaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SzakmaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SzakmaGroupByOutputType[P]>
            : GetScalarType<T[P], SzakmaGroupByOutputType[P]>
        }
      >
    >


  export type SzakmaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nev?: boolean
    tanulo_letszam?: boolean | Szakma$tanulo_letszamArgs<ExtArgs>
    felvettek_szama?: boolean | Szakma$felvettek_szamaArgs<ExtArgs>
    _count?: boolean | SzakmaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["szakma"]>

  export type SzakmaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nev?: boolean
  }, ExtArgs["result"]["szakma"]>

  export type SzakmaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nev?: boolean
  }, ExtArgs["result"]["szakma"]>

  export type SzakmaSelectScalar = {
    id?: boolean
    nev?: boolean
  }

  export type SzakmaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nev", ExtArgs["result"]["szakma"]>
  export type SzakmaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | Szakma$tanulo_letszamArgs<ExtArgs>
    felvettek_szama?: boolean | Szakma$felvettek_szamaArgs<ExtArgs>
    _count?: boolean | SzakmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SzakmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SzakmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SzakmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Szakma"
    objects: {
      tanulo_letszam: Prisma.$Tanulo_LetszamPayload<ExtArgs>[]
      felvettek_szama: Prisma.$Felvettek_SzamaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nev: string
    }, ExtArgs["result"]["szakma"]>
    composites: {}
  }

  type SzakmaGetPayload<S extends boolean | null | undefined | SzakmaDefaultArgs> = $Result.GetResult<Prisma.$SzakmaPayload, S>

  type SzakmaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SzakmaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SzakmaCountAggregateInputType | true
    }

  export interface SzakmaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Szakma'], meta: { name: 'Szakma' } }
    /**
     * Find zero or one Szakma that matches the filter.
     * @param {SzakmaFindUniqueArgs} args - Arguments to find a Szakma
     * @example
     * // Get one Szakma
     * const szakma = await prisma.szakma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SzakmaFindUniqueArgs>(args: SelectSubset<T, SzakmaFindUniqueArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Szakma that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SzakmaFindUniqueOrThrowArgs} args - Arguments to find a Szakma
     * @example
     * // Get one Szakma
     * const szakma = await prisma.szakma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SzakmaFindUniqueOrThrowArgs>(args: SelectSubset<T, SzakmaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Szakma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaFindFirstArgs} args - Arguments to find a Szakma
     * @example
     * // Get one Szakma
     * const szakma = await prisma.szakma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SzakmaFindFirstArgs>(args?: SelectSubset<T, SzakmaFindFirstArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Szakma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaFindFirstOrThrowArgs} args - Arguments to find a Szakma
     * @example
     * // Get one Szakma
     * const szakma = await prisma.szakma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SzakmaFindFirstOrThrowArgs>(args?: SelectSubset<T, SzakmaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Szakmas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Szakmas
     * const szakmas = await prisma.szakma.findMany()
     * 
     * // Get first 10 Szakmas
     * const szakmas = await prisma.szakma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const szakmaWithIdOnly = await prisma.szakma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SzakmaFindManyArgs>(args?: SelectSubset<T, SzakmaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Szakma.
     * @param {SzakmaCreateArgs} args - Arguments to create a Szakma.
     * @example
     * // Create one Szakma
     * const Szakma = await prisma.szakma.create({
     *   data: {
     *     // ... data to create a Szakma
     *   }
     * })
     * 
     */
    create<T extends SzakmaCreateArgs>(args: SelectSubset<T, SzakmaCreateArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Szakmas.
     * @param {SzakmaCreateManyArgs} args - Arguments to create many Szakmas.
     * @example
     * // Create many Szakmas
     * const szakma = await prisma.szakma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SzakmaCreateManyArgs>(args?: SelectSubset<T, SzakmaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Szakmas and returns the data saved in the database.
     * @param {SzakmaCreateManyAndReturnArgs} args - Arguments to create many Szakmas.
     * @example
     * // Create many Szakmas
     * const szakma = await prisma.szakma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Szakmas and only return the `id`
     * const szakmaWithIdOnly = await prisma.szakma.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SzakmaCreateManyAndReturnArgs>(args?: SelectSubset<T, SzakmaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Szakma.
     * @param {SzakmaDeleteArgs} args - Arguments to delete one Szakma.
     * @example
     * // Delete one Szakma
     * const Szakma = await prisma.szakma.delete({
     *   where: {
     *     // ... filter to delete one Szakma
     *   }
     * })
     * 
     */
    delete<T extends SzakmaDeleteArgs>(args: SelectSubset<T, SzakmaDeleteArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Szakma.
     * @param {SzakmaUpdateArgs} args - Arguments to update one Szakma.
     * @example
     * // Update one Szakma
     * const szakma = await prisma.szakma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SzakmaUpdateArgs>(args: SelectSubset<T, SzakmaUpdateArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Szakmas.
     * @param {SzakmaDeleteManyArgs} args - Arguments to filter Szakmas to delete.
     * @example
     * // Delete a few Szakmas
     * const { count } = await prisma.szakma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SzakmaDeleteManyArgs>(args?: SelectSubset<T, SzakmaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Szakmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Szakmas
     * const szakma = await prisma.szakma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SzakmaUpdateManyArgs>(args: SelectSubset<T, SzakmaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Szakmas and returns the data updated in the database.
     * @param {SzakmaUpdateManyAndReturnArgs} args - Arguments to update many Szakmas.
     * @example
     * // Update many Szakmas
     * const szakma = await prisma.szakma.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Szakmas and only return the `id`
     * const szakmaWithIdOnly = await prisma.szakma.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SzakmaUpdateManyAndReturnArgs>(args: SelectSubset<T, SzakmaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Szakma.
     * @param {SzakmaUpsertArgs} args - Arguments to update or create a Szakma.
     * @example
     * // Update or create a Szakma
     * const szakma = await prisma.szakma.upsert({
     *   create: {
     *     // ... data to create a Szakma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Szakma we want to update
     *   }
     * })
     */
    upsert<T extends SzakmaUpsertArgs>(args: SelectSubset<T, SzakmaUpsertArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Szakmas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaCountArgs} args - Arguments to filter Szakmas to count.
     * @example
     * // Count the number of Szakmas
     * const count = await prisma.szakma.count({
     *   where: {
     *     // ... the filter for the Szakmas we want to count
     *   }
     * })
    **/
    count<T extends SzakmaCountArgs>(
      args?: Subset<T, SzakmaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SzakmaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Szakma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SzakmaAggregateArgs>(args: Subset<T, SzakmaAggregateArgs>): Prisma.PrismaPromise<GetSzakmaAggregateType<T>>

    /**
     * Group by Szakma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SzakmaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SzakmaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SzakmaGroupByArgs['orderBy'] }
        : { orderBy?: SzakmaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SzakmaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSzakmaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Szakma model
   */
  readonly fields: SzakmaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Szakma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SzakmaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanulo_letszam<T extends Szakma$tanulo_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Szakma$tanulo_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    felvettek_szama<T extends Szakma$felvettek_szamaArgs<ExtArgs> = {}>(args?: Subset<T, Szakma$felvettek_szamaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Szakma model
   */
  interface SzakmaFieldRefs {
    readonly id: FieldRef<"Szakma", 'String'>
    readonly nev: FieldRef<"Szakma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Szakma findUnique
   */
  export type SzakmaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * Filter, which Szakma to fetch.
     */
    where: SzakmaWhereUniqueInput
  }

  /**
   * Szakma findUniqueOrThrow
   */
  export type SzakmaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * Filter, which Szakma to fetch.
     */
    where: SzakmaWhereUniqueInput
  }

  /**
   * Szakma findFirst
   */
  export type SzakmaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * Filter, which Szakma to fetch.
     */
    where?: SzakmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakmas to fetch.
     */
    orderBy?: SzakmaOrderByWithRelationInput | SzakmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Szakmas.
     */
    cursor?: SzakmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Szakmas.
     */
    distinct?: SzakmaScalarFieldEnum | SzakmaScalarFieldEnum[]
  }

  /**
   * Szakma findFirstOrThrow
   */
  export type SzakmaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * Filter, which Szakma to fetch.
     */
    where?: SzakmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakmas to fetch.
     */
    orderBy?: SzakmaOrderByWithRelationInput | SzakmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Szakmas.
     */
    cursor?: SzakmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakmas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Szakmas.
     */
    distinct?: SzakmaScalarFieldEnum | SzakmaScalarFieldEnum[]
  }

  /**
   * Szakma findMany
   */
  export type SzakmaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * Filter, which Szakmas to fetch.
     */
    where?: SzakmaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Szakmas to fetch.
     */
    orderBy?: SzakmaOrderByWithRelationInput | SzakmaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Szakmas.
     */
    cursor?: SzakmaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Szakmas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Szakmas.
     */
    skip?: number
    distinct?: SzakmaScalarFieldEnum | SzakmaScalarFieldEnum[]
  }

  /**
   * Szakma create
   */
  export type SzakmaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * The data needed to create a Szakma.
     */
    data: XOR<SzakmaCreateInput, SzakmaUncheckedCreateInput>
  }

  /**
   * Szakma createMany
   */
  export type SzakmaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Szakmas.
     */
    data: SzakmaCreateManyInput | SzakmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Szakma createManyAndReturn
   */
  export type SzakmaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * The data used to create many Szakmas.
     */
    data: SzakmaCreateManyInput | SzakmaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Szakma update
   */
  export type SzakmaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * The data needed to update a Szakma.
     */
    data: XOR<SzakmaUpdateInput, SzakmaUncheckedUpdateInput>
    /**
     * Choose, which Szakma to update.
     */
    where: SzakmaWhereUniqueInput
  }

  /**
   * Szakma updateMany
   */
  export type SzakmaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Szakmas.
     */
    data: XOR<SzakmaUpdateManyMutationInput, SzakmaUncheckedUpdateManyInput>
    /**
     * Filter which Szakmas to update
     */
    where?: SzakmaWhereInput
    /**
     * Limit how many Szakmas to update.
     */
    limit?: number
  }

  /**
   * Szakma updateManyAndReturn
   */
  export type SzakmaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * The data used to update Szakmas.
     */
    data: XOR<SzakmaUpdateManyMutationInput, SzakmaUncheckedUpdateManyInput>
    /**
     * Filter which Szakmas to update
     */
    where?: SzakmaWhereInput
    /**
     * Limit how many Szakmas to update.
     */
    limit?: number
  }

  /**
   * Szakma upsert
   */
  export type SzakmaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * The filter to search for the Szakma to update in case it exists.
     */
    where: SzakmaWhereUniqueInput
    /**
     * In case the Szakma found by the `where` argument doesn't exist, create a new Szakma with this data.
     */
    create: XOR<SzakmaCreateInput, SzakmaUncheckedCreateInput>
    /**
     * In case the Szakma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SzakmaUpdateInput, SzakmaUncheckedUpdateInput>
  }

  /**
   * Szakma delete
   */
  export type SzakmaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
    /**
     * Filter which Szakma to delete.
     */
    where: SzakmaWhereUniqueInput
  }

  /**
   * Szakma deleteMany
   */
  export type SzakmaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Szakmas to delete
     */
    where?: SzakmaWhereInput
    /**
     * Limit how many Szakmas to delete.
     */
    limit?: number
  }

  /**
   * Szakma.tanulo_letszam
   */
  export type Szakma$tanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    where?: Tanulo_LetszamWhereInput
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    cursor?: Tanulo_LetszamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tanulo_LetszamScalarFieldEnum | Tanulo_LetszamScalarFieldEnum[]
  }

  /**
   * Szakma.felvettek_szama
   */
  export type Szakma$felvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    where?: Felvettek_SzamaWhereInput
    orderBy?: Felvettek_SzamaOrderByWithRelationInput | Felvettek_SzamaOrderByWithRelationInput[]
    cursor?: Felvettek_SzamaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Felvettek_SzamaScalarFieldEnum | Felvettek_SzamaScalarFieldEnum[]
  }

  /**
   * Szakma without action
   */
  export type SzakmaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Szakma
     */
    select?: SzakmaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Szakma
     */
    omit?: SzakmaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SzakmaInclude<ExtArgs> | null
  }


  /**
   * Model Tanulo_Letszam
   */

  export type AggregateTanulo_Letszam = {
    _count: Tanulo_LetszamCountAggregateOutputType | null
    _avg: Tanulo_LetszamAvgAggregateOutputType | null
    _sum: Tanulo_LetszamSumAggregateOutputType | null
    _min: Tanulo_LetszamMinAggregateOutputType | null
    _max: Tanulo_LetszamMaxAggregateOutputType | null
  }

  export type Tanulo_LetszamAvgAggregateOutputType = {
    tanev_kezdete: number | null
    jogv_tipus: number | null
    letszam: number | null
  }

  export type Tanulo_LetszamSumAggregateOutputType = {
    tanev_kezdete: number | null
    jogv_tipus: number | null
    letszam: number | null
  }

  export type Tanulo_LetszamMinAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    jogv_tipus: number | null
    letszam: number | null
    szakirany_id: string | null
    szakma_id: string | null
  }

  export type Tanulo_LetszamMaxAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    jogv_tipus: number | null
    letszam: number | null
    szakirany_id: string | null
    szakma_id: string | null
  }

  export type Tanulo_LetszamCountAggregateOutputType = {
    id: number
    alapadatok_id: number
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: number
    szakma_id: number
    _all: number
  }


  export type Tanulo_LetszamAvgAggregateInputType = {
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
  }

  export type Tanulo_LetszamSumAggregateInputType = {
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
  }

  export type Tanulo_LetszamMinAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
    szakirany_id?: true
    szakma_id?: true
  }

  export type Tanulo_LetszamMaxAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
    szakirany_id?: true
    szakma_id?: true
  }

  export type Tanulo_LetszamCountAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
    szakirany_id?: true
    szakma_id?: true
    _all?: true
  }

  export type Tanulo_LetszamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanulo_Letszam to aggregate.
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanulo_Letszams to fetch.
     */
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tanulo_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanulo_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanulo_Letszams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tanulo_Letszams
    **/
    _count?: true | Tanulo_LetszamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tanulo_LetszamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tanulo_LetszamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tanulo_LetszamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tanulo_LetszamMaxAggregateInputType
  }

  export type GetTanulo_LetszamAggregateType<T extends Tanulo_LetszamAggregateArgs> = {
        [P in keyof T & keyof AggregateTanulo_Letszam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTanulo_Letszam[P]>
      : GetScalarType<T[P], AggregateTanulo_Letszam[P]>
  }




  export type Tanulo_LetszamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanulo_LetszamWhereInput
    orderBy?: Tanulo_LetszamOrderByWithAggregationInput | Tanulo_LetszamOrderByWithAggregationInput[]
    by: Tanulo_LetszamScalarFieldEnum[] | Tanulo_LetszamScalarFieldEnum
    having?: Tanulo_LetszamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tanulo_LetszamCountAggregateInputType | true
    _avg?: Tanulo_LetszamAvgAggregateInputType
    _sum?: Tanulo_LetszamSumAggregateInputType
    _min?: Tanulo_LetszamMinAggregateInputType
    _max?: Tanulo_LetszamMaxAggregateInputType
  }

  export type Tanulo_LetszamGroupByOutputType = {
    id: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
    _count: Tanulo_LetszamCountAggregateOutputType | null
    _avg: Tanulo_LetszamAvgAggregateOutputType | null
    _sum: Tanulo_LetszamSumAggregateOutputType | null
    _min: Tanulo_LetszamMinAggregateOutputType | null
    _max: Tanulo_LetszamMaxAggregateOutputType | null
  }

  type GetTanulo_LetszamGroupByPayload<T extends Tanulo_LetszamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tanulo_LetszamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tanulo_LetszamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tanulo_LetszamGroupByOutputType[P]>
            : GetScalarType<T[P], Tanulo_LetszamGroupByOutputType[P]>
        }
      >
    >


  export type Tanulo_LetszamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    jogv_tipus?: boolean
    letszam?: boolean
    szakirany_id?: boolean
    szakma_id?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakirany?: boolean | SzakiranyDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanulo_Letszam"]>

  export type Tanulo_LetszamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    jogv_tipus?: boolean
    letszam?: boolean
    szakirany_id?: boolean
    szakma_id?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakirany?: boolean | SzakiranyDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanulo_Letszam"]>

  export type Tanulo_LetszamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    jogv_tipus?: boolean
    letszam?: boolean
    szakirany_id?: boolean
    szakma_id?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakirany?: boolean | SzakiranyDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanulo_Letszam"]>

  export type Tanulo_LetszamSelectScalar = {
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    jogv_tipus?: boolean
    letszam?: boolean
    szakirany_id?: boolean
    szakma_id?: boolean
  }

  export type Tanulo_LetszamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alapadatok_id" | "tanev_kezdete" | "jogv_tipus" | "letszam" | "szakirany_id" | "szakma_id", ExtArgs["result"]["tanulo_Letszam"]>
  export type Tanulo_LetszamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakirany?: boolean | SzakiranyDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }
  export type Tanulo_LetszamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakirany?: boolean | SzakiranyDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }
  export type Tanulo_LetszamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakirany?: boolean | SzakiranyDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }

  export type $Tanulo_LetszamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tanulo_Letszam"
    objects: {
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs>
      szakirany: Prisma.$SzakiranyPayload<ExtArgs>
      szakma: Prisma.$SzakmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alapadatok_id: string
      tanev_kezdete: number
      jogv_tipus: number
      letszam: number
      szakirany_id: string
      szakma_id: string
    }, ExtArgs["result"]["tanulo_Letszam"]>
    composites: {}
  }

  type Tanulo_LetszamGetPayload<S extends boolean | null | undefined | Tanulo_LetszamDefaultArgs> = $Result.GetResult<Prisma.$Tanulo_LetszamPayload, S>

  type Tanulo_LetszamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tanulo_LetszamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tanulo_LetszamCountAggregateInputType | true
    }

  export interface Tanulo_LetszamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tanulo_Letszam'], meta: { name: 'Tanulo_Letszam' } }
    /**
     * Find zero or one Tanulo_Letszam that matches the filter.
     * @param {Tanulo_LetszamFindUniqueArgs} args - Arguments to find a Tanulo_Letszam
     * @example
     * // Get one Tanulo_Letszam
     * const tanulo_Letszam = await prisma.tanulo_Letszam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tanulo_LetszamFindUniqueArgs>(args: SelectSubset<T, Tanulo_LetszamFindUniqueArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tanulo_Letszam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tanulo_LetszamFindUniqueOrThrowArgs} args - Arguments to find a Tanulo_Letszam
     * @example
     * // Get one Tanulo_Letszam
     * const tanulo_Letszam = await prisma.tanulo_Letszam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tanulo_LetszamFindUniqueOrThrowArgs>(args: SelectSubset<T, Tanulo_LetszamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanulo_Letszam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamFindFirstArgs} args - Arguments to find a Tanulo_Letszam
     * @example
     * // Get one Tanulo_Letszam
     * const tanulo_Letszam = await prisma.tanulo_Letszam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tanulo_LetszamFindFirstArgs>(args?: SelectSubset<T, Tanulo_LetszamFindFirstArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanulo_Letszam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamFindFirstOrThrowArgs} args - Arguments to find a Tanulo_Letszam
     * @example
     * // Get one Tanulo_Letszam
     * const tanulo_Letszam = await prisma.tanulo_Letszam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tanulo_LetszamFindFirstOrThrowArgs>(args?: SelectSubset<T, Tanulo_LetszamFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tanulo_Letszams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tanulo_Letszams
     * const tanulo_Letszams = await prisma.tanulo_Letszam.findMany()
     * 
     * // Get first 10 Tanulo_Letszams
     * const tanulo_Letszams = await prisma.tanulo_Letszam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tanulo_LetszamWithIdOnly = await prisma.tanulo_Letszam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tanulo_LetszamFindManyArgs>(args?: SelectSubset<T, Tanulo_LetszamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tanulo_Letszam.
     * @param {Tanulo_LetszamCreateArgs} args - Arguments to create a Tanulo_Letszam.
     * @example
     * // Create one Tanulo_Letszam
     * const Tanulo_Letszam = await prisma.tanulo_Letszam.create({
     *   data: {
     *     // ... data to create a Tanulo_Letszam
     *   }
     * })
     * 
     */
    create<T extends Tanulo_LetszamCreateArgs>(args: SelectSubset<T, Tanulo_LetszamCreateArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tanulo_Letszams.
     * @param {Tanulo_LetszamCreateManyArgs} args - Arguments to create many Tanulo_Letszams.
     * @example
     * // Create many Tanulo_Letszams
     * const tanulo_Letszam = await prisma.tanulo_Letszam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tanulo_LetszamCreateManyArgs>(args?: SelectSubset<T, Tanulo_LetszamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tanulo_Letszams and returns the data saved in the database.
     * @param {Tanulo_LetszamCreateManyAndReturnArgs} args - Arguments to create many Tanulo_Letszams.
     * @example
     * // Create many Tanulo_Letszams
     * const tanulo_Letszam = await prisma.tanulo_Letszam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tanulo_Letszams and only return the `id`
     * const tanulo_LetszamWithIdOnly = await prisma.tanulo_Letszam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Tanulo_LetszamCreateManyAndReturnArgs>(args?: SelectSubset<T, Tanulo_LetszamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tanulo_Letszam.
     * @param {Tanulo_LetszamDeleteArgs} args - Arguments to delete one Tanulo_Letszam.
     * @example
     * // Delete one Tanulo_Letszam
     * const Tanulo_Letszam = await prisma.tanulo_Letszam.delete({
     *   where: {
     *     // ... filter to delete one Tanulo_Letszam
     *   }
     * })
     * 
     */
    delete<T extends Tanulo_LetszamDeleteArgs>(args: SelectSubset<T, Tanulo_LetszamDeleteArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tanulo_Letszam.
     * @param {Tanulo_LetszamUpdateArgs} args - Arguments to update one Tanulo_Letszam.
     * @example
     * // Update one Tanulo_Letszam
     * const tanulo_Letszam = await prisma.tanulo_Letszam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tanulo_LetszamUpdateArgs>(args: SelectSubset<T, Tanulo_LetszamUpdateArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tanulo_Letszams.
     * @param {Tanulo_LetszamDeleteManyArgs} args - Arguments to filter Tanulo_Letszams to delete.
     * @example
     * // Delete a few Tanulo_Letszams
     * const { count } = await prisma.tanulo_Letszam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tanulo_LetszamDeleteManyArgs>(args?: SelectSubset<T, Tanulo_LetszamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanulo_Letszams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tanulo_Letszams
     * const tanulo_Letszam = await prisma.tanulo_Letszam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tanulo_LetszamUpdateManyArgs>(args: SelectSubset<T, Tanulo_LetszamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanulo_Letszams and returns the data updated in the database.
     * @param {Tanulo_LetszamUpdateManyAndReturnArgs} args - Arguments to update many Tanulo_Letszams.
     * @example
     * // Update many Tanulo_Letszams
     * const tanulo_Letszam = await prisma.tanulo_Letszam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tanulo_Letszams and only return the `id`
     * const tanulo_LetszamWithIdOnly = await prisma.tanulo_Letszam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Tanulo_LetszamUpdateManyAndReturnArgs>(args: SelectSubset<T, Tanulo_LetszamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tanulo_Letszam.
     * @param {Tanulo_LetszamUpsertArgs} args - Arguments to update or create a Tanulo_Letszam.
     * @example
     * // Update or create a Tanulo_Letszam
     * const tanulo_Letszam = await prisma.tanulo_Letszam.upsert({
     *   create: {
     *     // ... data to create a Tanulo_Letszam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tanulo_Letszam we want to update
     *   }
     * })
     */
    upsert<T extends Tanulo_LetszamUpsertArgs>(args: SelectSubset<T, Tanulo_LetszamUpsertArgs<ExtArgs>>): Prisma__Tanulo_LetszamClient<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tanulo_Letszams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamCountArgs} args - Arguments to filter Tanulo_Letszams to count.
     * @example
     * // Count the number of Tanulo_Letszams
     * const count = await prisma.tanulo_Letszam.count({
     *   where: {
     *     // ... the filter for the Tanulo_Letszams we want to count
     *   }
     * })
    **/
    count<T extends Tanulo_LetszamCountArgs>(
      args?: Subset<T, Tanulo_LetszamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tanulo_LetszamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tanulo_Letszam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tanulo_LetszamAggregateArgs>(args: Subset<T, Tanulo_LetszamAggregateArgs>): Prisma.PrismaPromise<GetTanulo_LetszamAggregateType<T>>

    /**
     * Group by Tanulo_Letszam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanulo_LetszamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tanulo_LetszamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tanulo_LetszamGroupByArgs['orderBy'] }
        : { orderBy?: Tanulo_LetszamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tanulo_LetszamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTanulo_LetszamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tanulo_Letszam model
   */
  readonly fields: Tanulo_LetszamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tanulo_Letszam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tanulo_LetszamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alapadatok<T extends AlapadatokDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlapadatokDefaultArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    szakirany<T extends SzakiranyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SzakiranyDefaultArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    szakma<T extends SzakmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SzakmaDefaultArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tanulo_Letszam model
   */
  interface Tanulo_LetszamFieldRefs {
    readonly id: FieldRef<"Tanulo_Letszam", 'String'>
    readonly alapadatok_id: FieldRef<"Tanulo_Letszam", 'String'>
    readonly tanev_kezdete: FieldRef<"Tanulo_Letszam", 'Int'>
    readonly jogv_tipus: FieldRef<"Tanulo_Letszam", 'Int'>
    readonly letszam: FieldRef<"Tanulo_Letszam", 'Int'>
    readonly szakirany_id: FieldRef<"Tanulo_Letszam", 'String'>
    readonly szakma_id: FieldRef<"Tanulo_Letszam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tanulo_Letszam findUnique
   */
  export type Tanulo_LetszamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanulo_Letszam to fetch.
     */
    where: Tanulo_LetszamWhereUniqueInput
  }

  /**
   * Tanulo_Letszam findUniqueOrThrow
   */
  export type Tanulo_LetszamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanulo_Letszam to fetch.
     */
    where: Tanulo_LetszamWhereUniqueInput
  }

  /**
   * Tanulo_Letszam findFirst
   */
  export type Tanulo_LetszamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanulo_Letszam to fetch.
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanulo_Letszams to fetch.
     */
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanulo_Letszams.
     */
    cursor?: Tanulo_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanulo_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanulo_Letszams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanulo_Letszams.
     */
    distinct?: Tanulo_LetszamScalarFieldEnum | Tanulo_LetszamScalarFieldEnum[]
  }

  /**
   * Tanulo_Letszam findFirstOrThrow
   */
  export type Tanulo_LetszamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanulo_Letszam to fetch.
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanulo_Letszams to fetch.
     */
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanulo_Letszams.
     */
    cursor?: Tanulo_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanulo_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanulo_Letszams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanulo_Letszams.
     */
    distinct?: Tanulo_LetszamScalarFieldEnum | Tanulo_LetszamScalarFieldEnum[]
  }

  /**
   * Tanulo_Letszam findMany
   */
  export type Tanulo_LetszamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanulo_Letszams to fetch.
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanulo_Letszams to fetch.
     */
    orderBy?: Tanulo_LetszamOrderByWithRelationInput | Tanulo_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tanulo_Letszams.
     */
    cursor?: Tanulo_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanulo_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanulo_Letszams.
     */
    skip?: number
    distinct?: Tanulo_LetszamScalarFieldEnum | Tanulo_LetszamScalarFieldEnum[]
  }

  /**
   * Tanulo_Letszam create
   */
  export type Tanulo_LetszamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * The data needed to create a Tanulo_Letszam.
     */
    data: XOR<Tanulo_LetszamCreateInput, Tanulo_LetszamUncheckedCreateInput>
  }

  /**
   * Tanulo_Letszam createMany
   */
  export type Tanulo_LetszamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tanulo_Letszams.
     */
    data: Tanulo_LetszamCreateManyInput | Tanulo_LetszamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tanulo_Letszam createManyAndReturn
   */
  export type Tanulo_LetszamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * The data used to create many Tanulo_Letszams.
     */
    data: Tanulo_LetszamCreateManyInput | Tanulo_LetszamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanulo_Letszam update
   */
  export type Tanulo_LetszamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * The data needed to update a Tanulo_Letszam.
     */
    data: XOR<Tanulo_LetszamUpdateInput, Tanulo_LetszamUncheckedUpdateInput>
    /**
     * Choose, which Tanulo_Letszam to update.
     */
    where: Tanulo_LetszamWhereUniqueInput
  }

  /**
   * Tanulo_Letszam updateMany
   */
  export type Tanulo_LetszamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tanulo_Letszams.
     */
    data: XOR<Tanulo_LetszamUpdateManyMutationInput, Tanulo_LetszamUncheckedUpdateManyInput>
    /**
     * Filter which Tanulo_Letszams to update
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * Limit how many Tanulo_Letszams to update.
     */
    limit?: number
  }

  /**
   * Tanulo_Letszam updateManyAndReturn
   */
  export type Tanulo_LetszamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * The data used to update Tanulo_Letszams.
     */
    data: XOR<Tanulo_LetszamUpdateManyMutationInput, Tanulo_LetszamUncheckedUpdateManyInput>
    /**
     * Filter which Tanulo_Letszams to update
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * Limit how many Tanulo_Letszams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanulo_Letszam upsert
   */
  export type Tanulo_LetszamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * The filter to search for the Tanulo_Letszam to update in case it exists.
     */
    where: Tanulo_LetszamWhereUniqueInput
    /**
     * In case the Tanulo_Letszam found by the `where` argument doesn't exist, create a new Tanulo_Letszam with this data.
     */
    create: XOR<Tanulo_LetszamCreateInput, Tanulo_LetszamUncheckedCreateInput>
    /**
     * In case the Tanulo_Letszam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tanulo_LetszamUpdateInput, Tanulo_LetszamUncheckedUpdateInput>
  }

  /**
   * Tanulo_Letszam delete
   */
  export type Tanulo_LetszamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
    /**
     * Filter which Tanulo_Letszam to delete.
     */
    where: Tanulo_LetszamWhereUniqueInput
  }

  /**
   * Tanulo_Letszam deleteMany
   */
  export type Tanulo_LetszamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanulo_Letszams to delete
     */
    where?: Tanulo_LetszamWhereInput
    /**
     * Limit how many Tanulo_Letszams to delete.
     */
    limit?: number
  }

  /**
   * Tanulo_Letszam without action
   */
  export type Tanulo_LetszamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanulo_Letszam
     */
    select?: Tanulo_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanulo_Letszam
     */
    omit?: Tanulo_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanulo_LetszamInclude<ExtArgs> | null
  }


  /**
   * Model Tanar_Letszam
   */

  export type AggregateTanar_Letszam = {
    _count: Tanar_LetszamCountAggregateOutputType | null
    _avg: Tanar_LetszamAvgAggregateOutputType | null
    _sum: Tanar_LetszamSumAggregateOutputType | null
    _min: Tanar_LetszamMinAggregateOutputType | null
    _max: Tanar_LetszamMaxAggregateOutputType | null
  }

  export type Tanar_LetszamAvgAggregateOutputType = {
    tanev_kezdete: number | null
    letszam: number | null
  }

  export type Tanar_LetszamSumAggregateOutputType = {
    tanev_kezdete: number | null
    letszam: number | null
  }

  export type Tanar_LetszamMinAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    letszam: number | null
  }

  export type Tanar_LetszamMaxAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    letszam: number | null
  }

  export type Tanar_LetszamCountAggregateOutputType = {
    id: number
    alapadatok_id: number
    tanev_kezdete: number
    letszam: number
    _all: number
  }


  export type Tanar_LetszamAvgAggregateInputType = {
    tanev_kezdete?: true
    letszam?: true
  }

  export type Tanar_LetszamSumAggregateInputType = {
    tanev_kezdete?: true
    letszam?: true
  }

  export type Tanar_LetszamMinAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    letszam?: true
  }

  export type Tanar_LetszamMaxAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    letszam?: true
  }

  export type Tanar_LetszamCountAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    letszam?: true
    _all?: true
  }

  export type Tanar_LetszamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanar_Letszam to aggregate.
     */
    where?: Tanar_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanar_Letszams to fetch.
     */
    orderBy?: Tanar_LetszamOrderByWithRelationInput | Tanar_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tanar_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanar_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanar_Letszams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tanar_Letszams
    **/
    _count?: true | Tanar_LetszamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tanar_LetszamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tanar_LetszamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tanar_LetszamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tanar_LetszamMaxAggregateInputType
  }

  export type GetTanar_LetszamAggregateType<T extends Tanar_LetszamAggregateArgs> = {
        [P in keyof T & keyof AggregateTanar_Letszam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTanar_Letszam[P]>
      : GetScalarType<T[P], AggregateTanar_Letszam[P]>
  }




  export type Tanar_LetszamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanar_LetszamWhereInput
    orderBy?: Tanar_LetszamOrderByWithAggregationInput | Tanar_LetszamOrderByWithAggregationInput[]
    by: Tanar_LetszamScalarFieldEnum[] | Tanar_LetszamScalarFieldEnum
    having?: Tanar_LetszamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tanar_LetszamCountAggregateInputType | true
    _avg?: Tanar_LetszamAvgAggregateInputType
    _sum?: Tanar_LetszamSumAggregateInputType
    _min?: Tanar_LetszamMinAggregateInputType
    _max?: Tanar_LetszamMaxAggregateInputType
  }

  export type Tanar_LetszamGroupByOutputType = {
    id: string
    alapadatok_id: string
    tanev_kezdete: number
    letszam: number
    _count: Tanar_LetszamCountAggregateOutputType | null
    _avg: Tanar_LetszamAvgAggregateOutputType | null
    _sum: Tanar_LetszamSumAggregateOutputType | null
    _min: Tanar_LetszamMinAggregateOutputType | null
    _max: Tanar_LetszamMaxAggregateOutputType | null
  }

  type GetTanar_LetszamGroupByPayload<T extends Tanar_LetszamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tanar_LetszamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tanar_LetszamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tanar_LetszamGroupByOutputType[P]>
            : GetScalarType<T[P], Tanar_LetszamGroupByOutputType[P]>
        }
      >
    >


  export type Tanar_LetszamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanar_Letszam"]>

  export type Tanar_LetszamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanar_Letszam"]>

  export type Tanar_LetszamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanar_Letszam"]>

  export type Tanar_LetszamSelectScalar = {
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
  }

  export type Tanar_LetszamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alapadatok_id" | "tanev_kezdete" | "letszam", ExtArgs["result"]["tanar_Letszam"]>
  export type Tanar_LetszamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }
  export type Tanar_LetszamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }
  export type Tanar_LetszamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }

  export type $Tanar_LetszamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tanar_Letszam"
    objects: {
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alapadatok_id: string
      tanev_kezdete: number
      letszam: number
    }, ExtArgs["result"]["tanar_Letszam"]>
    composites: {}
  }

  type Tanar_LetszamGetPayload<S extends boolean | null | undefined | Tanar_LetszamDefaultArgs> = $Result.GetResult<Prisma.$Tanar_LetszamPayload, S>

  type Tanar_LetszamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tanar_LetszamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tanar_LetszamCountAggregateInputType | true
    }

  export interface Tanar_LetszamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tanar_Letszam'], meta: { name: 'Tanar_Letszam' } }
    /**
     * Find zero or one Tanar_Letszam that matches the filter.
     * @param {Tanar_LetszamFindUniqueArgs} args - Arguments to find a Tanar_Letszam
     * @example
     * // Get one Tanar_Letszam
     * const tanar_Letszam = await prisma.tanar_Letszam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tanar_LetszamFindUniqueArgs>(args: SelectSubset<T, Tanar_LetszamFindUniqueArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tanar_Letszam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tanar_LetszamFindUniqueOrThrowArgs} args - Arguments to find a Tanar_Letszam
     * @example
     * // Get one Tanar_Letszam
     * const tanar_Letszam = await prisma.tanar_Letszam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tanar_LetszamFindUniqueOrThrowArgs>(args: SelectSubset<T, Tanar_LetszamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanar_Letszam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamFindFirstArgs} args - Arguments to find a Tanar_Letszam
     * @example
     * // Get one Tanar_Letszam
     * const tanar_Letszam = await prisma.tanar_Letszam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tanar_LetszamFindFirstArgs>(args?: SelectSubset<T, Tanar_LetszamFindFirstArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanar_Letszam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamFindFirstOrThrowArgs} args - Arguments to find a Tanar_Letszam
     * @example
     * // Get one Tanar_Letszam
     * const tanar_Letszam = await prisma.tanar_Letszam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tanar_LetszamFindFirstOrThrowArgs>(args?: SelectSubset<T, Tanar_LetszamFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tanar_Letszams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tanar_Letszams
     * const tanar_Letszams = await prisma.tanar_Letszam.findMany()
     * 
     * // Get first 10 Tanar_Letszams
     * const tanar_Letszams = await prisma.tanar_Letszam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tanar_LetszamWithIdOnly = await prisma.tanar_Letszam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tanar_LetszamFindManyArgs>(args?: SelectSubset<T, Tanar_LetszamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tanar_Letszam.
     * @param {Tanar_LetszamCreateArgs} args - Arguments to create a Tanar_Letszam.
     * @example
     * // Create one Tanar_Letszam
     * const Tanar_Letszam = await prisma.tanar_Letszam.create({
     *   data: {
     *     // ... data to create a Tanar_Letszam
     *   }
     * })
     * 
     */
    create<T extends Tanar_LetszamCreateArgs>(args: SelectSubset<T, Tanar_LetszamCreateArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tanar_Letszams.
     * @param {Tanar_LetszamCreateManyArgs} args - Arguments to create many Tanar_Letszams.
     * @example
     * // Create many Tanar_Letszams
     * const tanar_Letszam = await prisma.tanar_Letszam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tanar_LetszamCreateManyArgs>(args?: SelectSubset<T, Tanar_LetszamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tanar_Letszams and returns the data saved in the database.
     * @param {Tanar_LetszamCreateManyAndReturnArgs} args - Arguments to create many Tanar_Letszams.
     * @example
     * // Create many Tanar_Letszams
     * const tanar_Letszam = await prisma.tanar_Letszam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tanar_Letszams and only return the `id`
     * const tanar_LetszamWithIdOnly = await prisma.tanar_Letszam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Tanar_LetszamCreateManyAndReturnArgs>(args?: SelectSubset<T, Tanar_LetszamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tanar_Letszam.
     * @param {Tanar_LetszamDeleteArgs} args - Arguments to delete one Tanar_Letszam.
     * @example
     * // Delete one Tanar_Letszam
     * const Tanar_Letszam = await prisma.tanar_Letszam.delete({
     *   where: {
     *     // ... filter to delete one Tanar_Letszam
     *   }
     * })
     * 
     */
    delete<T extends Tanar_LetszamDeleteArgs>(args: SelectSubset<T, Tanar_LetszamDeleteArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tanar_Letszam.
     * @param {Tanar_LetszamUpdateArgs} args - Arguments to update one Tanar_Letszam.
     * @example
     * // Update one Tanar_Letszam
     * const tanar_Letszam = await prisma.tanar_Letszam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tanar_LetszamUpdateArgs>(args: SelectSubset<T, Tanar_LetszamUpdateArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tanar_Letszams.
     * @param {Tanar_LetszamDeleteManyArgs} args - Arguments to filter Tanar_Letszams to delete.
     * @example
     * // Delete a few Tanar_Letszams
     * const { count } = await prisma.tanar_Letszam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tanar_LetszamDeleteManyArgs>(args?: SelectSubset<T, Tanar_LetszamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanar_Letszams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tanar_Letszams
     * const tanar_Letszam = await prisma.tanar_Letszam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tanar_LetszamUpdateManyArgs>(args: SelectSubset<T, Tanar_LetszamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanar_Letszams and returns the data updated in the database.
     * @param {Tanar_LetszamUpdateManyAndReturnArgs} args - Arguments to update many Tanar_Letszams.
     * @example
     * // Update many Tanar_Letszams
     * const tanar_Letszam = await prisma.tanar_Letszam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tanar_Letszams and only return the `id`
     * const tanar_LetszamWithIdOnly = await prisma.tanar_Letszam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Tanar_LetszamUpdateManyAndReturnArgs>(args: SelectSubset<T, Tanar_LetszamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tanar_Letszam.
     * @param {Tanar_LetszamUpsertArgs} args - Arguments to update or create a Tanar_Letszam.
     * @example
     * // Update or create a Tanar_Letszam
     * const tanar_Letszam = await prisma.tanar_Letszam.upsert({
     *   create: {
     *     // ... data to create a Tanar_Letszam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tanar_Letszam we want to update
     *   }
     * })
     */
    upsert<T extends Tanar_LetszamUpsertArgs>(args: SelectSubset<T, Tanar_LetszamUpsertArgs<ExtArgs>>): Prisma__Tanar_LetszamClient<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tanar_Letszams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamCountArgs} args - Arguments to filter Tanar_Letszams to count.
     * @example
     * // Count the number of Tanar_Letszams
     * const count = await prisma.tanar_Letszam.count({
     *   where: {
     *     // ... the filter for the Tanar_Letszams we want to count
     *   }
     * })
    **/
    count<T extends Tanar_LetszamCountArgs>(
      args?: Subset<T, Tanar_LetszamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tanar_LetszamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tanar_Letszam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tanar_LetszamAggregateArgs>(args: Subset<T, Tanar_LetszamAggregateArgs>): Prisma.PrismaPromise<GetTanar_LetszamAggregateType<T>>

    /**
     * Group by Tanar_Letszam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanar_LetszamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Tanar_LetszamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tanar_LetszamGroupByArgs['orderBy'] }
        : { orderBy?: Tanar_LetszamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Tanar_LetszamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTanar_LetszamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tanar_Letszam model
   */
  readonly fields: Tanar_LetszamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tanar_Letszam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tanar_LetszamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alapadatok<T extends AlapadatokDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlapadatokDefaultArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tanar_Letszam model
   */
  interface Tanar_LetszamFieldRefs {
    readonly id: FieldRef<"Tanar_Letszam", 'String'>
    readonly alapadatok_id: FieldRef<"Tanar_Letszam", 'String'>
    readonly tanev_kezdete: FieldRef<"Tanar_Letszam", 'Int'>
    readonly letszam: FieldRef<"Tanar_Letszam", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tanar_Letszam findUnique
   */
  export type Tanar_LetszamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanar_Letszam to fetch.
     */
    where: Tanar_LetszamWhereUniqueInput
  }

  /**
   * Tanar_Letszam findUniqueOrThrow
   */
  export type Tanar_LetszamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanar_Letszam to fetch.
     */
    where: Tanar_LetszamWhereUniqueInput
  }

  /**
   * Tanar_Letszam findFirst
   */
  export type Tanar_LetszamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanar_Letszam to fetch.
     */
    where?: Tanar_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanar_Letszams to fetch.
     */
    orderBy?: Tanar_LetszamOrderByWithRelationInput | Tanar_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanar_Letszams.
     */
    cursor?: Tanar_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanar_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanar_Letszams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanar_Letszams.
     */
    distinct?: Tanar_LetszamScalarFieldEnum | Tanar_LetszamScalarFieldEnum[]
  }

  /**
   * Tanar_Letszam findFirstOrThrow
   */
  export type Tanar_LetszamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanar_Letszam to fetch.
     */
    where?: Tanar_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanar_Letszams to fetch.
     */
    orderBy?: Tanar_LetszamOrderByWithRelationInput | Tanar_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanar_Letszams.
     */
    cursor?: Tanar_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanar_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanar_Letszams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanar_Letszams.
     */
    distinct?: Tanar_LetszamScalarFieldEnum | Tanar_LetszamScalarFieldEnum[]
  }

  /**
   * Tanar_Letszam findMany
   */
  export type Tanar_LetszamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * Filter, which Tanar_Letszams to fetch.
     */
    where?: Tanar_LetszamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanar_Letszams to fetch.
     */
    orderBy?: Tanar_LetszamOrderByWithRelationInput | Tanar_LetszamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tanar_Letszams.
     */
    cursor?: Tanar_LetszamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanar_Letszams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanar_Letszams.
     */
    skip?: number
    distinct?: Tanar_LetszamScalarFieldEnum | Tanar_LetszamScalarFieldEnum[]
  }

  /**
   * Tanar_Letszam create
   */
  export type Tanar_LetszamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * The data needed to create a Tanar_Letszam.
     */
    data: XOR<Tanar_LetszamCreateInput, Tanar_LetszamUncheckedCreateInput>
  }

  /**
   * Tanar_Letszam createMany
   */
  export type Tanar_LetszamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tanar_Letszams.
     */
    data: Tanar_LetszamCreateManyInput | Tanar_LetszamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tanar_Letszam createManyAndReturn
   */
  export type Tanar_LetszamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * The data used to create many Tanar_Letszams.
     */
    data: Tanar_LetszamCreateManyInput | Tanar_LetszamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanar_Letszam update
   */
  export type Tanar_LetszamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * The data needed to update a Tanar_Letszam.
     */
    data: XOR<Tanar_LetszamUpdateInput, Tanar_LetszamUncheckedUpdateInput>
    /**
     * Choose, which Tanar_Letszam to update.
     */
    where: Tanar_LetszamWhereUniqueInput
  }

  /**
   * Tanar_Letszam updateMany
   */
  export type Tanar_LetszamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tanar_Letszams.
     */
    data: XOR<Tanar_LetszamUpdateManyMutationInput, Tanar_LetszamUncheckedUpdateManyInput>
    /**
     * Filter which Tanar_Letszams to update
     */
    where?: Tanar_LetszamWhereInput
    /**
     * Limit how many Tanar_Letszams to update.
     */
    limit?: number
  }

  /**
   * Tanar_Letszam updateManyAndReturn
   */
  export type Tanar_LetszamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * The data used to update Tanar_Letszams.
     */
    data: XOR<Tanar_LetszamUpdateManyMutationInput, Tanar_LetszamUncheckedUpdateManyInput>
    /**
     * Filter which Tanar_Letszams to update
     */
    where?: Tanar_LetszamWhereInput
    /**
     * Limit how many Tanar_Letszams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanar_Letszam upsert
   */
  export type Tanar_LetszamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * The filter to search for the Tanar_Letszam to update in case it exists.
     */
    where: Tanar_LetszamWhereUniqueInput
    /**
     * In case the Tanar_Letszam found by the `where` argument doesn't exist, create a new Tanar_Letszam with this data.
     */
    create: XOR<Tanar_LetszamCreateInput, Tanar_LetszamUncheckedCreateInput>
    /**
     * In case the Tanar_Letszam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tanar_LetszamUpdateInput, Tanar_LetszamUncheckedUpdateInput>
  }

  /**
   * Tanar_Letszam delete
   */
  export type Tanar_LetszamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
    /**
     * Filter which Tanar_Letszam to delete.
     */
    where: Tanar_LetszamWhereUniqueInput
  }

  /**
   * Tanar_Letszam deleteMany
   */
  export type Tanar_LetszamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanar_Letszams to delete
     */
    where?: Tanar_LetszamWhereInput
    /**
     * Limit how many Tanar_Letszams to delete.
     */
    limit?: number
  }

  /**
   * Tanar_Letszam without action
   */
  export type Tanar_LetszamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanar_Letszam
     */
    select?: Tanar_LetszamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanar_Letszam
     */
    omit?: Tanar_LetszamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanar_LetszamInclude<ExtArgs> | null
  }


  /**
   * Model Felvettek_Szama
   */

  export type AggregateFelvettek_Szama = {
    _count: Felvettek_SzamaCountAggregateOutputType | null
    _avg: Felvettek_SzamaAvgAggregateOutputType | null
    _sum: Felvettek_SzamaSumAggregateOutputType | null
    _min: Felvettek_SzamaMinAggregateOutputType | null
    _max: Felvettek_SzamaMaxAggregateOutputType | null
  }

  export type Felvettek_SzamaAvgAggregateOutputType = {
    tanev_kezdete: number | null
    jelentkezo_letszam: number | null
    felveheto_letszam: number | null
    felvett_letszam: number | null
  }

  export type Felvettek_SzamaSumAggregateOutputType = {
    tanev_kezdete: number | null
    jelentkezo_letszam: number | null
    felveheto_letszam: number | null
    felvett_letszam: number | null
  }

  export type Felvettek_SzamaMinAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    szakma_id: string | null
    jelentkezo_letszam: number | null
    felveheto_letszam: number | null
    felvett_letszam: number | null
  }

  export type Felvettek_SzamaMaxAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    szakma_id: string | null
    jelentkezo_letszam: number | null
    felveheto_letszam: number | null
    felvett_letszam: number | null
  }

  export type Felvettek_SzamaCountAggregateOutputType = {
    id: number
    alapadatok_id: number
    tanev_kezdete: number
    szakma_id: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    _all: number
  }


  export type Felvettek_SzamaAvgAggregateInputType = {
    tanev_kezdete?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
  }

  export type Felvettek_SzamaSumAggregateInputType = {
    tanev_kezdete?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
  }

  export type Felvettek_SzamaMinAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    szakma_id?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
  }

  export type Felvettek_SzamaMaxAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    szakma_id?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
  }

  export type Felvettek_SzamaCountAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    szakma_id?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
    _all?: true
  }

  export type Felvettek_SzamaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Felvettek_Szama to aggregate.
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Felvettek_Szamas to fetch.
     */
    orderBy?: Felvettek_SzamaOrderByWithRelationInput | Felvettek_SzamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Felvettek_SzamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Felvettek_Szamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Felvettek_Szamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Felvettek_Szamas
    **/
    _count?: true | Felvettek_SzamaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Felvettek_SzamaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Felvettek_SzamaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Felvettek_SzamaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Felvettek_SzamaMaxAggregateInputType
  }

  export type GetFelvettek_SzamaAggregateType<T extends Felvettek_SzamaAggregateArgs> = {
        [P in keyof T & keyof AggregateFelvettek_Szama]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFelvettek_Szama[P]>
      : GetScalarType<T[P], AggregateFelvettek_Szama[P]>
  }




  export type Felvettek_SzamaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Felvettek_SzamaWhereInput
    orderBy?: Felvettek_SzamaOrderByWithAggregationInput | Felvettek_SzamaOrderByWithAggregationInput[]
    by: Felvettek_SzamaScalarFieldEnum[] | Felvettek_SzamaScalarFieldEnum
    having?: Felvettek_SzamaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Felvettek_SzamaCountAggregateInputType | true
    _avg?: Felvettek_SzamaAvgAggregateInputType
    _sum?: Felvettek_SzamaSumAggregateInputType
    _min?: Felvettek_SzamaMinAggregateInputType
    _max?: Felvettek_SzamaMaxAggregateInputType
  }

  export type Felvettek_SzamaGroupByOutputType = {
    id: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    _count: Felvettek_SzamaCountAggregateOutputType | null
    _avg: Felvettek_SzamaAvgAggregateOutputType | null
    _sum: Felvettek_SzamaSumAggregateOutputType | null
    _min: Felvettek_SzamaMinAggregateOutputType | null
    _max: Felvettek_SzamaMaxAggregateOutputType | null
  }

  type GetFelvettek_SzamaGroupByPayload<T extends Felvettek_SzamaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Felvettek_SzamaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Felvettek_SzamaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Felvettek_SzamaGroupByOutputType[P]>
            : GetScalarType<T[P], Felvettek_SzamaGroupByOutputType[P]>
        }
      >
    >


  export type Felvettek_SzamaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["felvettek_Szama"]>

  export type Felvettek_SzamaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["felvettek_Szama"]>

  export type Felvettek_SzamaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["felvettek_Szama"]>

  export type Felvettek_SzamaSelectScalar = {
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
  }

  export type Felvettek_SzamaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alapadatok_id" | "tanev_kezdete" | "szakma_id" | "jelentkezo_letszam" | "felveheto_letszam" | "felvett_letszam", ExtArgs["result"]["felvettek_Szama"]>
  export type Felvettek_SzamaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }
  export type Felvettek_SzamaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }
  export type Felvettek_SzamaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
  }

  export type $Felvettek_SzamaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Felvettek_Szama"
    objects: {
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs>
      szakma: Prisma.$SzakmaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alapadatok_id: string
      tanev_kezdete: number
      szakma_id: string
      jelentkezo_letszam: number
      felveheto_letszam: number
      felvett_letszam: number
    }, ExtArgs["result"]["felvettek_Szama"]>
    composites: {}
  }

  type Felvettek_SzamaGetPayload<S extends boolean | null | undefined | Felvettek_SzamaDefaultArgs> = $Result.GetResult<Prisma.$Felvettek_SzamaPayload, S>

  type Felvettek_SzamaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Felvettek_SzamaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Felvettek_SzamaCountAggregateInputType | true
    }

  export interface Felvettek_SzamaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Felvettek_Szama'], meta: { name: 'Felvettek_Szama' } }
    /**
     * Find zero or one Felvettek_Szama that matches the filter.
     * @param {Felvettek_SzamaFindUniqueArgs} args - Arguments to find a Felvettek_Szama
     * @example
     * // Get one Felvettek_Szama
     * const felvettek_Szama = await prisma.felvettek_Szama.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Felvettek_SzamaFindUniqueArgs>(args: SelectSubset<T, Felvettek_SzamaFindUniqueArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Felvettek_Szama that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Felvettek_SzamaFindUniqueOrThrowArgs} args - Arguments to find a Felvettek_Szama
     * @example
     * // Get one Felvettek_Szama
     * const felvettek_Szama = await prisma.felvettek_Szama.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Felvettek_SzamaFindUniqueOrThrowArgs>(args: SelectSubset<T, Felvettek_SzamaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Felvettek_Szama that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaFindFirstArgs} args - Arguments to find a Felvettek_Szama
     * @example
     * // Get one Felvettek_Szama
     * const felvettek_Szama = await prisma.felvettek_Szama.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Felvettek_SzamaFindFirstArgs>(args?: SelectSubset<T, Felvettek_SzamaFindFirstArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Felvettek_Szama that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaFindFirstOrThrowArgs} args - Arguments to find a Felvettek_Szama
     * @example
     * // Get one Felvettek_Szama
     * const felvettek_Szama = await prisma.felvettek_Szama.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Felvettek_SzamaFindFirstOrThrowArgs>(args?: SelectSubset<T, Felvettek_SzamaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Felvettek_Szamas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Felvettek_Szamas
     * const felvettek_Szamas = await prisma.felvettek_Szama.findMany()
     * 
     * // Get first 10 Felvettek_Szamas
     * const felvettek_Szamas = await prisma.felvettek_Szama.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const felvettek_SzamaWithIdOnly = await prisma.felvettek_Szama.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Felvettek_SzamaFindManyArgs>(args?: SelectSubset<T, Felvettek_SzamaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Felvettek_Szama.
     * @param {Felvettek_SzamaCreateArgs} args - Arguments to create a Felvettek_Szama.
     * @example
     * // Create one Felvettek_Szama
     * const Felvettek_Szama = await prisma.felvettek_Szama.create({
     *   data: {
     *     // ... data to create a Felvettek_Szama
     *   }
     * })
     * 
     */
    create<T extends Felvettek_SzamaCreateArgs>(args: SelectSubset<T, Felvettek_SzamaCreateArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Felvettek_Szamas.
     * @param {Felvettek_SzamaCreateManyArgs} args - Arguments to create many Felvettek_Szamas.
     * @example
     * // Create many Felvettek_Szamas
     * const felvettek_Szama = await prisma.felvettek_Szama.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Felvettek_SzamaCreateManyArgs>(args?: SelectSubset<T, Felvettek_SzamaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Felvettek_Szamas and returns the data saved in the database.
     * @param {Felvettek_SzamaCreateManyAndReturnArgs} args - Arguments to create many Felvettek_Szamas.
     * @example
     * // Create many Felvettek_Szamas
     * const felvettek_Szama = await prisma.felvettek_Szama.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Felvettek_Szamas and only return the `id`
     * const felvettek_SzamaWithIdOnly = await prisma.felvettek_Szama.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Felvettek_SzamaCreateManyAndReturnArgs>(args?: SelectSubset<T, Felvettek_SzamaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Felvettek_Szama.
     * @param {Felvettek_SzamaDeleteArgs} args - Arguments to delete one Felvettek_Szama.
     * @example
     * // Delete one Felvettek_Szama
     * const Felvettek_Szama = await prisma.felvettek_Szama.delete({
     *   where: {
     *     // ... filter to delete one Felvettek_Szama
     *   }
     * })
     * 
     */
    delete<T extends Felvettek_SzamaDeleteArgs>(args: SelectSubset<T, Felvettek_SzamaDeleteArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Felvettek_Szama.
     * @param {Felvettek_SzamaUpdateArgs} args - Arguments to update one Felvettek_Szama.
     * @example
     * // Update one Felvettek_Szama
     * const felvettek_Szama = await prisma.felvettek_Szama.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Felvettek_SzamaUpdateArgs>(args: SelectSubset<T, Felvettek_SzamaUpdateArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Felvettek_Szamas.
     * @param {Felvettek_SzamaDeleteManyArgs} args - Arguments to filter Felvettek_Szamas to delete.
     * @example
     * // Delete a few Felvettek_Szamas
     * const { count } = await prisma.felvettek_Szama.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Felvettek_SzamaDeleteManyArgs>(args?: SelectSubset<T, Felvettek_SzamaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Felvettek_Szamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Felvettek_Szamas
     * const felvettek_Szama = await prisma.felvettek_Szama.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Felvettek_SzamaUpdateManyArgs>(args: SelectSubset<T, Felvettek_SzamaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Felvettek_Szamas and returns the data updated in the database.
     * @param {Felvettek_SzamaUpdateManyAndReturnArgs} args - Arguments to update many Felvettek_Szamas.
     * @example
     * // Update many Felvettek_Szamas
     * const felvettek_Szama = await prisma.felvettek_Szama.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Felvettek_Szamas and only return the `id`
     * const felvettek_SzamaWithIdOnly = await prisma.felvettek_Szama.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Felvettek_SzamaUpdateManyAndReturnArgs>(args: SelectSubset<T, Felvettek_SzamaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Felvettek_Szama.
     * @param {Felvettek_SzamaUpsertArgs} args - Arguments to update or create a Felvettek_Szama.
     * @example
     * // Update or create a Felvettek_Szama
     * const felvettek_Szama = await prisma.felvettek_Szama.upsert({
     *   create: {
     *     // ... data to create a Felvettek_Szama
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Felvettek_Szama we want to update
     *   }
     * })
     */
    upsert<T extends Felvettek_SzamaUpsertArgs>(args: SelectSubset<T, Felvettek_SzamaUpsertArgs<ExtArgs>>): Prisma__Felvettek_SzamaClient<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Felvettek_Szamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaCountArgs} args - Arguments to filter Felvettek_Szamas to count.
     * @example
     * // Count the number of Felvettek_Szamas
     * const count = await prisma.felvettek_Szama.count({
     *   where: {
     *     // ... the filter for the Felvettek_Szamas we want to count
     *   }
     * })
    **/
    count<T extends Felvettek_SzamaCountArgs>(
      args?: Subset<T, Felvettek_SzamaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Felvettek_SzamaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Felvettek_Szama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Felvettek_SzamaAggregateArgs>(args: Subset<T, Felvettek_SzamaAggregateArgs>): Prisma.PrismaPromise<GetFelvettek_SzamaAggregateType<T>>

    /**
     * Group by Felvettek_Szama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Felvettek_SzamaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Felvettek_SzamaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Felvettek_SzamaGroupByArgs['orderBy'] }
        : { orderBy?: Felvettek_SzamaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Felvettek_SzamaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFelvettek_SzamaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Felvettek_Szama model
   */
  readonly fields: Felvettek_SzamaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Felvettek_Szama.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Felvettek_SzamaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    alapadatok<T extends AlapadatokDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlapadatokDefaultArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    szakma<T extends SzakmaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SzakmaDefaultArgs<ExtArgs>>): Prisma__SzakmaClient<$Result.GetResult<Prisma.$SzakmaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Felvettek_Szama model
   */
  interface Felvettek_SzamaFieldRefs {
    readonly id: FieldRef<"Felvettek_Szama", 'String'>
    readonly alapadatok_id: FieldRef<"Felvettek_Szama", 'String'>
    readonly tanev_kezdete: FieldRef<"Felvettek_Szama", 'Int'>
    readonly szakma_id: FieldRef<"Felvettek_Szama", 'String'>
    readonly jelentkezo_letszam: FieldRef<"Felvettek_Szama", 'Int'>
    readonly felveheto_letszam: FieldRef<"Felvettek_Szama", 'Int'>
    readonly felvett_letszam: FieldRef<"Felvettek_Szama", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Felvettek_Szama findUnique
   */
  export type Felvettek_SzamaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * Filter, which Felvettek_Szama to fetch.
     */
    where: Felvettek_SzamaWhereUniqueInput
  }

  /**
   * Felvettek_Szama findUniqueOrThrow
   */
  export type Felvettek_SzamaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * Filter, which Felvettek_Szama to fetch.
     */
    where: Felvettek_SzamaWhereUniqueInput
  }

  /**
   * Felvettek_Szama findFirst
   */
  export type Felvettek_SzamaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * Filter, which Felvettek_Szama to fetch.
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Felvettek_Szamas to fetch.
     */
    orderBy?: Felvettek_SzamaOrderByWithRelationInput | Felvettek_SzamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Felvettek_Szamas.
     */
    cursor?: Felvettek_SzamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Felvettek_Szamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Felvettek_Szamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Felvettek_Szamas.
     */
    distinct?: Felvettek_SzamaScalarFieldEnum | Felvettek_SzamaScalarFieldEnum[]
  }

  /**
   * Felvettek_Szama findFirstOrThrow
   */
  export type Felvettek_SzamaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * Filter, which Felvettek_Szama to fetch.
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Felvettek_Szamas to fetch.
     */
    orderBy?: Felvettek_SzamaOrderByWithRelationInput | Felvettek_SzamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Felvettek_Szamas.
     */
    cursor?: Felvettek_SzamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Felvettek_Szamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Felvettek_Szamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Felvettek_Szamas.
     */
    distinct?: Felvettek_SzamaScalarFieldEnum | Felvettek_SzamaScalarFieldEnum[]
  }

  /**
   * Felvettek_Szama findMany
   */
  export type Felvettek_SzamaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * Filter, which Felvettek_Szamas to fetch.
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Felvettek_Szamas to fetch.
     */
    orderBy?: Felvettek_SzamaOrderByWithRelationInput | Felvettek_SzamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Felvettek_Szamas.
     */
    cursor?: Felvettek_SzamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Felvettek_Szamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Felvettek_Szamas.
     */
    skip?: number
    distinct?: Felvettek_SzamaScalarFieldEnum | Felvettek_SzamaScalarFieldEnum[]
  }

  /**
   * Felvettek_Szama create
   */
  export type Felvettek_SzamaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * The data needed to create a Felvettek_Szama.
     */
    data: XOR<Felvettek_SzamaCreateInput, Felvettek_SzamaUncheckedCreateInput>
  }

  /**
   * Felvettek_Szama createMany
   */
  export type Felvettek_SzamaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Felvettek_Szamas.
     */
    data: Felvettek_SzamaCreateManyInput | Felvettek_SzamaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Felvettek_Szama createManyAndReturn
   */
  export type Felvettek_SzamaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * The data used to create many Felvettek_Szamas.
     */
    data: Felvettek_SzamaCreateManyInput | Felvettek_SzamaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Felvettek_Szama update
   */
  export type Felvettek_SzamaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * The data needed to update a Felvettek_Szama.
     */
    data: XOR<Felvettek_SzamaUpdateInput, Felvettek_SzamaUncheckedUpdateInput>
    /**
     * Choose, which Felvettek_Szama to update.
     */
    where: Felvettek_SzamaWhereUniqueInput
  }

  /**
   * Felvettek_Szama updateMany
   */
  export type Felvettek_SzamaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Felvettek_Szamas.
     */
    data: XOR<Felvettek_SzamaUpdateManyMutationInput, Felvettek_SzamaUncheckedUpdateManyInput>
    /**
     * Filter which Felvettek_Szamas to update
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * Limit how many Felvettek_Szamas to update.
     */
    limit?: number
  }

  /**
   * Felvettek_Szama updateManyAndReturn
   */
  export type Felvettek_SzamaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * The data used to update Felvettek_Szamas.
     */
    data: XOR<Felvettek_SzamaUpdateManyMutationInput, Felvettek_SzamaUncheckedUpdateManyInput>
    /**
     * Filter which Felvettek_Szamas to update
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * Limit how many Felvettek_Szamas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Felvettek_Szama upsert
   */
  export type Felvettek_SzamaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * The filter to search for the Felvettek_Szama to update in case it exists.
     */
    where: Felvettek_SzamaWhereUniqueInput
    /**
     * In case the Felvettek_Szama found by the `where` argument doesn't exist, create a new Felvettek_Szama with this data.
     */
    create: XOR<Felvettek_SzamaCreateInput, Felvettek_SzamaUncheckedCreateInput>
    /**
     * In case the Felvettek_Szama was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Felvettek_SzamaUpdateInput, Felvettek_SzamaUncheckedUpdateInput>
  }

  /**
   * Felvettek_Szama delete
   */
  export type Felvettek_SzamaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
    /**
     * Filter which Felvettek_Szama to delete.
     */
    where: Felvettek_SzamaWhereUniqueInput
  }

  /**
   * Felvettek_Szama deleteMany
   */
  export type Felvettek_SzamaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Felvettek_Szamas to delete
     */
    where?: Felvettek_SzamaWhereInput
    /**
     * Limit how many Felvettek_Szamas to delete.
     */
    limit?: number
  }

  /**
   * Felvettek_Szama without action
   */
  export type Felvettek_SzamaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Felvettek_Szama
     */
    select?: Felvettek_SzamaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Felvettek_Szama
     */
    omit?: Felvettek_SzamaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Felvettek_SzamaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AlapadatokScalarFieldEnum: {
    id: 'id',
    iskola_neve: 'iskola_neve',
    intezmeny_tipus: 'intezmeny_tipus'
  };

  export type AlapadatokScalarFieldEnum = (typeof AlapadatokScalarFieldEnum)[keyof typeof AlapadatokScalarFieldEnum]


  export const SzakiranyScalarFieldEnum: {
    id: 'id',
    nev: 'nev'
  };

  export type SzakiranyScalarFieldEnum = (typeof SzakiranyScalarFieldEnum)[keyof typeof SzakiranyScalarFieldEnum]


  export const SzakmaScalarFieldEnum: {
    id: 'id',
    nev: 'nev'
  };

  export type SzakmaScalarFieldEnum = (typeof SzakmaScalarFieldEnum)[keyof typeof SzakmaScalarFieldEnum]


  export const Tanulo_LetszamScalarFieldEnum: {
    id: 'id',
    alapadatok_id: 'alapadatok_id',
    tanev_kezdete: 'tanev_kezdete',
    jogv_tipus: 'jogv_tipus',
    letszam: 'letszam',
    szakirany_id: 'szakirany_id',
    szakma_id: 'szakma_id'
  };

  export type Tanulo_LetszamScalarFieldEnum = (typeof Tanulo_LetszamScalarFieldEnum)[keyof typeof Tanulo_LetszamScalarFieldEnum]


  export const Tanar_LetszamScalarFieldEnum: {
    id: 'id',
    alapadatok_id: 'alapadatok_id',
    tanev_kezdete: 'tanev_kezdete',
    letszam: 'letszam'
  };

  export type Tanar_LetszamScalarFieldEnum = (typeof Tanar_LetszamScalarFieldEnum)[keyof typeof Tanar_LetszamScalarFieldEnum]


  export const Felvettek_SzamaScalarFieldEnum: {
    id: 'id',
    alapadatok_id: 'alapadatok_id',
    tanev_kezdete: 'tanev_kezdete',
    szakma_id: 'szakma_id',
    jelentkezo_letszam: 'jelentkezo_letszam',
    felveheto_letszam: 'felveheto_letszam',
    felvett_letszam: 'felvett_letszam'
  };

  export type Felvettek_SzamaScalarFieldEnum = (typeof Felvettek_SzamaScalarFieldEnum)[keyof typeof Felvettek_SzamaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AlapadatokWhereInput = {
    AND?: AlapadatokWhereInput | AlapadatokWhereInput[]
    OR?: AlapadatokWhereInput[]
    NOT?: AlapadatokWhereInput | AlapadatokWhereInput[]
    id?: UuidFilter<"Alapadatok"> | string
    iskola_neve?: StringFilter<"Alapadatok"> | string
    intezmeny_tipus?: StringFilter<"Alapadatok"> | string
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    tanar_letszam?: Tanar_LetszamListRelationFilter
    felvettek_szama?: Felvettek_SzamaListRelationFilter
  }

  export type AlapadatokOrderByWithRelationInput = {
    id?: SortOrder
    iskola_neve?: SortOrder
    intezmeny_tipus?: SortOrder
    tanulo_letszam?: Tanulo_LetszamOrderByRelationAggregateInput
    tanar_letszam?: Tanar_LetszamOrderByRelationAggregateInput
    felvettek_szama?: Felvettek_SzamaOrderByRelationAggregateInput
  }

  export type AlapadatokWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlapadatokWhereInput | AlapadatokWhereInput[]
    OR?: AlapadatokWhereInput[]
    NOT?: AlapadatokWhereInput | AlapadatokWhereInput[]
    iskola_neve?: StringFilter<"Alapadatok"> | string
    intezmeny_tipus?: StringFilter<"Alapadatok"> | string
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    tanar_letszam?: Tanar_LetszamListRelationFilter
    felvettek_szama?: Felvettek_SzamaListRelationFilter
  }, "id">

  export type AlapadatokOrderByWithAggregationInput = {
    id?: SortOrder
    iskola_neve?: SortOrder
    intezmeny_tipus?: SortOrder
    _count?: AlapadatokCountOrderByAggregateInput
    _max?: AlapadatokMaxOrderByAggregateInput
    _min?: AlapadatokMinOrderByAggregateInput
  }

  export type AlapadatokScalarWhereWithAggregatesInput = {
    AND?: AlapadatokScalarWhereWithAggregatesInput | AlapadatokScalarWhereWithAggregatesInput[]
    OR?: AlapadatokScalarWhereWithAggregatesInput[]
    NOT?: AlapadatokScalarWhereWithAggregatesInput | AlapadatokScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Alapadatok"> | string
    iskola_neve?: StringWithAggregatesFilter<"Alapadatok"> | string
    intezmeny_tipus?: StringWithAggregatesFilter<"Alapadatok"> | string
  }

  export type SzakiranyWhereInput = {
    AND?: SzakiranyWhereInput | SzakiranyWhereInput[]
    OR?: SzakiranyWhereInput[]
    NOT?: SzakiranyWhereInput | SzakiranyWhereInput[]
    id?: UuidFilter<"Szakirany"> | string
    nev?: StringFilter<"Szakirany"> | string
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
  }

  export type SzakiranyOrderByWithRelationInput = {
    id?: SortOrder
    nev?: SortOrder
    tanulo_letszam?: Tanulo_LetszamOrderByRelationAggregateInput
  }

  export type SzakiranyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SzakiranyWhereInput | SzakiranyWhereInput[]
    OR?: SzakiranyWhereInput[]
    NOT?: SzakiranyWhereInput | SzakiranyWhereInput[]
    nev?: StringFilter<"Szakirany"> | string
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
  }, "id">

  export type SzakiranyOrderByWithAggregationInput = {
    id?: SortOrder
    nev?: SortOrder
    _count?: SzakiranyCountOrderByAggregateInput
    _max?: SzakiranyMaxOrderByAggregateInput
    _min?: SzakiranyMinOrderByAggregateInput
  }

  export type SzakiranyScalarWhereWithAggregatesInput = {
    AND?: SzakiranyScalarWhereWithAggregatesInput | SzakiranyScalarWhereWithAggregatesInput[]
    OR?: SzakiranyScalarWhereWithAggregatesInput[]
    NOT?: SzakiranyScalarWhereWithAggregatesInput | SzakiranyScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Szakirany"> | string
    nev?: StringWithAggregatesFilter<"Szakirany"> | string
  }

  export type SzakmaWhereInput = {
    AND?: SzakmaWhereInput | SzakmaWhereInput[]
    OR?: SzakmaWhereInput[]
    NOT?: SzakmaWhereInput | SzakmaWhereInput[]
    id?: UuidFilter<"Szakma"> | string
    nev?: StringFilter<"Szakma"> | string
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    felvettek_szama?: Felvettek_SzamaListRelationFilter
  }

  export type SzakmaOrderByWithRelationInput = {
    id?: SortOrder
    nev?: SortOrder
    tanulo_letszam?: Tanulo_LetszamOrderByRelationAggregateInput
    felvettek_szama?: Felvettek_SzamaOrderByRelationAggregateInput
  }

  export type SzakmaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SzakmaWhereInput | SzakmaWhereInput[]
    OR?: SzakmaWhereInput[]
    NOT?: SzakmaWhereInput | SzakmaWhereInput[]
    nev?: StringFilter<"Szakma"> | string
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    felvettek_szama?: Felvettek_SzamaListRelationFilter
  }, "id">

  export type SzakmaOrderByWithAggregationInput = {
    id?: SortOrder
    nev?: SortOrder
    _count?: SzakmaCountOrderByAggregateInput
    _max?: SzakmaMaxOrderByAggregateInput
    _min?: SzakmaMinOrderByAggregateInput
  }

  export type SzakmaScalarWhereWithAggregatesInput = {
    AND?: SzakmaScalarWhereWithAggregatesInput | SzakmaScalarWhereWithAggregatesInput[]
    OR?: SzakmaScalarWhereWithAggregatesInput[]
    NOT?: SzakmaScalarWhereWithAggregatesInput | SzakmaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Szakma"> | string
    nev?: StringWithAggregatesFilter<"Szakma"> | string
  }

  export type Tanulo_LetszamWhereInput = {
    AND?: Tanulo_LetszamWhereInput | Tanulo_LetszamWhereInput[]
    OR?: Tanulo_LetszamWhereInput[]
    NOT?: Tanulo_LetszamWhereInput | Tanulo_LetszamWhereInput[]
    id?: UuidFilter<"Tanulo_Letszam"> | string
    alapadatok_id?: UuidFilter<"Tanulo_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanulo_Letszam"> | number
    jogv_tipus?: IntFilter<"Tanulo_Letszam"> | number
    letszam?: IntFilter<"Tanulo_Letszam"> | number
    szakirany_id?: UuidFilter<"Tanulo_Letszam"> | string
    szakma_id?: UuidFilter<"Tanulo_Letszam"> | string
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
    szakirany?: XOR<SzakiranyScalarRelationFilter, SzakiranyWhereInput>
    szakma?: XOR<SzakmaScalarRelationFilter, SzakmaWhereInput>
  }

  export type Tanulo_LetszamOrderByWithRelationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
    szakirany_id?: SortOrder
    szakma_id?: SortOrder
    alapadatok?: AlapadatokOrderByWithRelationInput
    szakirany?: SzakiranyOrderByWithRelationInput
    szakma?: SzakmaOrderByWithRelationInput
  }

  export type Tanulo_LetszamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Tanulo_LetszamWhereInput | Tanulo_LetszamWhereInput[]
    OR?: Tanulo_LetszamWhereInput[]
    NOT?: Tanulo_LetszamWhereInput | Tanulo_LetszamWhereInput[]
    alapadatok_id?: UuidFilter<"Tanulo_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanulo_Letszam"> | number
    jogv_tipus?: IntFilter<"Tanulo_Letszam"> | number
    letszam?: IntFilter<"Tanulo_Letszam"> | number
    szakirany_id?: UuidFilter<"Tanulo_Letszam"> | string
    szakma_id?: UuidFilter<"Tanulo_Letszam"> | string
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
    szakirany?: XOR<SzakiranyScalarRelationFilter, SzakiranyWhereInput>
    szakma?: XOR<SzakmaScalarRelationFilter, SzakmaWhereInput>
  }, "id">

  export type Tanulo_LetszamOrderByWithAggregationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
    szakirany_id?: SortOrder
    szakma_id?: SortOrder
    _count?: Tanulo_LetszamCountOrderByAggregateInput
    _avg?: Tanulo_LetszamAvgOrderByAggregateInput
    _max?: Tanulo_LetszamMaxOrderByAggregateInput
    _min?: Tanulo_LetszamMinOrderByAggregateInput
    _sum?: Tanulo_LetszamSumOrderByAggregateInput
  }

  export type Tanulo_LetszamScalarWhereWithAggregatesInput = {
    AND?: Tanulo_LetszamScalarWhereWithAggregatesInput | Tanulo_LetszamScalarWhereWithAggregatesInput[]
    OR?: Tanulo_LetszamScalarWhereWithAggregatesInput[]
    NOT?: Tanulo_LetszamScalarWhereWithAggregatesInput | Tanulo_LetszamScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tanulo_Letszam"> | string
    alapadatok_id?: UuidWithAggregatesFilter<"Tanulo_Letszam"> | string
    tanev_kezdete?: IntWithAggregatesFilter<"Tanulo_Letszam"> | number
    jogv_tipus?: IntWithAggregatesFilter<"Tanulo_Letszam"> | number
    letszam?: IntWithAggregatesFilter<"Tanulo_Letszam"> | number
    szakirany_id?: UuidWithAggregatesFilter<"Tanulo_Letszam"> | string
    szakma_id?: UuidWithAggregatesFilter<"Tanulo_Letszam"> | string
  }

  export type Tanar_LetszamWhereInput = {
    AND?: Tanar_LetszamWhereInput | Tanar_LetszamWhereInput[]
    OR?: Tanar_LetszamWhereInput[]
    NOT?: Tanar_LetszamWhereInput | Tanar_LetszamWhereInput[]
    id?: UuidFilter<"Tanar_Letszam"> | string
    alapadatok_id?: UuidFilter<"Tanar_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanar_Letszam"> | number
    letszam?: IntFilter<"Tanar_Letszam"> | number
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }

  export type Tanar_LetszamOrderByWithRelationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
    alapadatok?: AlapadatokOrderByWithRelationInput
  }

  export type Tanar_LetszamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Tanar_LetszamWhereInput | Tanar_LetszamWhereInput[]
    OR?: Tanar_LetszamWhereInput[]
    NOT?: Tanar_LetszamWhereInput | Tanar_LetszamWhereInput[]
    alapadatok_id?: UuidFilter<"Tanar_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanar_Letszam"> | number
    letszam?: IntFilter<"Tanar_Letszam"> | number
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }, "id">

  export type Tanar_LetszamOrderByWithAggregationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
    _count?: Tanar_LetszamCountOrderByAggregateInput
    _avg?: Tanar_LetszamAvgOrderByAggregateInput
    _max?: Tanar_LetszamMaxOrderByAggregateInput
    _min?: Tanar_LetszamMinOrderByAggregateInput
    _sum?: Tanar_LetszamSumOrderByAggregateInput
  }

  export type Tanar_LetszamScalarWhereWithAggregatesInput = {
    AND?: Tanar_LetszamScalarWhereWithAggregatesInput | Tanar_LetszamScalarWhereWithAggregatesInput[]
    OR?: Tanar_LetszamScalarWhereWithAggregatesInput[]
    NOT?: Tanar_LetszamScalarWhereWithAggregatesInput | Tanar_LetszamScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tanar_Letszam"> | string
    alapadatok_id?: UuidWithAggregatesFilter<"Tanar_Letszam"> | string
    tanev_kezdete?: IntWithAggregatesFilter<"Tanar_Letszam"> | number
    letszam?: IntWithAggregatesFilter<"Tanar_Letszam"> | number
  }

  export type Felvettek_SzamaWhereInput = {
    AND?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    OR?: Felvettek_SzamaWhereInput[]
    NOT?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    id?: UuidFilter<"Felvettek_Szama"> | string
    alapadatok_id?: UuidFilter<"Felvettek_Szama"> | string
    tanev_kezdete?: IntFilter<"Felvettek_Szama"> | number
    szakma_id?: UuidFilter<"Felvettek_Szama"> | string
    jelentkezo_letszam?: IntFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntFilter<"Felvettek_Szama"> | number
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
    szakma?: XOR<SzakmaScalarRelationFilter, SzakmaWhereInput>
  }

  export type Felvettek_SzamaOrderByWithRelationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    alapadatok?: AlapadatokOrderByWithRelationInput
    szakma?: SzakmaOrderByWithRelationInput
  }

  export type Felvettek_SzamaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    OR?: Felvettek_SzamaWhereInput[]
    NOT?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    alapadatok_id?: UuidFilter<"Felvettek_Szama"> | string
    tanev_kezdete?: IntFilter<"Felvettek_Szama"> | number
    szakma_id?: UuidFilter<"Felvettek_Szama"> | string
    jelentkezo_letszam?: IntFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntFilter<"Felvettek_Szama"> | number
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
    szakma?: XOR<SzakmaScalarRelationFilter, SzakmaWhereInput>
  }, "id">

  export type Felvettek_SzamaOrderByWithAggregationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    _count?: Felvettek_SzamaCountOrderByAggregateInput
    _avg?: Felvettek_SzamaAvgOrderByAggregateInput
    _max?: Felvettek_SzamaMaxOrderByAggregateInput
    _min?: Felvettek_SzamaMinOrderByAggregateInput
    _sum?: Felvettek_SzamaSumOrderByAggregateInput
  }

  export type Felvettek_SzamaScalarWhereWithAggregatesInput = {
    AND?: Felvettek_SzamaScalarWhereWithAggregatesInput | Felvettek_SzamaScalarWhereWithAggregatesInput[]
    OR?: Felvettek_SzamaScalarWhereWithAggregatesInput[]
    NOT?: Felvettek_SzamaScalarWhereWithAggregatesInput | Felvettek_SzamaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Felvettek_Szama"> | string
    alapadatok_id?: UuidWithAggregatesFilter<"Felvettek_Szama"> | string
    tanev_kezdete?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
    szakma_id?: UuidWithAggregatesFilter<"Felvettek_Szama"> | string
    jelentkezo_letszam?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
  }

  export type AlapadatokCreateInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokCreateManyInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
  }

  export type AlapadatokUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
  }

  export type AlapadatokUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
  }

  export type SzakiranyCreateInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyUncheckedCreateInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutSzakiranyNestedInput
  }

  export type SzakiranyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyNestedInput
  }

  export type SzakiranyCreateManyInput = {
    id?: string
    nev: string
  }

  export type SzakiranyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
  }

  export type SzakiranyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
  }

  export type SzakmaCreateInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutSzakmaInput
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaUncheckedCreateInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakmaInput
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutSzakmaNestedInput
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutSzakmaNestedInput
  }

  export type SzakmaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaNestedInput
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaNestedInput
  }

  export type SzakmaCreateManyInput = {
    id?: string
    nev: string
  }

  export type SzakmaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
  }

  export type SzakmaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
  }

  export type Tanulo_LetszamCreateInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    alapadatok: AlapadatokCreateNestedOneWithoutTanulo_letszamInput
    szakirany: SzakiranyCreateNestedOneWithoutTanulo_letszamInput
    szakma: SzakmaCreateNestedOneWithoutTanulo_letszamInput
  }

  export type Tanulo_LetszamUncheckedCreateInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
  }

  export type Tanulo_LetszamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutTanulo_letszamNestedInput
    szakirany?: SzakiranyUpdateOneRequiredWithoutTanulo_letszamNestedInput
    szakma?: SzakmaUpdateOneRequiredWithoutTanulo_letszamNestedInput
  }

  export type Tanulo_LetszamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    szakma_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanulo_LetszamCreateManyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
  }

  export type Tanulo_LetszamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Tanulo_LetszamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    szakma_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanar_LetszamCreateInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
    alapadatok: AlapadatokCreateNestedOneWithoutTanar_letszamInput
  }

  export type Tanar_LetszamUncheckedCreateInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    letszam: number
  }

  export type Tanar_LetszamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutTanar_letszamNestedInput
  }

  export type Tanar_LetszamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Tanar_LetszamCreateManyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    letszam: number
  }

  export type Tanar_LetszamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Tanar_LetszamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Felvettek_SzamaCreateInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    alapadatok: AlapadatokCreateNestedOneWithoutFelvettek_szamaInput
    szakma: SzakmaCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
  }

  export type Felvettek_SzamaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutFelvettek_szamaNestedInput
    szakma?: SzakmaUpdateOneRequiredWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Felvettek_SzamaCreateManyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
  }

  export type Felvettek_SzamaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Felvettek_SzamaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Tanulo_LetszamListRelationFilter = {
    every?: Tanulo_LetszamWhereInput
    some?: Tanulo_LetszamWhereInput
    none?: Tanulo_LetszamWhereInput
  }

  export type Tanar_LetszamListRelationFilter = {
    every?: Tanar_LetszamWhereInput
    some?: Tanar_LetszamWhereInput
    none?: Tanar_LetszamWhereInput
  }

  export type Felvettek_SzamaListRelationFilter = {
    every?: Felvettek_SzamaWhereInput
    some?: Felvettek_SzamaWhereInput
    none?: Felvettek_SzamaWhereInput
  }

  export type Tanulo_LetszamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tanar_LetszamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Felvettek_SzamaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlapadatokCountOrderByAggregateInput = {
    id?: SortOrder
    iskola_neve?: SortOrder
    intezmeny_tipus?: SortOrder
  }

  export type AlapadatokMaxOrderByAggregateInput = {
    id?: SortOrder
    iskola_neve?: SortOrder
    intezmeny_tipus?: SortOrder
  }

  export type AlapadatokMinOrderByAggregateInput = {
    id?: SortOrder
    iskola_neve?: SortOrder
    intezmeny_tipus?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SzakiranyCountOrderByAggregateInput = {
    id?: SortOrder
    nev?: SortOrder
  }

  export type SzakiranyMaxOrderByAggregateInput = {
    id?: SortOrder
    nev?: SortOrder
  }

  export type SzakiranyMinOrderByAggregateInput = {
    id?: SortOrder
    nev?: SortOrder
  }

  export type SzakmaCountOrderByAggregateInput = {
    id?: SortOrder
    nev?: SortOrder
  }

  export type SzakmaMaxOrderByAggregateInput = {
    id?: SortOrder
    nev?: SortOrder
  }

  export type SzakmaMinOrderByAggregateInput = {
    id?: SortOrder
    nev?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AlapadatokScalarRelationFilter = {
    is?: AlapadatokWhereInput
    isNot?: AlapadatokWhereInput
  }

  export type SzakiranyScalarRelationFilter = {
    is?: SzakiranyWhereInput
    isNot?: SzakiranyWhereInput
  }

  export type SzakmaScalarRelationFilter = {
    is?: SzakmaWhereInput
    isNot?: SzakmaWhereInput
  }

  export type Tanulo_LetszamCountOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
    szakirany_id?: SortOrder
    szakma_id?: SortOrder
  }

  export type Tanulo_LetszamAvgOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
  }

  export type Tanulo_LetszamMaxOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
    szakirany_id?: SortOrder
    szakma_id?: SortOrder
  }

  export type Tanulo_LetszamMinOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
    szakirany_id?: SortOrder
    szakma_id?: SortOrder
  }

  export type Tanulo_LetszamSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Tanar_LetszamCountOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
  }

  export type Tanar_LetszamAvgOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
  }

  export type Tanar_LetszamMaxOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
  }

  export type Tanar_LetszamMinOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
  }

  export type Tanar_LetszamSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
  }

  export type Felvettek_SzamaCountOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
  }

  export type Felvettek_SzamaAvgOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
  }

  export type Felvettek_SzamaMaxOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
  }

  export type Felvettek_SzamaMinOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
  }

  export type Felvettek_SzamaSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
  }

  export type Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanulo_LetszamCreateWithoutAlapadatokInput[] | Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput | Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanulo_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Tanar_LetszamCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanar_LetszamCreateWithoutAlapadatokInput[] | Tanar_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanar_LetszamCreateOrConnectWithoutAlapadatokInput | Tanar_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanar_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
  }

  export type Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput> | Felvettek_SzamaCreateWithoutAlapadatokInput[] | Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput | Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Felvettek_SzamaCreateManyAlapadatokInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanulo_LetszamCreateWithoutAlapadatokInput[] | Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput | Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanulo_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanar_LetszamCreateWithoutAlapadatokInput[] | Tanar_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanar_LetszamCreateOrConnectWithoutAlapadatokInput | Tanar_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanar_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
  }

  export type Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput> | Felvettek_SzamaCreateWithoutAlapadatokInput[] | Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput | Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Felvettek_SzamaCreateManyAlapadatokInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanulo_LetszamCreateWithoutAlapadatokInput[] | Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput | Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Tanulo_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput | Tanulo_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Tanulo_LetszamCreateManyAlapadatokInputEnvelope
    set?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    disconnect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    delete?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    update?: Tanulo_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput | Tanulo_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Tanulo_LetszamUpdateManyWithWhereWithoutAlapadatokInput | Tanulo_LetszamUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
  }

  export type Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanar_LetszamCreateWithoutAlapadatokInput[] | Tanar_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanar_LetszamCreateOrConnectWithoutAlapadatokInput | Tanar_LetszamCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Tanar_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput | Tanar_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Tanar_LetszamCreateManyAlapadatokInputEnvelope
    set?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    disconnect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    delete?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    connect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    update?: Tanar_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput | Tanar_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Tanar_LetszamUpdateManyWithWhereWithoutAlapadatokInput | Tanar_LetszamUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Tanar_LetszamScalarWhereInput | Tanar_LetszamScalarWhereInput[]
  }

  export type Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput> | Felvettek_SzamaCreateWithoutAlapadatokInput[] | Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput | Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Felvettek_SzamaUpsertWithWhereUniqueWithoutAlapadatokInput | Felvettek_SzamaUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Felvettek_SzamaCreateManyAlapadatokInputEnvelope
    set?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    disconnect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    delete?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    update?: Felvettek_SzamaUpdateWithWhereUniqueWithoutAlapadatokInput | Felvettek_SzamaUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Felvettek_SzamaUpdateManyWithWhereWithoutAlapadatokInput | Felvettek_SzamaUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanulo_LetszamCreateWithoutAlapadatokInput[] | Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput | Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Tanulo_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput | Tanulo_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Tanulo_LetszamCreateManyAlapadatokInputEnvelope
    set?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    disconnect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    delete?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    update?: Tanulo_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput | Tanulo_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Tanulo_LetszamUpdateManyWithWhereWithoutAlapadatokInput | Tanulo_LetszamUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
  }

  export type Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanar_LetszamCreateWithoutAlapadatokInput[] | Tanar_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanar_LetszamCreateOrConnectWithoutAlapadatokInput | Tanar_LetszamCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Tanar_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput | Tanar_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Tanar_LetszamCreateManyAlapadatokInputEnvelope
    set?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    disconnect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    delete?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    connect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
    update?: Tanar_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput | Tanar_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Tanar_LetszamUpdateManyWithWhereWithoutAlapadatokInput | Tanar_LetszamUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Tanar_LetszamScalarWhereInput | Tanar_LetszamScalarWhereInput[]
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput> | Felvettek_SzamaCreateWithoutAlapadatokInput[] | Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput | Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Felvettek_SzamaUpsertWithWhereUniqueWithoutAlapadatokInput | Felvettek_SzamaUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Felvettek_SzamaCreateManyAlapadatokInputEnvelope
    set?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    disconnect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    delete?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    update?: Felvettek_SzamaUpdateWithWhereUniqueWithoutAlapadatokInput | Felvettek_SzamaUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Felvettek_SzamaUpdateManyWithWhereWithoutAlapadatokInput | Felvettek_SzamaUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
  }

  export type Tanulo_LetszamCreateNestedManyWithoutSzakiranyInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput> | Tanulo_LetszamCreateWithoutSzakiranyInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput | Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput[]
    createMany?: Tanulo_LetszamCreateManySzakiranyInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakiranyInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput> | Tanulo_LetszamCreateWithoutSzakiranyInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput | Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput[]
    createMany?: Tanulo_LetszamCreateManySzakiranyInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Tanulo_LetszamUpdateManyWithoutSzakiranyNestedInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput> | Tanulo_LetszamCreateWithoutSzakiranyInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput | Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput[]
    upsert?: Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakiranyInput | Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakiranyInput[]
    createMany?: Tanulo_LetszamCreateManySzakiranyInputEnvelope
    set?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    disconnect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    delete?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    update?: Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakiranyInput | Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakiranyInput[]
    updateMany?: Tanulo_LetszamUpdateManyWithWhereWithoutSzakiranyInput | Tanulo_LetszamUpdateManyWithWhereWithoutSzakiranyInput[]
    deleteMany?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyNestedInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput> | Tanulo_LetszamCreateWithoutSzakiranyInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput | Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput[]
    upsert?: Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakiranyInput | Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakiranyInput[]
    createMany?: Tanulo_LetszamCreateManySzakiranyInputEnvelope
    set?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    disconnect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    delete?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    update?: Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakiranyInput | Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakiranyInput[]
    updateMany?: Tanulo_LetszamUpdateManyWithWhereWithoutSzakiranyInput | Tanulo_LetszamUpdateManyWithWhereWithoutSzakiranyInput[]
    deleteMany?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
  }

  export type Tanulo_LetszamCreateNestedManyWithoutSzakmaInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput> | Tanulo_LetszamCreateWithoutSzakmaInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakmaInput | Tanulo_LetszamCreateOrConnectWithoutSzakmaInput[]
    createMany?: Tanulo_LetszamCreateManySzakmaInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Felvettek_SzamaCreateNestedManyWithoutSzakmaInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput> | Felvettek_SzamaCreateWithoutSzakmaInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakmaInput | Felvettek_SzamaCreateOrConnectWithoutSzakmaInput[]
    createMany?: Felvettek_SzamaCreateManySzakmaInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakmaInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput> | Tanulo_LetszamCreateWithoutSzakmaInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakmaInput | Tanulo_LetszamCreateOrConnectWithoutSzakmaInput[]
    createMany?: Tanulo_LetszamCreateManySzakmaInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakmaInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput> | Felvettek_SzamaCreateWithoutSzakmaInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakmaInput | Felvettek_SzamaCreateOrConnectWithoutSzakmaInput[]
    createMany?: Felvettek_SzamaCreateManySzakmaInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanulo_LetszamUpdateManyWithoutSzakmaNestedInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput> | Tanulo_LetszamCreateWithoutSzakmaInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakmaInput | Tanulo_LetszamCreateOrConnectWithoutSzakmaInput[]
    upsert?: Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakmaInput | Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakmaInput[]
    createMany?: Tanulo_LetszamCreateManySzakmaInputEnvelope
    set?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    disconnect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    delete?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    update?: Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakmaInput | Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakmaInput[]
    updateMany?: Tanulo_LetszamUpdateManyWithWhereWithoutSzakmaInput | Tanulo_LetszamUpdateManyWithWhereWithoutSzakmaInput[]
    deleteMany?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
  }

  export type Felvettek_SzamaUpdateManyWithoutSzakmaNestedInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput> | Felvettek_SzamaCreateWithoutSzakmaInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakmaInput | Felvettek_SzamaCreateOrConnectWithoutSzakmaInput[]
    upsert?: Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakmaInput | Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakmaInput[]
    createMany?: Felvettek_SzamaCreateManySzakmaInputEnvelope
    set?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    disconnect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    delete?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    update?: Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakmaInput | Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakmaInput[]
    updateMany?: Felvettek_SzamaUpdateManyWithWhereWithoutSzakmaInput | Felvettek_SzamaUpdateManyWithWhereWithoutSzakmaInput[]
    deleteMany?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaNestedInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput> | Tanulo_LetszamCreateWithoutSzakmaInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakmaInput | Tanulo_LetszamCreateOrConnectWithoutSzakmaInput[]
    upsert?: Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakmaInput | Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakmaInput[]
    createMany?: Tanulo_LetszamCreateManySzakmaInputEnvelope
    set?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    disconnect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    delete?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
    update?: Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakmaInput | Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakmaInput[]
    updateMany?: Tanulo_LetszamUpdateManyWithWhereWithoutSzakmaInput | Tanulo_LetszamUpdateManyWithWhereWithoutSzakmaInput[]
    deleteMany?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaNestedInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput> | Felvettek_SzamaCreateWithoutSzakmaInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakmaInput | Felvettek_SzamaCreateOrConnectWithoutSzakmaInput[]
    upsert?: Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakmaInput | Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakmaInput[]
    createMany?: Felvettek_SzamaCreateManySzakmaInputEnvelope
    set?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    disconnect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    delete?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    update?: Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakmaInput | Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakmaInput[]
    updateMany?: Felvettek_SzamaUpdateManyWithWhereWithoutSzakmaInput | Felvettek_SzamaUpdateManyWithWhereWithoutSzakmaInput[]
    deleteMany?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
  }

  export type AlapadatokCreateNestedOneWithoutTanulo_letszamInput = {
    create?: XOR<AlapadatokCreateWithoutTanulo_letszamInput, AlapadatokUncheckedCreateWithoutTanulo_letszamInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutTanulo_letszamInput
    connect?: AlapadatokWhereUniqueInput
  }

  export type SzakiranyCreateNestedOneWithoutTanulo_letszamInput = {
    create?: XOR<SzakiranyCreateWithoutTanulo_letszamInput, SzakiranyUncheckedCreateWithoutTanulo_letszamInput>
    connectOrCreate?: SzakiranyCreateOrConnectWithoutTanulo_letszamInput
    connect?: SzakiranyWhereUniqueInput
  }

  export type SzakmaCreateNestedOneWithoutTanulo_letszamInput = {
    create?: XOR<SzakmaCreateWithoutTanulo_letszamInput, SzakmaUncheckedCreateWithoutTanulo_letszamInput>
    connectOrCreate?: SzakmaCreateOrConnectWithoutTanulo_letszamInput
    connect?: SzakmaWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlapadatokUpdateOneRequiredWithoutTanulo_letszamNestedInput = {
    create?: XOR<AlapadatokCreateWithoutTanulo_letszamInput, AlapadatokUncheckedCreateWithoutTanulo_letszamInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutTanulo_letszamInput
    upsert?: AlapadatokUpsertWithoutTanulo_letszamInput
    connect?: AlapadatokWhereUniqueInput
    update?: XOR<XOR<AlapadatokUpdateToOneWithWhereWithoutTanulo_letszamInput, AlapadatokUpdateWithoutTanulo_letszamInput>, AlapadatokUncheckedUpdateWithoutTanulo_letszamInput>
  }

  export type SzakiranyUpdateOneRequiredWithoutTanulo_letszamNestedInput = {
    create?: XOR<SzakiranyCreateWithoutTanulo_letszamInput, SzakiranyUncheckedCreateWithoutTanulo_letszamInput>
    connectOrCreate?: SzakiranyCreateOrConnectWithoutTanulo_letszamInput
    upsert?: SzakiranyUpsertWithoutTanulo_letszamInput
    connect?: SzakiranyWhereUniqueInput
    update?: XOR<XOR<SzakiranyUpdateToOneWithWhereWithoutTanulo_letszamInput, SzakiranyUpdateWithoutTanulo_letszamInput>, SzakiranyUncheckedUpdateWithoutTanulo_letszamInput>
  }

  export type SzakmaUpdateOneRequiredWithoutTanulo_letszamNestedInput = {
    create?: XOR<SzakmaCreateWithoutTanulo_letszamInput, SzakmaUncheckedCreateWithoutTanulo_letszamInput>
    connectOrCreate?: SzakmaCreateOrConnectWithoutTanulo_letszamInput
    upsert?: SzakmaUpsertWithoutTanulo_letszamInput
    connect?: SzakmaWhereUniqueInput
    update?: XOR<XOR<SzakmaUpdateToOneWithWhereWithoutTanulo_letszamInput, SzakmaUpdateWithoutTanulo_letszamInput>, SzakmaUncheckedUpdateWithoutTanulo_letszamInput>
  }

  export type AlapadatokCreateNestedOneWithoutTanar_letszamInput = {
    create?: XOR<AlapadatokCreateWithoutTanar_letszamInput, AlapadatokUncheckedCreateWithoutTanar_letszamInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutTanar_letszamInput
    connect?: AlapadatokWhereUniqueInput
  }

  export type AlapadatokUpdateOneRequiredWithoutTanar_letszamNestedInput = {
    create?: XOR<AlapadatokCreateWithoutTanar_letszamInput, AlapadatokUncheckedCreateWithoutTanar_letszamInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutTanar_letszamInput
    upsert?: AlapadatokUpsertWithoutTanar_letszamInput
    connect?: AlapadatokWhereUniqueInput
    update?: XOR<XOR<AlapadatokUpdateToOneWithWhereWithoutTanar_letszamInput, AlapadatokUpdateWithoutTanar_letszamInput>, AlapadatokUncheckedUpdateWithoutTanar_letszamInput>
  }

  export type AlapadatokCreateNestedOneWithoutFelvettek_szamaInput = {
    create?: XOR<AlapadatokCreateWithoutFelvettek_szamaInput, AlapadatokUncheckedCreateWithoutFelvettek_szamaInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutFelvettek_szamaInput
    connect?: AlapadatokWhereUniqueInput
  }

  export type SzakmaCreateNestedOneWithoutFelvettek_szamaInput = {
    create?: XOR<SzakmaCreateWithoutFelvettek_szamaInput, SzakmaUncheckedCreateWithoutFelvettek_szamaInput>
    connectOrCreate?: SzakmaCreateOrConnectWithoutFelvettek_szamaInput
    connect?: SzakmaWhereUniqueInput
  }

  export type AlapadatokUpdateOneRequiredWithoutFelvettek_szamaNestedInput = {
    create?: XOR<AlapadatokCreateWithoutFelvettek_szamaInput, AlapadatokUncheckedCreateWithoutFelvettek_szamaInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutFelvettek_szamaInput
    upsert?: AlapadatokUpsertWithoutFelvettek_szamaInput
    connect?: AlapadatokWhereUniqueInput
    update?: XOR<XOR<AlapadatokUpdateToOneWithWhereWithoutFelvettek_szamaInput, AlapadatokUpdateWithoutFelvettek_szamaInput>, AlapadatokUncheckedUpdateWithoutFelvettek_szamaInput>
  }

  export type SzakmaUpdateOneRequiredWithoutFelvettek_szamaNestedInput = {
    create?: XOR<SzakmaCreateWithoutFelvettek_szamaInput, SzakmaUncheckedCreateWithoutFelvettek_szamaInput>
    connectOrCreate?: SzakmaCreateOrConnectWithoutFelvettek_szamaInput
    upsert?: SzakmaUpsertWithoutFelvettek_szamaInput
    connect?: SzakmaWhereUniqueInput
    update?: XOR<XOR<SzakmaUpdateToOneWithWhereWithoutFelvettek_szamaInput, SzakmaUpdateWithoutFelvettek_szamaInput>, SzakmaUncheckedUpdateWithoutFelvettek_szamaInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Tanulo_LetszamCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany: SzakiranyCreateNestedOneWithoutTanulo_letszamInput
    szakma: SzakmaCreateNestedOneWithoutTanulo_letszamInput
  }

  export type Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
  }

  export type Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput = {
    where: Tanulo_LetszamWhereUniqueInput
    create: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanulo_LetszamCreateManyAlapadatokInputEnvelope = {
    data: Tanulo_LetszamCreateManyAlapadatokInput | Tanulo_LetszamCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type Tanar_LetszamCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
  }

  export type Tanar_LetszamUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
  }

  export type Tanar_LetszamCreateOrConnectWithoutAlapadatokInput = {
    where: Tanar_LetszamWhereUniqueInput
    create: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanar_LetszamCreateManyAlapadatokInputEnvelope = {
    data: Tanar_LetszamCreateManyAlapadatokInput | Tanar_LetszamCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type Felvettek_SzamaCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    szakma: SzakmaCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
  }

  export type Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput = {
    where: Felvettek_SzamaWhereUniqueInput
    create: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput>
  }

  export type Felvettek_SzamaCreateManyAlapadatokInputEnvelope = {
    data: Felvettek_SzamaCreateManyAlapadatokInput | Felvettek_SzamaCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type Tanulo_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput = {
    where: Tanulo_LetszamWhereUniqueInput
    update: XOR<Tanulo_LetszamUpdateWithoutAlapadatokInput, Tanulo_LetszamUncheckedUpdateWithoutAlapadatokInput>
    create: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanulo_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput = {
    where: Tanulo_LetszamWhereUniqueInput
    data: XOR<Tanulo_LetszamUpdateWithoutAlapadatokInput, Tanulo_LetszamUncheckedUpdateWithoutAlapadatokInput>
  }

  export type Tanulo_LetszamUpdateManyWithWhereWithoutAlapadatokInput = {
    where: Tanulo_LetszamScalarWhereInput
    data: XOR<Tanulo_LetszamUpdateManyMutationInput, Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokInput>
  }

  export type Tanulo_LetszamScalarWhereInput = {
    AND?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
    OR?: Tanulo_LetszamScalarWhereInput[]
    NOT?: Tanulo_LetszamScalarWhereInput | Tanulo_LetszamScalarWhereInput[]
    id?: UuidFilter<"Tanulo_Letszam"> | string
    alapadatok_id?: UuidFilter<"Tanulo_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanulo_Letszam"> | number
    jogv_tipus?: IntFilter<"Tanulo_Letszam"> | number
    letszam?: IntFilter<"Tanulo_Letszam"> | number
    szakirany_id?: UuidFilter<"Tanulo_Letszam"> | string
    szakma_id?: UuidFilter<"Tanulo_Letszam"> | string
  }

  export type Tanar_LetszamUpsertWithWhereUniqueWithoutAlapadatokInput = {
    where: Tanar_LetszamWhereUniqueInput
    update: XOR<Tanar_LetszamUpdateWithoutAlapadatokInput, Tanar_LetszamUncheckedUpdateWithoutAlapadatokInput>
    create: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanar_LetszamUpdateWithWhereUniqueWithoutAlapadatokInput = {
    where: Tanar_LetszamWhereUniqueInput
    data: XOR<Tanar_LetszamUpdateWithoutAlapadatokInput, Tanar_LetszamUncheckedUpdateWithoutAlapadatokInput>
  }

  export type Tanar_LetszamUpdateManyWithWhereWithoutAlapadatokInput = {
    where: Tanar_LetszamScalarWhereInput
    data: XOR<Tanar_LetszamUpdateManyMutationInput, Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokInput>
  }

  export type Tanar_LetszamScalarWhereInput = {
    AND?: Tanar_LetszamScalarWhereInput | Tanar_LetszamScalarWhereInput[]
    OR?: Tanar_LetszamScalarWhereInput[]
    NOT?: Tanar_LetszamScalarWhereInput | Tanar_LetszamScalarWhereInput[]
    id?: UuidFilter<"Tanar_Letszam"> | string
    alapadatok_id?: UuidFilter<"Tanar_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanar_Letszam"> | number
    letszam?: IntFilter<"Tanar_Letszam"> | number
  }

  export type Felvettek_SzamaUpsertWithWhereUniqueWithoutAlapadatokInput = {
    where: Felvettek_SzamaWhereUniqueInput
    update: XOR<Felvettek_SzamaUpdateWithoutAlapadatokInput, Felvettek_SzamaUncheckedUpdateWithoutAlapadatokInput>
    create: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput>
  }

  export type Felvettek_SzamaUpdateWithWhereUniqueWithoutAlapadatokInput = {
    where: Felvettek_SzamaWhereUniqueInput
    data: XOR<Felvettek_SzamaUpdateWithoutAlapadatokInput, Felvettek_SzamaUncheckedUpdateWithoutAlapadatokInput>
  }

  export type Felvettek_SzamaUpdateManyWithWhereWithoutAlapadatokInput = {
    where: Felvettek_SzamaScalarWhereInput
    data: XOR<Felvettek_SzamaUpdateManyMutationInput, Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokInput>
  }

  export type Felvettek_SzamaScalarWhereInput = {
    AND?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
    OR?: Felvettek_SzamaScalarWhereInput[]
    NOT?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
    id?: UuidFilter<"Felvettek_Szama"> | string
    alapadatok_id?: UuidFilter<"Felvettek_Szama"> | string
    tanev_kezdete?: IntFilter<"Felvettek_Szama"> | number
    szakma_id?: UuidFilter<"Felvettek_Szama"> | string
    jelentkezo_letszam?: IntFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntFilter<"Felvettek_Szama"> | number
  }

  export type Tanulo_LetszamCreateWithoutSzakiranyInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    alapadatok: AlapadatokCreateNestedOneWithoutTanulo_letszamInput
    szakma: SzakmaCreateNestedOneWithoutTanulo_letszamInput
  }

  export type Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakma_id: string
  }

  export type Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput = {
    where: Tanulo_LetszamWhereUniqueInput
    create: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput>
  }

  export type Tanulo_LetszamCreateManySzakiranyInputEnvelope = {
    data: Tanulo_LetszamCreateManySzakiranyInput | Tanulo_LetszamCreateManySzakiranyInput[]
    skipDuplicates?: boolean
  }

  export type Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakiranyInput = {
    where: Tanulo_LetszamWhereUniqueInput
    update: XOR<Tanulo_LetszamUpdateWithoutSzakiranyInput, Tanulo_LetszamUncheckedUpdateWithoutSzakiranyInput>
    create: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput>
  }

  export type Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakiranyInput = {
    where: Tanulo_LetszamWhereUniqueInput
    data: XOR<Tanulo_LetszamUpdateWithoutSzakiranyInput, Tanulo_LetszamUncheckedUpdateWithoutSzakiranyInput>
  }

  export type Tanulo_LetszamUpdateManyWithWhereWithoutSzakiranyInput = {
    where: Tanulo_LetszamScalarWhereInput
    data: XOR<Tanulo_LetszamUpdateManyMutationInput, Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyInput>
  }

  export type Tanulo_LetszamCreateWithoutSzakmaInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    alapadatok: AlapadatokCreateNestedOneWithoutTanulo_letszamInput
    szakirany: SzakiranyCreateNestedOneWithoutTanulo_letszamInput
  }

  export type Tanulo_LetszamUncheckedCreateWithoutSzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
  }

  export type Tanulo_LetszamCreateOrConnectWithoutSzakmaInput = {
    where: Tanulo_LetszamWhereUniqueInput
    create: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput>
  }

  export type Tanulo_LetszamCreateManySzakmaInputEnvelope = {
    data: Tanulo_LetszamCreateManySzakmaInput | Tanulo_LetszamCreateManySzakmaInput[]
    skipDuplicates?: boolean
  }

  export type Felvettek_SzamaCreateWithoutSzakmaInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    alapadatok: AlapadatokCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateWithoutSzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
  }

  export type Felvettek_SzamaCreateOrConnectWithoutSzakmaInput = {
    where: Felvettek_SzamaWhereUniqueInput
    create: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput>
  }

  export type Felvettek_SzamaCreateManySzakmaInputEnvelope = {
    data: Felvettek_SzamaCreateManySzakmaInput | Felvettek_SzamaCreateManySzakmaInput[]
    skipDuplicates?: boolean
  }

  export type Tanulo_LetszamUpsertWithWhereUniqueWithoutSzakmaInput = {
    where: Tanulo_LetszamWhereUniqueInput
    update: XOR<Tanulo_LetszamUpdateWithoutSzakmaInput, Tanulo_LetszamUncheckedUpdateWithoutSzakmaInput>
    create: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput>
  }

  export type Tanulo_LetszamUpdateWithWhereUniqueWithoutSzakmaInput = {
    where: Tanulo_LetszamWhereUniqueInput
    data: XOR<Tanulo_LetszamUpdateWithoutSzakmaInput, Tanulo_LetszamUncheckedUpdateWithoutSzakmaInput>
  }

  export type Tanulo_LetszamUpdateManyWithWhereWithoutSzakmaInput = {
    where: Tanulo_LetszamScalarWhereInput
    data: XOR<Tanulo_LetszamUpdateManyMutationInput, Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaInput>
  }

  export type Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakmaInput = {
    where: Felvettek_SzamaWhereUniqueInput
    update: XOR<Felvettek_SzamaUpdateWithoutSzakmaInput, Felvettek_SzamaUncheckedUpdateWithoutSzakmaInput>
    create: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput>
  }

  export type Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakmaInput = {
    where: Felvettek_SzamaWhereUniqueInput
    data: XOR<Felvettek_SzamaUpdateWithoutSzakmaInput, Felvettek_SzamaUncheckedUpdateWithoutSzakmaInput>
  }

  export type Felvettek_SzamaUpdateManyWithWhereWithoutSzakmaInput = {
    where: Felvettek_SzamaScalarWhereInput
    data: XOR<Felvettek_SzamaUpdateManyMutationInput, Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaInput>
  }

  export type AlapadatokCreateWithoutTanulo_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutTanulo_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutTanulo_letszamInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutTanulo_letszamInput, AlapadatokUncheckedCreateWithoutTanulo_letszamInput>
  }

  export type SzakiranyCreateWithoutTanulo_letszamInput = {
    id?: string
    nev: string
  }

  export type SzakiranyUncheckedCreateWithoutTanulo_letszamInput = {
    id?: string
    nev: string
  }

  export type SzakiranyCreateOrConnectWithoutTanulo_letszamInput = {
    where: SzakiranyWhereUniqueInput
    create: XOR<SzakiranyCreateWithoutTanulo_letszamInput, SzakiranyUncheckedCreateWithoutTanulo_letszamInput>
  }

  export type SzakmaCreateWithoutTanulo_letszamInput = {
    id?: string
    nev: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaUncheckedCreateWithoutTanulo_letszamInput = {
    id?: string
    nev: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaCreateOrConnectWithoutTanulo_letszamInput = {
    where: SzakmaWhereUniqueInput
    create: XOR<SzakmaCreateWithoutTanulo_letszamInput, SzakmaUncheckedCreateWithoutTanulo_letszamInput>
  }

  export type AlapadatokUpsertWithoutTanulo_letszamInput = {
    update: XOR<AlapadatokUpdateWithoutTanulo_letszamInput, AlapadatokUncheckedUpdateWithoutTanulo_letszamInput>
    create: XOR<AlapadatokCreateWithoutTanulo_letszamInput, AlapadatokUncheckedCreateWithoutTanulo_letszamInput>
    where?: AlapadatokWhereInput
  }

  export type AlapadatokUpdateToOneWithWhereWithoutTanulo_letszamInput = {
    where?: AlapadatokWhereInput
    data: XOR<AlapadatokUpdateWithoutTanulo_letszamInput, AlapadatokUncheckedUpdateWithoutTanulo_letszamInput>
  }

  export type AlapadatokUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type SzakiranyUpsertWithoutTanulo_letszamInput = {
    update: XOR<SzakiranyUpdateWithoutTanulo_letszamInput, SzakiranyUncheckedUpdateWithoutTanulo_letszamInput>
    create: XOR<SzakiranyCreateWithoutTanulo_letszamInput, SzakiranyUncheckedCreateWithoutTanulo_letszamInput>
    where?: SzakiranyWhereInput
  }

  export type SzakiranyUpdateToOneWithWhereWithoutTanulo_letszamInput = {
    where?: SzakiranyWhereInput
    data: XOR<SzakiranyUpdateWithoutTanulo_letszamInput, SzakiranyUncheckedUpdateWithoutTanulo_letszamInput>
  }

  export type SzakiranyUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
  }

  export type SzakiranyUncheckedUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
  }

  export type SzakmaUpsertWithoutTanulo_letszamInput = {
    update: XOR<SzakmaUpdateWithoutTanulo_letszamInput, SzakmaUncheckedUpdateWithoutTanulo_letszamInput>
    create: XOR<SzakmaCreateWithoutTanulo_letszamInput, SzakmaUncheckedCreateWithoutTanulo_letszamInput>
    where?: SzakmaWhereInput
  }

  export type SzakmaUpdateToOneWithWhereWithoutTanulo_letszamInput = {
    where?: SzakmaWhereInput
    data: XOR<SzakmaUpdateWithoutTanulo_letszamInput, SzakmaUncheckedUpdateWithoutTanulo_letszamInput>
  }

  export type SzakmaUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutSzakmaNestedInput
  }

  export type SzakmaUncheckedUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaNestedInput
  }

  export type AlapadatokCreateWithoutTanar_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutTanar_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutTanar_letszamInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutTanar_letszamInput, AlapadatokUncheckedCreateWithoutTanar_letszamInput>
  }

  export type AlapadatokUpsertWithoutTanar_letszamInput = {
    update: XOR<AlapadatokUpdateWithoutTanar_letszamInput, AlapadatokUncheckedUpdateWithoutTanar_letszamInput>
    create: XOR<AlapadatokCreateWithoutTanar_letszamInput, AlapadatokUncheckedCreateWithoutTanar_letszamInput>
    where?: AlapadatokWhereInput
  }

  export type AlapadatokUpdateToOneWithWhereWithoutTanar_letszamInput = {
    where?: AlapadatokWhereInput
    data: XOR<AlapadatokUpdateWithoutTanar_letszamInput, AlapadatokUncheckedUpdateWithoutTanar_letszamInput>
  }

  export type AlapadatokUpdateWithoutTanar_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutTanar_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokCreateWithoutFelvettek_szamaInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutFelvettek_szamaInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutFelvettek_szamaInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutFelvettek_szamaInput, AlapadatokUncheckedCreateWithoutFelvettek_szamaInput>
  }

  export type SzakmaCreateWithoutFelvettek_szamaInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaUncheckedCreateWithoutFelvettek_szamaInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaCreateOrConnectWithoutFelvettek_szamaInput = {
    where: SzakmaWhereUniqueInput
    create: XOR<SzakmaCreateWithoutFelvettek_szamaInput, SzakmaUncheckedCreateWithoutFelvettek_szamaInput>
  }

  export type AlapadatokUpsertWithoutFelvettek_szamaInput = {
    update: XOR<AlapadatokUpdateWithoutFelvettek_szamaInput, AlapadatokUncheckedUpdateWithoutFelvettek_szamaInput>
    create: XOR<AlapadatokCreateWithoutFelvettek_szamaInput, AlapadatokUncheckedCreateWithoutFelvettek_szamaInput>
    where?: AlapadatokWhereInput
  }

  export type AlapadatokUpdateToOneWithWhereWithoutFelvettek_szamaInput = {
    where?: AlapadatokWhereInput
    data: XOR<AlapadatokUpdateWithoutFelvettek_szamaInput, AlapadatokUncheckedUpdateWithoutFelvettek_szamaInput>
  }

  export type AlapadatokUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type SzakmaUpsertWithoutFelvettek_szamaInput = {
    update: XOR<SzakmaUpdateWithoutFelvettek_szamaInput, SzakmaUncheckedUpdateWithoutFelvettek_szamaInput>
    create: XOR<SzakmaCreateWithoutFelvettek_szamaInput, SzakmaUncheckedCreateWithoutFelvettek_szamaInput>
    where?: SzakmaWhereInput
  }

  export type SzakmaUpdateToOneWithWhereWithoutFelvettek_szamaInput = {
    where?: SzakmaWhereInput
    data: XOR<SzakmaUpdateWithoutFelvettek_szamaInput, SzakmaUncheckedUpdateWithoutFelvettek_szamaInput>
  }

  export type SzakmaUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutSzakmaNestedInput
  }

  export type SzakmaUncheckedUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaNestedInput
  }

  export type Tanulo_LetszamCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
  }

  export type Tanar_LetszamCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
  }

  export type Felvettek_SzamaCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
  }

  export type Tanulo_LetszamUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany?: SzakiranyUpdateOneRequiredWithoutTanulo_letszamNestedInput
    szakma?: SzakmaUpdateOneRequiredWithoutTanulo_letszamNestedInput
  }

  export type Tanulo_LetszamUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    szakma_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    szakma_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanar_LetszamUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Tanar_LetszamUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Felvettek_SzamaUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    szakma?: SzakmaUpdateOneRequiredWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Tanulo_LetszamCreateManySzakiranyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakma_id: string
  }

  export type Tanulo_LetszamUpdateWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutTanulo_letszamNestedInput
    szakma?: SzakmaUpdateOneRequiredWithoutTanulo_letszamNestedInput
  }

  export type Tanulo_LetszamUncheckedUpdateWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanulo_LetszamCreateManySzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
  }

  export type Felvettek_SzamaCreateManySzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
  }

  export type Tanulo_LetszamUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutTanulo_letszamNestedInput
    szakirany?: SzakiranyUpdateOneRequiredWithoutTanulo_letszamNestedInput
  }

  export type Tanulo_LetszamUncheckedUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
  }

  export type Felvettek_SzamaUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}