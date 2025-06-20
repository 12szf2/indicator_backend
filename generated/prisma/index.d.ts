
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TableAccess
 * 
 */
export type TableAccess = $Result.DefaultSelection<Prisma.$TableAccessPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>
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
 * Model Kompetencia
 * 
 */
export type Kompetencia = $Result.DefaultSelection<Prisma.$KompetenciaPayload>
/**
 * Model Tanugyi_Adatok
 * 
 */
export type Tanugyi_Adatok = $Result.DefaultSelection<Prisma.$Tanugyi_AdatokPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
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
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableAccess`: Exposes CRUD operations for the **TableAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableAccesses
    * const tableAccesses = await prisma.tableAccess.findMany()
    * ```
    */
  get tableAccess(): Prisma.TableAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.kompetencia`: Exposes CRUD operations for the **Kompetencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kompetencias
    * const kompetencias = await prisma.kompetencia.findMany()
    * ```
    */
  get kompetencia(): Prisma.KompetenciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tanugyi_Adatok`: Exposes CRUD operations for the **Tanugyi_Adatok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tanugyi_Adatoks
    * const tanugyi_Adatoks = await prisma.tanugyi_Adatok.findMany()
    * ```
    */
  get tanugyi_Adatok(): Prisma.Tanugyi_AdatokDelegate<ExtArgs, ClientOptions>;
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
    Session: 'Session',
    User: 'User',
    TableAccess: 'TableAccess',
    Log: 'Log',
    Alapadatok: 'Alapadatok',
    Szakirany: 'Szakirany',
    Szakma: 'Szakma',
    Tanulo_Letszam: 'Tanulo_Letszam',
    Tanar_Letszam: 'Tanar_Letszam',
    Felvettek_Szama: 'Felvettek_Szama',
    Kompetencia: 'Kompetencia',
    Tanugyi_Adatok: 'Tanugyi_Adatok'
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
      modelProps: "session" | "user" | "tableAccess" | "log" | "alapadatok" | "szakirany" | "szakma" | "tanulo_Letszam" | "tanar_Letszam" | "felvettek_Szama" | "kompetencia" | "tanugyi_Adatok"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TableAccess: {
        payload: Prisma.$TableAccessPayload<ExtArgs>
        fields: Prisma.TableAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>
          }
          findFirst: {
            args: Prisma.TableAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>
          }
          findMany: {
            args: Prisma.TableAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>[]
          }
          create: {
            args: Prisma.TableAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>
          }
          createMany: {
            args: Prisma.TableAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>[]
          }
          delete: {
            args: Prisma.TableAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>
          }
          update: {
            args: Prisma.TableAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>
          }
          deleteMany: {
            args: Prisma.TableAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>[]
          }
          upsert: {
            args: Prisma.TableAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableAccessPayload>
          }
          aggregate: {
            args: Prisma.TableAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableAccess>
          }
          groupBy: {
            args: Prisma.TableAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableAccessCountArgs<ExtArgs>
            result: $Utils.Optional<TableAccessCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
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
      Kompetencia: {
        payload: Prisma.$KompetenciaPayload<ExtArgs>
        fields: Prisma.KompetenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KompetenciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KompetenciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>
          }
          findFirst: {
            args: Prisma.KompetenciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KompetenciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>
          }
          findMany: {
            args: Prisma.KompetenciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>[]
          }
          create: {
            args: Prisma.KompetenciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>
          }
          createMany: {
            args: Prisma.KompetenciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KompetenciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>[]
          }
          delete: {
            args: Prisma.KompetenciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>
          }
          update: {
            args: Prisma.KompetenciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>
          }
          deleteMany: {
            args: Prisma.KompetenciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KompetenciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KompetenciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>[]
          }
          upsert: {
            args: Prisma.KompetenciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KompetenciaPayload>
          }
          aggregate: {
            args: Prisma.KompetenciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKompetencia>
          }
          groupBy: {
            args: Prisma.KompetenciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<KompetenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.KompetenciaCountArgs<ExtArgs>
            result: $Utils.Optional<KompetenciaCountAggregateOutputType> | number
          }
        }
      }
      Tanugyi_Adatok: {
        payload: Prisma.$Tanugyi_AdatokPayload<ExtArgs>
        fields: Prisma.Tanugyi_AdatokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Tanugyi_AdatokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Tanugyi_AdatokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>
          }
          findFirst: {
            args: Prisma.Tanugyi_AdatokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Tanugyi_AdatokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>
          }
          findMany: {
            args: Prisma.Tanugyi_AdatokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>[]
          }
          create: {
            args: Prisma.Tanugyi_AdatokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>
          }
          createMany: {
            args: Prisma.Tanugyi_AdatokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Tanugyi_AdatokCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>[]
          }
          delete: {
            args: Prisma.Tanugyi_AdatokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>
          }
          update: {
            args: Prisma.Tanugyi_AdatokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>
          }
          deleteMany: {
            args: Prisma.Tanugyi_AdatokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Tanugyi_AdatokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Tanugyi_AdatokUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>[]
          }
          upsert: {
            args: Prisma.Tanugyi_AdatokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Tanugyi_AdatokPayload>
          }
          aggregate: {
            args: Prisma.Tanugyi_AdatokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTanugyi_Adatok>
          }
          groupBy: {
            args: Prisma.Tanugyi_AdatokGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tanugyi_AdatokGroupByOutputType>[]
          }
          count: {
            args: Prisma.Tanugyi_AdatokCountArgs<ExtArgs>
            result: $Utils.Optional<Tanugyi_AdatokCountAggregateOutputType> | number
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
    session?: SessionOmit
    user?: UserOmit
    tableAccess?: TableAccessOmit
    log?: LogOmit
    alapadatok?: AlapadatokOmit
    szakirany?: SzakiranyOmit
    szakma?: SzakmaOmit
    tanulo_Letszam?: Tanulo_LetszamOmit
    tanar_Letszam?: Tanar_LetszamOmit
    felvettek_Szama?: Felvettek_SzamaOmit
    kompetencia?: KompetenciaOmit
    tanugyi_Adatok?: Tanugyi_AdatokOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tableAccess: number
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableAccess?: boolean | UserCountOutputTypeCountTableAccessArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTableAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type AlapadatokCountOutputType
   */

  export type AlapadatokCountOutputType = {
    felvettek_szama: number
    tanar_letszam: number
    tanugyiAdatok: number
    tanulo_letszam: number
    kompetencia: number
    users: number
  }

  export type AlapadatokCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    felvettek_szama?: boolean | AlapadatokCountOutputTypeCountFelvettek_szamaArgs
    tanar_letszam?: boolean | AlapadatokCountOutputTypeCountTanar_letszamArgs
    tanugyiAdatok?: boolean | AlapadatokCountOutputTypeCountTanugyiAdatokArgs
    tanulo_letszam?: boolean | AlapadatokCountOutputTypeCountTanulo_letszamArgs
    kompetencia?: boolean | AlapadatokCountOutputTypeCountKompetenciaArgs
    users?: boolean | AlapadatokCountOutputTypeCountUsersArgs
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
  export type AlapadatokCountOutputTypeCountFelvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Felvettek_SzamaWhereInput
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
  export type AlapadatokCountOutputTypeCountTanugyiAdatokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanugyi_AdatokWhereInput
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
  export type AlapadatokCountOutputTypeCountKompetenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KompetenciaWhereInput
  }

  /**
   * AlapadatokCountOutputType without action
   */
  export type AlapadatokCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type SzakiranyCountOutputType
   */

  export type SzakiranyCountOutputType = {
    tanulo_letszam: number
    felvettek_szama: number
  }

  export type SzakiranyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanulo_letszam?: boolean | SzakiranyCountOutputTypeCountTanulo_letszamArgs
    felvettek_szama?: boolean | SzakiranyCountOutputTypeCountFelvettek_szamaArgs
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
   * SzakiranyCountOutputType without action
   */
  export type SzakiranyCountOutputTypeCountFelvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Felvettek_SzamaWhereInput
  }


  /**
   * Count Type SzakmaCountOutputType
   */

  export type SzakmaCountOutputType = {
    felvettek_szama: number
    tanulo_letszam: number
  }

  export type SzakmaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    felvettek_szama?: boolean | SzakmaCountOutputTypeCountFelvettek_szamaArgs
    tanulo_letszam?: boolean | SzakmaCountOutputTypeCountTanulo_letszamArgs
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
  export type SzakmaCountOutputTypeCountFelvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Felvettek_SzamaWhereInput
  }

  /**
   * SzakmaCountOutputType without action
   */
  export type SzakmaCountOutputTypeCountTanulo_letszamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanulo_LetszamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    permissions: number | null
  }

  export type UserSumAggregateOutputType = {
    permissions: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    permissions: number | null
    createdAt: Date | null
    updatedAt: Date | null
    alapadatokId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    permissions: number | null
    createdAt: Date | null
    updatedAt: Date | null
    alapadatokId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    permissions: number
    createdAt: number
    updatedAt: number
    alapadatokId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    permissions?: true
  }

  export type UserSumAggregateInputType = {
    permissions?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    alapadatokId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    alapadatokId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    alapadatokId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string | null
    permissions: number
    createdAt: Date
    updatedAt: Date | null
    alapadatokId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alapadatokId?: boolean
    tableAccess?: boolean | User$tableAccessArgs<ExtArgs>
    alapadatok?: boolean | User$alapadatokArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alapadatokId?: boolean
    alapadatok?: boolean | User$alapadatokArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alapadatokId?: boolean
    alapadatok?: boolean | User$alapadatokArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    alapadatokId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "permissions" | "createdAt" | "updatedAt" | "alapadatokId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tableAccess?: boolean | User$tableAccessArgs<ExtArgs>
    alapadatok?: boolean | User$alapadatokArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | User$alapadatokArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | User$alapadatokArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tableAccess: Prisma.$TableAccessPayload<ExtArgs>[]
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs> | null
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string | null
      permissions: number
      createdAt: Date
      updatedAt: Date | null
      alapadatokId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tableAccess<T extends User$tableAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$tableAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alapadatok<T extends User$alapadatokArgs<ExtArgs> = {}>(args?: Subset<T, User$alapadatokArgs<ExtArgs>>): Prisma__AlapadatokClient<$Result.GetResult<Prisma.$AlapadatokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly permissions: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly alapadatokId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tableAccess
   */
  export type User$tableAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    where?: TableAccessWhereInput
    orderBy?: TableAccessOrderByWithRelationInput | TableAccessOrderByWithRelationInput[]
    cursor?: TableAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableAccessScalarFieldEnum | TableAccessScalarFieldEnum[]
  }

  /**
   * User.alapadatok
   */
  export type User$alapadatokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: AlapadatokWhereInput
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TableAccess
   */

  export type AggregateTableAccess = {
    _count: TableAccessCountAggregateOutputType | null
    _avg: TableAccessAvgAggregateOutputType | null
    _sum: TableAccessSumAggregateOutputType | null
    _min: TableAccessMinAggregateOutputType | null
    _max: TableAccessMaxAggregateOutputType | null
  }

  export type TableAccessAvgAggregateOutputType = {
    access: number | null
  }

  export type TableAccessSumAggregateOutputType = {
    access: number | null
  }

  export type TableAccessMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tableName: string | null
    access: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableAccessMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tableName: string | null
    access: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TableAccessCountAggregateOutputType = {
    id: number
    userId: number
    tableName: number
    access: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TableAccessAvgAggregateInputType = {
    access?: true
  }

  export type TableAccessSumAggregateInputType = {
    access?: true
  }

  export type TableAccessMinAggregateInputType = {
    id?: true
    userId?: true
    tableName?: true
    access?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableAccessMaxAggregateInputType = {
    id?: true
    userId?: true
    tableName?: true
    access?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TableAccessCountAggregateInputType = {
    id?: true
    userId?: true
    tableName?: true
    access?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TableAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableAccess to aggregate.
     */
    where?: TableAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableAccesses to fetch.
     */
    orderBy?: TableAccessOrderByWithRelationInput | TableAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableAccesses
    **/
    _count?: true | TableAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableAccessMaxAggregateInputType
  }

  export type GetTableAccessAggregateType<T extends TableAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateTableAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableAccess[P]>
      : GetScalarType<T[P], AggregateTableAccess[P]>
  }




  export type TableAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableAccessWhereInput
    orderBy?: TableAccessOrderByWithAggregationInput | TableAccessOrderByWithAggregationInput[]
    by: TableAccessScalarFieldEnum[] | TableAccessScalarFieldEnum
    having?: TableAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableAccessCountAggregateInputType | true
    _avg?: TableAccessAvgAggregateInputType
    _sum?: TableAccessSumAggregateInputType
    _min?: TableAccessMinAggregateInputType
    _max?: TableAccessMaxAggregateInputType
  }

  export type TableAccessGroupByOutputType = {
    id: string
    userId: string | null
    tableName: string
    access: number
    createdAt: Date
    updatedAt: Date | null
    _count: TableAccessCountAggregateOutputType | null
    _avg: TableAccessAvgAggregateOutputType | null
    _sum: TableAccessSumAggregateOutputType | null
    _min: TableAccessMinAggregateOutputType | null
    _max: TableAccessMaxAggregateOutputType | null
  }

  type GetTableAccessGroupByPayload<T extends TableAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableAccessGroupByOutputType[P]>
            : GetScalarType<T[P], TableAccessGroupByOutputType[P]>
        }
      >
    >


  export type TableAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tableName?: boolean
    access?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | TableAccess$userArgs<ExtArgs>
  }, ExtArgs["result"]["tableAccess"]>

  export type TableAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tableName?: boolean
    access?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | TableAccess$userArgs<ExtArgs>
  }, ExtArgs["result"]["tableAccess"]>

  export type TableAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tableName?: boolean
    access?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | TableAccess$userArgs<ExtArgs>
  }, ExtArgs["result"]["tableAccess"]>

  export type TableAccessSelectScalar = {
    id?: boolean
    userId?: boolean
    tableName?: boolean
    access?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TableAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tableName" | "access" | "createdAt" | "updatedAt", ExtArgs["result"]["tableAccess"]>
  export type TableAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TableAccess$userArgs<ExtArgs>
  }
  export type TableAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TableAccess$userArgs<ExtArgs>
  }
  export type TableAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TableAccess$userArgs<ExtArgs>
  }

  export type $TableAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      tableName: string
      access: number
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["tableAccess"]>
    composites: {}
  }

  type TableAccessGetPayload<S extends boolean | null | undefined | TableAccessDefaultArgs> = $Result.GetResult<Prisma.$TableAccessPayload, S>

  type TableAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableAccessCountAggregateInputType | true
    }

  export interface TableAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableAccess'], meta: { name: 'TableAccess' } }
    /**
     * Find zero or one TableAccess that matches the filter.
     * @param {TableAccessFindUniqueArgs} args - Arguments to find a TableAccess
     * @example
     * // Get one TableAccess
     * const tableAccess = await prisma.tableAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableAccessFindUniqueArgs>(args: SelectSubset<T, TableAccessFindUniqueArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableAccessFindUniqueOrThrowArgs} args - Arguments to find a TableAccess
     * @example
     * // Get one TableAccess
     * const tableAccess = await prisma.tableAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, TableAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessFindFirstArgs} args - Arguments to find a TableAccess
     * @example
     * // Get one TableAccess
     * const tableAccess = await prisma.tableAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableAccessFindFirstArgs>(args?: SelectSubset<T, TableAccessFindFirstArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessFindFirstOrThrowArgs} args - Arguments to find a TableAccess
     * @example
     * // Get one TableAccess
     * const tableAccess = await prisma.tableAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, TableAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableAccesses
     * const tableAccesses = await prisma.tableAccess.findMany()
     * 
     * // Get first 10 TableAccesses
     * const tableAccesses = await prisma.tableAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableAccessWithIdOnly = await prisma.tableAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableAccessFindManyArgs>(args?: SelectSubset<T, TableAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableAccess.
     * @param {TableAccessCreateArgs} args - Arguments to create a TableAccess.
     * @example
     * // Create one TableAccess
     * const TableAccess = await prisma.tableAccess.create({
     *   data: {
     *     // ... data to create a TableAccess
     *   }
     * })
     * 
     */
    create<T extends TableAccessCreateArgs>(args: SelectSubset<T, TableAccessCreateArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableAccesses.
     * @param {TableAccessCreateManyArgs} args - Arguments to create many TableAccesses.
     * @example
     * // Create many TableAccesses
     * const tableAccess = await prisma.tableAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableAccessCreateManyArgs>(args?: SelectSubset<T, TableAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableAccesses and returns the data saved in the database.
     * @param {TableAccessCreateManyAndReturnArgs} args - Arguments to create many TableAccesses.
     * @example
     * // Create many TableAccesses
     * const tableAccess = await prisma.tableAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableAccesses and only return the `id`
     * const tableAccessWithIdOnly = await prisma.tableAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, TableAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableAccess.
     * @param {TableAccessDeleteArgs} args - Arguments to delete one TableAccess.
     * @example
     * // Delete one TableAccess
     * const TableAccess = await prisma.tableAccess.delete({
     *   where: {
     *     // ... filter to delete one TableAccess
     *   }
     * })
     * 
     */
    delete<T extends TableAccessDeleteArgs>(args: SelectSubset<T, TableAccessDeleteArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableAccess.
     * @param {TableAccessUpdateArgs} args - Arguments to update one TableAccess.
     * @example
     * // Update one TableAccess
     * const tableAccess = await prisma.tableAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableAccessUpdateArgs>(args: SelectSubset<T, TableAccessUpdateArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableAccesses.
     * @param {TableAccessDeleteManyArgs} args - Arguments to filter TableAccesses to delete.
     * @example
     * // Delete a few TableAccesses
     * const { count } = await prisma.tableAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableAccessDeleteManyArgs>(args?: SelectSubset<T, TableAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableAccesses
     * const tableAccess = await prisma.tableAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableAccessUpdateManyArgs>(args: SelectSubset<T, TableAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableAccesses and returns the data updated in the database.
     * @param {TableAccessUpdateManyAndReturnArgs} args - Arguments to update many TableAccesses.
     * @example
     * // Update many TableAccesses
     * const tableAccess = await prisma.tableAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableAccesses and only return the `id`
     * const tableAccessWithIdOnly = await prisma.tableAccess.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, TableAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableAccess.
     * @param {TableAccessUpsertArgs} args - Arguments to update or create a TableAccess.
     * @example
     * // Update or create a TableAccess
     * const tableAccess = await prisma.tableAccess.upsert({
     *   create: {
     *     // ... data to create a TableAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableAccess we want to update
     *   }
     * })
     */
    upsert<T extends TableAccessUpsertArgs>(args: SelectSubset<T, TableAccessUpsertArgs<ExtArgs>>): Prisma__TableAccessClient<$Result.GetResult<Prisma.$TableAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessCountArgs} args - Arguments to filter TableAccesses to count.
     * @example
     * // Count the number of TableAccesses
     * const count = await prisma.tableAccess.count({
     *   where: {
     *     // ... the filter for the TableAccesses we want to count
     *   }
     * })
    **/
    count<T extends TableAccessCountArgs>(
      args?: Subset<T, TableAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableAccessAggregateArgs>(args: Subset<T, TableAccessAggregateArgs>): Prisma.PrismaPromise<GetTableAccessAggregateType<T>>

    /**
     * Group by TableAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAccessGroupByArgs} args - Group by arguments.
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
      T extends TableAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableAccessGroupByArgs['orderBy'] }
        : { orderBy?: TableAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableAccess model
   */
  readonly fields: TableAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends TableAccess$userArgs<ExtArgs> = {}>(args?: Subset<T, TableAccess$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TableAccess model
   */
  interface TableAccessFieldRefs {
    readonly id: FieldRef<"TableAccess", 'String'>
    readonly userId: FieldRef<"TableAccess", 'String'>
    readonly tableName: FieldRef<"TableAccess", 'String'>
    readonly access: FieldRef<"TableAccess", 'Int'>
    readonly createdAt: FieldRef<"TableAccess", 'DateTime'>
    readonly updatedAt: FieldRef<"TableAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TableAccess findUnique
   */
  export type TableAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * Filter, which TableAccess to fetch.
     */
    where: TableAccessWhereUniqueInput
  }

  /**
   * TableAccess findUniqueOrThrow
   */
  export type TableAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * Filter, which TableAccess to fetch.
     */
    where: TableAccessWhereUniqueInput
  }

  /**
   * TableAccess findFirst
   */
  export type TableAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * Filter, which TableAccess to fetch.
     */
    where?: TableAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableAccesses to fetch.
     */
    orderBy?: TableAccessOrderByWithRelationInput | TableAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableAccesses.
     */
    cursor?: TableAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableAccesses.
     */
    distinct?: TableAccessScalarFieldEnum | TableAccessScalarFieldEnum[]
  }

  /**
   * TableAccess findFirstOrThrow
   */
  export type TableAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * Filter, which TableAccess to fetch.
     */
    where?: TableAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableAccesses to fetch.
     */
    orderBy?: TableAccessOrderByWithRelationInput | TableAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableAccesses.
     */
    cursor?: TableAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableAccesses.
     */
    distinct?: TableAccessScalarFieldEnum | TableAccessScalarFieldEnum[]
  }

  /**
   * TableAccess findMany
   */
  export type TableAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * Filter, which TableAccesses to fetch.
     */
    where?: TableAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableAccesses to fetch.
     */
    orderBy?: TableAccessOrderByWithRelationInput | TableAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableAccesses.
     */
    cursor?: TableAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableAccesses.
     */
    skip?: number
    distinct?: TableAccessScalarFieldEnum | TableAccessScalarFieldEnum[]
  }

  /**
   * TableAccess create
   */
  export type TableAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a TableAccess.
     */
    data: XOR<TableAccessCreateInput, TableAccessUncheckedCreateInput>
  }

  /**
   * TableAccess createMany
   */
  export type TableAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableAccesses.
     */
    data: TableAccessCreateManyInput | TableAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableAccess createManyAndReturn
   */
  export type TableAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * The data used to create many TableAccesses.
     */
    data: TableAccessCreateManyInput | TableAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TableAccess update
   */
  export type TableAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a TableAccess.
     */
    data: XOR<TableAccessUpdateInput, TableAccessUncheckedUpdateInput>
    /**
     * Choose, which TableAccess to update.
     */
    where: TableAccessWhereUniqueInput
  }

  /**
   * TableAccess updateMany
   */
  export type TableAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableAccesses.
     */
    data: XOR<TableAccessUpdateManyMutationInput, TableAccessUncheckedUpdateManyInput>
    /**
     * Filter which TableAccesses to update
     */
    where?: TableAccessWhereInput
    /**
     * Limit how many TableAccesses to update.
     */
    limit?: number
  }

  /**
   * TableAccess updateManyAndReturn
   */
  export type TableAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * The data used to update TableAccesses.
     */
    data: XOR<TableAccessUpdateManyMutationInput, TableAccessUncheckedUpdateManyInput>
    /**
     * Filter which TableAccesses to update
     */
    where?: TableAccessWhereInput
    /**
     * Limit how many TableAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TableAccess upsert
   */
  export type TableAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the TableAccess to update in case it exists.
     */
    where: TableAccessWhereUniqueInput
    /**
     * In case the TableAccess found by the `where` argument doesn't exist, create a new TableAccess with this data.
     */
    create: XOR<TableAccessCreateInput, TableAccessUncheckedCreateInput>
    /**
     * In case the TableAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableAccessUpdateInput, TableAccessUncheckedUpdateInput>
  }

  /**
   * TableAccess delete
   */
  export type TableAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
    /**
     * Filter which TableAccess to delete.
     */
    where: TableAccessWhereUniqueInput
  }

  /**
   * TableAccess deleteMany
   */
  export type TableAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableAccesses to delete
     */
    where?: TableAccessWhereInput
    /**
     * Limit how many TableAccesses to delete.
     */
    limit?: number
  }

  /**
   * TableAccess.user
   */
  export type TableAccess$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TableAccess without action
   */
  export type TableAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableAccess
     */
    select?: TableAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableAccess
     */
    omit?: TableAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableAccessInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    method: string | null
    path: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    method: string | null
    path: string | null
    ip: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    userId: number
    method: number
    path: number
    body: number
    query: number
    headers: number
    ip: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    path?: true
    ip?: true
    userAgent?: true
    createdAt?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    path?: true
    ip?: true
    userAgent?: true
    createdAt?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    path?: true
    body?: true
    query?: true
    headers?: true
    ip?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    userId: string | null
    method: string
    path: string
    body: JsonValue | null
    query: JsonValue | null
    headers: JsonValue | null
    ip: string
    userAgent: string
    createdAt: Date
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    body?: boolean
    query?: boolean
    headers?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | Log$userArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    body?: boolean
    query?: boolean
    headers?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | Log$userArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    body?: boolean
    query?: boolean
    headers?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
    user?: boolean | Log$userArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    userId?: boolean
    method?: boolean
    path?: boolean
    body?: boolean
    query?: boolean
    headers?: boolean
    ip?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "method" | "path" | "body" | "query" | "headers" | "ip" | "userAgent" | "createdAt", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Log$userArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Log$userArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Log$userArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      method: string
      path: string
      body: Prisma.JsonValue | null
      query: Prisma.JsonValue | null
      headers: Prisma.JsonValue | null
      ip: string
      userAgent: string
      createdAt: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
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
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
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
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Log$userArgs<ExtArgs> = {}>(args?: Subset<T, Log$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Log model
   */
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly userId: FieldRef<"Log", 'String'>
    readonly method: FieldRef<"Log", 'String'>
    readonly path: FieldRef<"Log", 'String'>
    readonly body: FieldRef<"Log", 'Json'>
    readonly query: FieldRef<"Log", 'Json'>
    readonly headers: FieldRef<"Log", 'Json'>
    readonly ip: FieldRef<"Log", 'String'>
    readonly userAgent: FieldRef<"Log", 'String'>
    readonly createdAt: FieldRef<"Log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log.user
   */
  export type Log$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


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
    felvettek_szama?: boolean | Alapadatok$felvettek_szamaArgs<ExtArgs>
    tanar_letszam?: boolean | Alapadatok$tanar_letszamArgs<ExtArgs>
    tanugyiAdatok?: boolean | Alapadatok$tanugyiAdatokArgs<ExtArgs>
    tanulo_letszam?: boolean | Alapadatok$tanulo_letszamArgs<ExtArgs>
    kompetencia?: boolean | Alapadatok$kompetenciaArgs<ExtArgs>
    users?: boolean | Alapadatok$usersArgs<ExtArgs>
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
    felvettek_szama?: boolean | Alapadatok$felvettek_szamaArgs<ExtArgs>
    tanar_letszam?: boolean | Alapadatok$tanar_letszamArgs<ExtArgs>
    tanugyiAdatok?: boolean | Alapadatok$tanugyiAdatokArgs<ExtArgs>
    tanulo_letszam?: boolean | Alapadatok$tanulo_letszamArgs<ExtArgs>
    kompetencia?: boolean | Alapadatok$kompetenciaArgs<ExtArgs>
    users?: boolean | Alapadatok$usersArgs<ExtArgs>
    _count?: boolean | AlapadatokCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AlapadatokIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AlapadatokIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AlapadatokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alapadatok"
    objects: {
      felvettek_szama: Prisma.$Felvettek_SzamaPayload<ExtArgs>[]
      tanar_letszam: Prisma.$Tanar_LetszamPayload<ExtArgs>[]
      tanugyiAdatok: Prisma.$Tanugyi_AdatokPayload<ExtArgs>[]
      tanulo_letszam: Prisma.$Tanulo_LetszamPayload<ExtArgs>[]
      kompetencia: Prisma.$KompetenciaPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
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
    felvettek_szama<T extends Alapadatok$felvettek_szamaArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$felvettek_szamaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanar_letszam<T extends Alapadatok$tanar_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$tanar_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanar_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanugyiAdatok<T extends Alapadatok$tanugyiAdatokArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$tanugyiAdatokArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanulo_letszam<T extends Alapadatok$tanulo_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$tanulo_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kompetencia<T extends Alapadatok$kompetenciaArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$kompetenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Alapadatok$usersArgs<ExtArgs> = {}>(args?: Subset<T, Alapadatok$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Alapadatok.tanugyiAdatok
   */
  export type Alapadatok$tanugyiAdatokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    where?: Tanugyi_AdatokWhereInput
    orderBy?: Tanugyi_AdatokOrderByWithRelationInput | Tanugyi_AdatokOrderByWithRelationInput[]
    cursor?: Tanugyi_AdatokWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tanugyi_AdatokScalarFieldEnum | Tanugyi_AdatokScalarFieldEnum[]
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
   * Alapadatok.kompetencia
   */
  export type Alapadatok$kompetenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    where?: KompetenciaWhereInput
    orderBy?: KompetenciaOrderByWithRelationInput | KompetenciaOrderByWithRelationInput[]
    cursor?: KompetenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KompetenciaScalarFieldEnum | KompetenciaScalarFieldEnum[]
  }

  /**
   * Alapadatok.users
   */
  export type Alapadatok$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
    felvettek_szama?: boolean | Szakirany$felvettek_szamaArgs<ExtArgs>
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
    felvettek_szama?: boolean | Szakirany$felvettek_szamaArgs<ExtArgs>
    _count?: boolean | SzakiranyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SzakiranyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SzakiranyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SzakiranyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Szakirany"
    objects: {
      tanulo_letszam: Prisma.$Tanulo_LetszamPayload<ExtArgs>[]
      felvettek_szama: Prisma.$Felvettek_SzamaPayload<ExtArgs>[]
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
    felvettek_szama<T extends Szakirany$felvettek_szamaArgs<ExtArgs> = {}>(args?: Subset<T, Szakirany$felvettek_szamaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Szakirany.felvettek_szama
   */
  export type Szakirany$felvettek_szamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    felvettek_szama?: boolean | Szakma$felvettek_szamaArgs<ExtArgs>
    tanulo_letszam?: boolean | Szakma$tanulo_letszamArgs<ExtArgs>
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
    felvettek_szama?: boolean | Szakma$felvettek_szamaArgs<ExtArgs>
    tanulo_letszam?: boolean | Szakma$tanulo_letszamArgs<ExtArgs>
    _count?: boolean | SzakmaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SzakmaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SzakmaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SzakmaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Szakma"
    objects: {
      felvettek_szama: Prisma.$Felvettek_SzamaPayload<ExtArgs>[]
      tanulo_letszam: Prisma.$Tanulo_LetszamPayload<ExtArgs>[]
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
    felvettek_szama<T extends Szakma$felvettek_szamaArgs<ExtArgs> = {}>(args?: Subset<T, Szakma$felvettek_szamaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Felvettek_SzamaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tanulo_letszam<T extends Szakma$tanulo_letszamArgs<ExtArgs> = {}>(args?: Subset<T, Szakma$tanulo_letszamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanulo_LetszamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type Tanulo_LetszamMaxAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    jogv_tipus: number | null
    letszam: number | null
    szakirany_id: string | null
    szakma_id: string | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type Tanulo_LetszamCountAggregateOutputType = {
    id: number
    alapadatok_id: number
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: number
    szakma_id: number
    createAt: number
    createBy: number
    updatedAt: number
    updatedBy: number
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
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type Tanulo_LetszamMaxAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
    szakirany_id?: true
    szakma_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type Tanulo_LetszamCountAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    jogv_tipus?: true
    letszam?: true
    szakirany_id?: true
    szakma_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
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
    createAt: Date
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
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
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
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
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
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
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
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
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type Tanulo_LetszamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alapadatok_id" | "tanev_kezdete" | "jogv_tipus" | "letszam" | "szakirany_id" | "szakma_id" | "createAt" | "createBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["tanulo_Letszam"]>
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
      createAt: Date
      createBy: string | null
      updatedAt: Date | null
      updatedBy: string | null
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
    readonly createAt: FieldRef<"Tanulo_Letszam", 'DateTime'>
    readonly createBy: FieldRef<"Tanulo_Letszam", 'String'>
    readonly updatedAt: FieldRef<"Tanulo_Letszam", 'DateTime'>
    readonly updatedBy: FieldRef<"Tanulo_Letszam", 'String'>
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
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type Tanar_LetszamMaxAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    letszam: number | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type Tanar_LetszamCountAggregateOutputType = {
    id: number
    alapadatok_id: number
    tanev_kezdete: number
    letszam: number
    createAt: number
    createBy: number
    updatedAt: number
    updatedBy: number
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
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type Tanar_LetszamMaxAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    letszam?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type Tanar_LetszamCountAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    letszam?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
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
    createAt: Date
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
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
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanar_Letszam"]>

  export type Tanar_LetszamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanar_Letszam"]>

  export type Tanar_LetszamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanar_Letszam"]>

  export type Tanar_LetszamSelectScalar = {
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type Tanar_LetszamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alapadatok_id" | "tanev_kezdete" | "letszam" | "createAt" | "createBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["tanar_Letszam"]>
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
      createAt: Date
      createBy: string | null
      updatedAt: Date | null
      updatedBy: string | null
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
    readonly createAt: FieldRef<"Tanar_Letszam", 'DateTime'>
    readonly createBy: FieldRef<"Tanar_Letszam", 'String'>
    readonly updatedAt: FieldRef<"Tanar_Letszam", 'DateTime'>
    readonly updatedBy: FieldRef<"Tanar_Letszam", 'String'>
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
    szakiranyId: string | null
    jelentkezo_letszam: number | null
    felveheto_letszam: number | null
    felvett_letszam: number | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type Felvettek_SzamaMaxAggregateOutputType = {
    id: string | null
    alapadatok_id: string | null
    tanev_kezdete: number | null
    szakma_id: string | null
    szakiranyId: string | null
    jelentkezo_letszam: number | null
    felveheto_letszam: number | null
    felvett_letszam: number | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type Felvettek_SzamaCountAggregateOutputType = {
    id: number
    alapadatok_id: number
    tanev_kezdete: number
    szakma_id: number
    szakiranyId: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt: number
    createBy: number
    updatedAt: number
    updatedBy: number
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
    szakiranyId?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type Felvettek_SzamaMaxAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    szakma_id?: true
    szakiranyId?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type Felvettek_SzamaCountAggregateInputType = {
    id?: true
    alapadatok_id?: true
    tanev_kezdete?: true
    szakma_id?: true
    szakiranyId?: true
    jelentkezo_letszam?: true
    felveheto_letszam?: true
    felvett_letszam?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
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
    szakiranyId: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt: Date
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
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
    szakiranyId?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
    szakirany?: boolean | Felvettek_Szama$szakiranyArgs<ExtArgs>
  }, ExtArgs["result"]["felvettek_Szama"]>

  export type Felvettek_SzamaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    szakiranyId?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
    szakirany?: boolean | Felvettek_Szama$szakiranyArgs<ExtArgs>
  }, ExtArgs["result"]["felvettek_Szama"]>

  export type Felvettek_SzamaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    szakiranyId?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
    szakirany?: boolean | Felvettek_Szama$szakiranyArgs<ExtArgs>
  }, ExtArgs["result"]["felvettek_Szama"]>

  export type Felvettek_SzamaSelectScalar = {
    id?: boolean
    alapadatok_id?: boolean
    tanev_kezdete?: boolean
    szakma_id?: boolean
    szakiranyId?: boolean
    jelentkezo_letszam?: boolean
    felveheto_letszam?: boolean
    felvett_letszam?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type Felvettek_SzamaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alapadatok_id" | "tanev_kezdete" | "szakma_id" | "szakiranyId" | "jelentkezo_letszam" | "felveheto_letszam" | "felvett_letszam" | "createAt" | "createBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["felvettek_Szama"]>
  export type Felvettek_SzamaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
    szakirany?: boolean | Felvettek_Szama$szakiranyArgs<ExtArgs>
  }
  export type Felvettek_SzamaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
    szakirany?: boolean | Felvettek_Szama$szakiranyArgs<ExtArgs>
  }
  export type Felvettek_SzamaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
    szakma?: boolean | SzakmaDefaultArgs<ExtArgs>
    szakirany?: boolean | Felvettek_Szama$szakiranyArgs<ExtArgs>
  }

  export type $Felvettek_SzamaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Felvettek_Szama"
    objects: {
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs>
      szakma: Prisma.$SzakmaPayload<ExtArgs>
      szakirany: Prisma.$SzakiranyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alapadatok_id: string
      tanev_kezdete: number
      szakma_id: string
      szakiranyId: string | null
      jelentkezo_letszam: number
      felveheto_letszam: number
      felvett_letszam: number
      createAt: Date
      createBy: string | null
      updatedAt: Date | null
      updatedBy: string | null
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
    szakirany<T extends Felvettek_Szama$szakiranyArgs<ExtArgs> = {}>(args?: Subset<T, Felvettek_Szama$szakiranyArgs<ExtArgs>>): Prisma__SzakiranyClient<$Result.GetResult<Prisma.$SzakiranyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly szakiranyId: FieldRef<"Felvettek_Szama", 'String'>
    readonly jelentkezo_letszam: FieldRef<"Felvettek_Szama", 'Int'>
    readonly felveheto_letszam: FieldRef<"Felvettek_Szama", 'Int'>
    readonly felvett_letszam: FieldRef<"Felvettek_Szama", 'Int'>
    readonly createAt: FieldRef<"Felvettek_Szama", 'DateTime'>
    readonly createBy: FieldRef<"Felvettek_Szama", 'String'>
    readonly updatedAt: FieldRef<"Felvettek_Szama", 'DateTime'>
    readonly updatedBy: FieldRef<"Felvettek_Szama", 'String'>
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
   * Felvettek_Szama.szakirany
   */
  export type Felvettek_Szama$szakiranyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: SzakiranyWhereInput
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
   * Model Kompetencia
   */

  export type AggregateKompetencia = {
    _count: KompetenciaCountAggregateOutputType | null
    _avg: KompetenciaAvgAggregateOutputType | null
    _sum: KompetenciaSumAggregateOutputType | null
    _min: KompetenciaMinAggregateOutputType | null
    _max: KompetenciaMaxAggregateOutputType | null
  }

  export type KompetenciaAvgAggregateOutputType = {
    tanev_kezdete: number | null
  }

  export type KompetenciaSumAggregateOutputType = {
    tanev_kezdete: number | null
  }

  export type KompetenciaMinAggregateOutputType = {
    id: string | null
    tanev_kezdete: number | null
    mat_orsz_p: string | null
    szoveg_orsz_p: string | null
    mat_int_p: string | null
    szoveg_int_p: string | null
    kepzes_forma: string | null
    alapadatok_id: string | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type KompetenciaMaxAggregateOutputType = {
    id: string | null
    tanev_kezdete: number | null
    mat_orsz_p: string | null
    szoveg_orsz_p: string | null
    mat_int_p: string | null
    szoveg_int_p: string | null
    kepzes_forma: string | null
    alapadatok_id: string | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
  }

  export type KompetenciaCountAggregateOutputType = {
    id: number
    tanev_kezdete: number
    mat_orsz_p: number
    szoveg_orsz_p: number
    mat_int_p: number
    szoveg_int_p: number
    kepzes_forma: number
    alapadatok_id: number
    createAt: number
    createBy: number
    updatedAt: number
    updatedBy: number
    _all: number
  }


  export type KompetenciaAvgAggregateInputType = {
    tanev_kezdete?: true
  }

  export type KompetenciaSumAggregateInputType = {
    tanev_kezdete?: true
  }

  export type KompetenciaMinAggregateInputType = {
    id?: true
    tanev_kezdete?: true
    mat_orsz_p?: true
    szoveg_orsz_p?: true
    mat_int_p?: true
    szoveg_int_p?: true
    kepzes_forma?: true
    alapadatok_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type KompetenciaMaxAggregateInputType = {
    id?: true
    tanev_kezdete?: true
    mat_orsz_p?: true
    szoveg_orsz_p?: true
    mat_int_p?: true
    szoveg_int_p?: true
    kepzes_forma?: true
    alapadatok_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
  }

  export type KompetenciaCountAggregateInputType = {
    id?: true
    tanev_kezdete?: true
    mat_orsz_p?: true
    szoveg_orsz_p?: true
    mat_int_p?: true
    szoveg_int_p?: true
    kepzes_forma?: true
    alapadatok_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
    _all?: true
  }

  export type KompetenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kompetencia to aggregate.
     */
    where?: KompetenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetencias to fetch.
     */
    orderBy?: KompetenciaOrderByWithRelationInput | KompetenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KompetenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kompetencias
    **/
    _count?: true | KompetenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KompetenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KompetenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KompetenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KompetenciaMaxAggregateInputType
  }

  export type GetKompetenciaAggregateType<T extends KompetenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateKompetencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKompetencia[P]>
      : GetScalarType<T[P], AggregateKompetencia[P]>
  }




  export type KompetenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KompetenciaWhereInput
    orderBy?: KompetenciaOrderByWithAggregationInput | KompetenciaOrderByWithAggregationInput[]
    by: KompetenciaScalarFieldEnum[] | KompetenciaScalarFieldEnum
    having?: KompetenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KompetenciaCountAggregateInputType | true
    _avg?: KompetenciaAvgAggregateInputType
    _sum?: KompetenciaSumAggregateInputType
    _min?: KompetenciaMinAggregateInputType
    _max?: KompetenciaMaxAggregateInputType
  }

  export type KompetenciaGroupByOutputType = {
    id: string
    tanev_kezdete: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    alapadatok_id: string
    createAt: Date
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    _count: KompetenciaCountAggregateOutputType | null
    _avg: KompetenciaAvgAggregateOutputType | null
    _sum: KompetenciaSumAggregateOutputType | null
    _min: KompetenciaMinAggregateOutputType | null
    _max: KompetenciaMaxAggregateOutputType | null
  }

  type GetKompetenciaGroupByPayload<T extends KompetenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KompetenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KompetenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KompetenciaGroupByOutputType[P]>
            : GetScalarType<T[P], KompetenciaGroupByOutputType[P]>
        }
      >
    >


  export type KompetenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanev_kezdete?: boolean
    mat_orsz_p?: boolean
    szoveg_orsz_p?: boolean
    mat_int_p?: boolean
    szoveg_int_p?: boolean
    kepzes_forma?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kompetencia"]>

  export type KompetenciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanev_kezdete?: boolean
    mat_orsz_p?: boolean
    szoveg_orsz_p?: boolean
    mat_int_p?: boolean
    szoveg_int_p?: boolean
    kepzes_forma?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kompetencia"]>

  export type KompetenciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanev_kezdete?: boolean
    mat_orsz_p?: boolean
    szoveg_orsz_p?: boolean
    mat_int_p?: boolean
    szoveg_int_p?: boolean
    kepzes_forma?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kompetencia"]>

  export type KompetenciaSelectScalar = {
    id?: boolean
    tanev_kezdete?: boolean
    mat_orsz_p?: boolean
    szoveg_orsz_p?: boolean
    mat_int_p?: boolean
    szoveg_int_p?: boolean
    kepzes_forma?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
  }

  export type KompetenciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanev_kezdete" | "mat_orsz_p" | "szoveg_orsz_p" | "mat_int_p" | "szoveg_int_p" | "kepzes_forma" | "alapadatok_id" | "createAt" | "createBy" | "updatedAt" | "updatedBy", ExtArgs["result"]["kompetencia"]>
  export type KompetenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }
  export type KompetenciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }
  export type KompetenciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }

  export type $KompetenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kompetencia"
    objects: {
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanev_kezdete: number
      mat_orsz_p: string
      szoveg_orsz_p: string
      mat_int_p: string
      szoveg_int_p: string
      kepzes_forma: string
      alapadatok_id: string
      createAt: Date
      createBy: string | null
      updatedAt: Date | null
      updatedBy: string | null
    }, ExtArgs["result"]["kompetencia"]>
    composites: {}
  }

  type KompetenciaGetPayload<S extends boolean | null | undefined | KompetenciaDefaultArgs> = $Result.GetResult<Prisma.$KompetenciaPayload, S>

  type KompetenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KompetenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KompetenciaCountAggregateInputType | true
    }

  export interface KompetenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kompetencia'], meta: { name: 'Kompetencia' } }
    /**
     * Find zero or one Kompetencia that matches the filter.
     * @param {KompetenciaFindUniqueArgs} args - Arguments to find a Kompetencia
     * @example
     * // Get one Kompetencia
     * const kompetencia = await prisma.kompetencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KompetenciaFindUniqueArgs>(args: SelectSubset<T, KompetenciaFindUniqueArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kompetencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KompetenciaFindUniqueOrThrowArgs} args - Arguments to find a Kompetencia
     * @example
     * // Get one Kompetencia
     * const kompetencia = await prisma.kompetencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KompetenciaFindUniqueOrThrowArgs>(args: SelectSubset<T, KompetenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kompetencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaFindFirstArgs} args - Arguments to find a Kompetencia
     * @example
     * // Get one Kompetencia
     * const kompetencia = await prisma.kompetencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KompetenciaFindFirstArgs>(args?: SelectSubset<T, KompetenciaFindFirstArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kompetencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaFindFirstOrThrowArgs} args - Arguments to find a Kompetencia
     * @example
     * // Get one Kompetencia
     * const kompetencia = await prisma.kompetencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KompetenciaFindFirstOrThrowArgs>(args?: SelectSubset<T, KompetenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kompetencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kompetencias
     * const kompetencias = await prisma.kompetencia.findMany()
     * 
     * // Get first 10 Kompetencias
     * const kompetencias = await prisma.kompetencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kompetenciaWithIdOnly = await prisma.kompetencia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KompetenciaFindManyArgs>(args?: SelectSubset<T, KompetenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kompetencia.
     * @param {KompetenciaCreateArgs} args - Arguments to create a Kompetencia.
     * @example
     * // Create one Kompetencia
     * const Kompetencia = await prisma.kompetencia.create({
     *   data: {
     *     // ... data to create a Kompetencia
     *   }
     * })
     * 
     */
    create<T extends KompetenciaCreateArgs>(args: SelectSubset<T, KompetenciaCreateArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kompetencias.
     * @param {KompetenciaCreateManyArgs} args - Arguments to create many Kompetencias.
     * @example
     * // Create many Kompetencias
     * const kompetencia = await prisma.kompetencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KompetenciaCreateManyArgs>(args?: SelectSubset<T, KompetenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kompetencias and returns the data saved in the database.
     * @param {KompetenciaCreateManyAndReturnArgs} args - Arguments to create many Kompetencias.
     * @example
     * // Create many Kompetencias
     * const kompetencia = await prisma.kompetencia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kompetencias and only return the `id`
     * const kompetenciaWithIdOnly = await prisma.kompetencia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KompetenciaCreateManyAndReturnArgs>(args?: SelectSubset<T, KompetenciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kompetencia.
     * @param {KompetenciaDeleteArgs} args - Arguments to delete one Kompetencia.
     * @example
     * // Delete one Kompetencia
     * const Kompetencia = await prisma.kompetencia.delete({
     *   where: {
     *     // ... filter to delete one Kompetencia
     *   }
     * })
     * 
     */
    delete<T extends KompetenciaDeleteArgs>(args: SelectSubset<T, KompetenciaDeleteArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kompetencia.
     * @param {KompetenciaUpdateArgs} args - Arguments to update one Kompetencia.
     * @example
     * // Update one Kompetencia
     * const kompetencia = await prisma.kompetencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KompetenciaUpdateArgs>(args: SelectSubset<T, KompetenciaUpdateArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kompetencias.
     * @param {KompetenciaDeleteManyArgs} args - Arguments to filter Kompetencias to delete.
     * @example
     * // Delete a few Kompetencias
     * const { count } = await prisma.kompetencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KompetenciaDeleteManyArgs>(args?: SelectSubset<T, KompetenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kompetencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kompetencias
     * const kompetencia = await prisma.kompetencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KompetenciaUpdateManyArgs>(args: SelectSubset<T, KompetenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kompetencias and returns the data updated in the database.
     * @param {KompetenciaUpdateManyAndReturnArgs} args - Arguments to update many Kompetencias.
     * @example
     * // Update many Kompetencias
     * const kompetencia = await prisma.kompetencia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kompetencias and only return the `id`
     * const kompetenciaWithIdOnly = await prisma.kompetencia.updateManyAndReturn({
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
    updateManyAndReturn<T extends KompetenciaUpdateManyAndReturnArgs>(args: SelectSubset<T, KompetenciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kompetencia.
     * @param {KompetenciaUpsertArgs} args - Arguments to update or create a Kompetencia.
     * @example
     * // Update or create a Kompetencia
     * const kompetencia = await prisma.kompetencia.upsert({
     *   create: {
     *     // ... data to create a Kompetencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kompetencia we want to update
     *   }
     * })
     */
    upsert<T extends KompetenciaUpsertArgs>(args: SelectSubset<T, KompetenciaUpsertArgs<ExtArgs>>): Prisma__KompetenciaClient<$Result.GetResult<Prisma.$KompetenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kompetencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaCountArgs} args - Arguments to filter Kompetencias to count.
     * @example
     * // Count the number of Kompetencias
     * const count = await prisma.kompetencia.count({
     *   where: {
     *     // ... the filter for the Kompetencias we want to count
     *   }
     * })
    **/
    count<T extends KompetenciaCountArgs>(
      args?: Subset<T, KompetenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KompetenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kompetencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KompetenciaAggregateArgs>(args: Subset<T, KompetenciaAggregateArgs>): Prisma.PrismaPromise<GetKompetenciaAggregateType<T>>

    /**
     * Group by Kompetencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KompetenciaGroupByArgs} args - Group by arguments.
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
      T extends KompetenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KompetenciaGroupByArgs['orderBy'] }
        : { orderBy?: KompetenciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KompetenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKompetenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kompetencia model
   */
  readonly fields: KompetenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kompetencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KompetenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Kompetencia model
   */
  interface KompetenciaFieldRefs {
    readonly id: FieldRef<"Kompetencia", 'String'>
    readonly tanev_kezdete: FieldRef<"Kompetencia", 'Int'>
    readonly mat_orsz_p: FieldRef<"Kompetencia", 'String'>
    readonly szoveg_orsz_p: FieldRef<"Kompetencia", 'String'>
    readonly mat_int_p: FieldRef<"Kompetencia", 'String'>
    readonly szoveg_int_p: FieldRef<"Kompetencia", 'String'>
    readonly kepzes_forma: FieldRef<"Kompetencia", 'String'>
    readonly alapadatok_id: FieldRef<"Kompetencia", 'String'>
    readonly createAt: FieldRef<"Kompetencia", 'DateTime'>
    readonly createBy: FieldRef<"Kompetencia", 'String'>
    readonly updatedAt: FieldRef<"Kompetencia", 'DateTime'>
    readonly updatedBy: FieldRef<"Kompetencia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kompetencia findUnique
   */
  export type KompetenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * Filter, which Kompetencia to fetch.
     */
    where: KompetenciaWhereUniqueInput
  }

  /**
   * Kompetencia findUniqueOrThrow
   */
  export type KompetenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * Filter, which Kompetencia to fetch.
     */
    where: KompetenciaWhereUniqueInput
  }

  /**
   * Kompetencia findFirst
   */
  export type KompetenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * Filter, which Kompetencia to fetch.
     */
    where?: KompetenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetencias to fetch.
     */
    orderBy?: KompetenciaOrderByWithRelationInput | KompetenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kompetencias.
     */
    cursor?: KompetenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kompetencias.
     */
    distinct?: KompetenciaScalarFieldEnum | KompetenciaScalarFieldEnum[]
  }

  /**
   * Kompetencia findFirstOrThrow
   */
  export type KompetenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * Filter, which Kompetencia to fetch.
     */
    where?: KompetenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetencias to fetch.
     */
    orderBy?: KompetenciaOrderByWithRelationInput | KompetenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kompetencias.
     */
    cursor?: KompetenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kompetencias.
     */
    distinct?: KompetenciaScalarFieldEnum | KompetenciaScalarFieldEnum[]
  }

  /**
   * Kompetencia findMany
   */
  export type KompetenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * Filter, which Kompetencias to fetch.
     */
    where?: KompetenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kompetencias to fetch.
     */
    orderBy?: KompetenciaOrderByWithRelationInput | KompetenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kompetencias.
     */
    cursor?: KompetenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kompetencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kompetencias.
     */
    skip?: number
    distinct?: KompetenciaScalarFieldEnum | KompetenciaScalarFieldEnum[]
  }

  /**
   * Kompetencia create
   */
  export type KompetenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Kompetencia.
     */
    data: XOR<KompetenciaCreateInput, KompetenciaUncheckedCreateInput>
  }

  /**
   * Kompetencia createMany
   */
  export type KompetenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kompetencias.
     */
    data: KompetenciaCreateManyInput | KompetenciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kompetencia createManyAndReturn
   */
  export type KompetenciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * The data used to create many Kompetencias.
     */
    data: KompetenciaCreateManyInput | KompetenciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kompetencia update
   */
  export type KompetenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Kompetencia.
     */
    data: XOR<KompetenciaUpdateInput, KompetenciaUncheckedUpdateInput>
    /**
     * Choose, which Kompetencia to update.
     */
    where: KompetenciaWhereUniqueInput
  }

  /**
   * Kompetencia updateMany
   */
  export type KompetenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kompetencias.
     */
    data: XOR<KompetenciaUpdateManyMutationInput, KompetenciaUncheckedUpdateManyInput>
    /**
     * Filter which Kompetencias to update
     */
    where?: KompetenciaWhereInput
    /**
     * Limit how many Kompetencias to update.
     */
    limit?: number
  }

  /**
   * Kompetencia updateManyAndReturn
   */
  export type KompetenciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * The data used to update Kompetencias.
     */
    data: XOR<KompetenciaUpdateManyMutationInput, KompetenciaUncheckedUpdateManyInput>
    /**
     * Filter which Kompetencias to update
     */
    where?: KompetenciaWhereInput
    /**
     * Limit how many Kompetencias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kompetencia upsert
   */
  export type KompetenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Kompetencia to update in case it exists.
     */
    where: KompetenciaWhereUniqueInput
    /**
     * In case the Kompetencia found by the `where` argument doesn't exist, create a new Kompetencia with this data.
     */
    create: XOR<KompetenciaCreateInput, KompetenciaUncheckedCreateInput>
    /**
     * In case the Kompetencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KompetenciaUpdateInput, KompetenciaUncheckedUpdateInput>
  }

  /**
   * Kompetencia delete
   */
  export type KompetenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
    /**
     * Filter which Kompetencia to delete.
     */
    where: KompetenciaWhereUniqueInput
  }

  /**
   * Kompetencia deleteMany
   */
  export type KompetenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kompetencias to delete
     */
    where?: KompetenciaWhereInput
    /**
     * Limit how many Kompetencias to delete.
     */
    limit?: number
  }

  /**
   * Kompetencia without action
   */
  export type KompetenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kompetencia
     */
    select?: KompetenciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kompetencia
     */
    omit?: KompetenciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KompetenciaInclude<ExtArgs> | null
  }


  /**
   * Model Tanugyi_Adatok
   */

  export type AggregateTanugyi_Adatok = {
    _count: Tanugyi_AdatokCountAggregateOutputType | null
    _avg: Tanugyi_AdatokAvgAggregateOutputType | null
    _sum: Tanugyi_AdatokSumAggregateOutputType | null
    _min: Tanugyi_AdatokMinAggregateOutputType | null
    _max: Tanugyi_AdatokMaxAggregateOutputType | null
  }

  export type Tanugyi_AdatokAvgAggregateOutputType = {
    tanev_kezdete: number | null
  }

  export type Tanugyi_AdatokSumAggregateOutputType = {
    tanev_kezdete: number | null
  }

  export type Tanugyi_AdatokMinAggregateOutputType = {
    id: string | null
    elotag: string | null
    vezeteknev: string | null
    utonev: string | null
    oktatasiAzonositoja: string | null
    osztaly: string | null
    szuletesiDatuma: string | null
    anyjaSzuletesiDatuma: string | null
    tanterv: string | null
    naploSorszam: string | null
    beiras_naplo_sorszam: string | null
    felvetel_taneve: string | null
    torzslapszam: string | null
    tanulo_jogviszonya: string | null
    jogviszony_kezdete: string | null
    jogviszony_megszunesenek_varhato_datuma: string | null
    jogviszonyátSzunetelteto: string | null
    tankotelezettsegetTeljesito: string | null
    tankotelezettségVege: string | null
    bejaro: string | null
    Szakmai_gyakorlaton_tartozkodik: string | null
    Egyeni_munkarend: string | null
    Egyeni_munkarend_oka: string | null
    Egyeni_munkarend_kezdete: string | null
    Egyeni_munkarend_vege: string | null
    Vendegtanulo: string | null
    tandijat_fizeto: string | null
    teritesi_dijat_fizeto: string | null
    tanuloszerzodeses: string | null
    polgari_szerzodeses: string | null
    iskolai_sportkorben_reszt_vevo_tanulo: string | null
    evfolyamismetlo: string | null
    elozo_intezmeny: string | null
    osztaly1: string | null
    evfolyam: string | null
    bizonyitvany_sorszama: string | null
    okleveles_technikus_képzes: string | null
    uj_Szkt_agazat_tipusa: string | null
    uj_szkt_szakma_tipusa: string | null
    uj_szkt_szakmairany_tipusa: string | null
    nkt_tanulmanyi_terulet: string | null
    nkt_szakkepesites: string | null
    nkt_szakirany: string | null
    agazat_uj_szkt_reszszakmahoz: string | null
    szakma_reszszakmahoz: string | null
    reszszakma: string | null
    agazat_tanulmanyi_terulet: string | null
    szakmai_kepzes: string | null
    agazati_alapoktatas_megnevezese: string | null
    agazati_alapvizsga_eredmeny: string | null
    agazati_alapvizsga_teljesitesenek_datuma: string | null
    agazati_alapvizsga_eredmenye: string | null
    agazati_alapvizsga_eredmenye_percent: string | null
    szakkepzesi_munkaszerzodessel: string | null
    Dualis_kepzohely_neve: string | null
    Dualis_kepzohely_adoszama: string | null
    kiemelten_tehetseges: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul: string | null
    egesz_napos_iskolai_oktatasban_reszesul: string | null
    nyelvi_elokeszito: string | null
    ket_tanitasi_nyelvu: string | null
    NemzetisegiNevelesOktatas: string | null
    NemzetisegiNevelesOktatásFajtaja: string | null
    nemzetisegiNyelv: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas: string | null
    sportosztaly: string | null
    aranyjanostehetseggondozoprogram: string | null
    arany_janos_kollegiumi_program: string | null
    munkarend: string | null
    alapadatok_id: string | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: string | null
    tanev_kezdete: number | null
  }

  export type Tanugyi_AdatokMaxAggregateOutputType = {
    id: string | null
    elotag: string | null
    vezeteknev: string | null
    utonev: string | null
    oktatasiAzonositoja: string | null
    osztaly: string | null
    szuletesiDatuma: string | null
    anyjaSzuletesiDatuma: string | null
    tanterv: string | null
    naploSorszam: string | null
    beiras_naplo_sorszam: string | null
    felvetel_taneve: string | null
    torzslapszam: string | null
    tanulo_jogviszonya: string | null
    jogviszony_kezdete: string | null
    jogviszony_megszunesenek_varhato_datuma: string | null
    jogviszonyátSzunetelteto: string | null
    tankotelezettsegetTeljesito: string | null
    tankotelezettségVege: string | null
    bejaro: string | null
    Szakmai_gyakorlaton_tartozkodik: string | null
    Egyeni_munkarend: string | null
    Egyeni_munkarend_oka: string | null
    Egyeni_munkarend_kezdete: string | null
    Egyeni_munkarend_vege: string | null
    Vendegtanulo: string | null
    tandijat_fizeto: string | null
    teritesi_dijat_fizeto: string | null
    tanuloszerzodeses: string | null
    polgari_szerzodeses: string | null
    iskolai_sportkorben_reszt_vevo_tanulo: string | null
    evfolyamismetlo: string | null
    elozo_intezmeny: string | null
    osztaly1: string | null
    evfolyam: string | null
    bizonyitvany_sorszama: string | null
    okleveles_technikus_képzes: string | null
    uj_Szkt_agazat_tipusa: string | null
    uj_szkt_szakma_tipusa: string | null
    uj_szkt_szakmairany_tipusa: string | null
    nkt_tanulmanyi_terulet: string | null
    nkt_szakkepesites: string | null
    nkt_szakirany: string | null
    agazat_uj_szkt_reszszakmahoz: string | null
    szakma_reszszakmahoz: string | null
    reszszakma: string | null
    agazat_tanulmanyi_terulet: string | null
    szakmai_kepzes: string | null
    agazati_alapoktatas_megnevezese: string | null
    agazati_alapvizsga_eredmeny: string | null
    agazati_alapvizsga_teljesitesenek_datuma: string | null
    agazati_alapvizsga_eredmenye: string | null
    agazati_alapvizsga_eredmenye_percent: string | null
    szakkepzesi_munkaszerzodessel: string | null
    Dualis_kepzohely_neve: string | null
    Dualis_kepzohely_adoszama: string | null
    kiemelten_tehetseges: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul: string | null
    egesz_napos_iskolai_oktatasban_reszesul: string | null
    nyelvi_elokeszito: string | null
    ket_tanitasi_nyelvu: string | null
    NemzetisegiNevelesOktatas: string | null
    NemzetisegiNevelesOktatásFajtaja: string | null
    nemzetisegiNyelv: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas: string | null
    sportosztaly: string | null
    aranyjanostehetseggondozoprogram: string | null
    arany_janos_kollegiumi_program: string | null
    munkarend: string | null
    alapadatok_id: string | null
    createAt: Date | null
    createBy: string | null
    updatedAt: Date | null
    updatedBy: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: string | null
    tanev_kezdete: number | null
  }

  export type Tanugyi_AdatokCountAggregateOutputType = {
    id: number
    elotag: number
    vezeteknev: number
    utonev: number
    oktatasiAzonositoja: number
    osztaly: number
    szuletesiDatuma: number
    anyjaSzuletesiDatuma: number
    tanterv: number
    naploSorszam: number
    beiras_naplo_sorszam: number
    felvetel_taneve: number
    torzslapszam: number
    tanulo_jogviszonya: number
    jogviszony_kezdete: number
    jogviszony_megszunesenek_varhato_datuma: number
    jogviszonyátSzunetelteto: number
    tankotelezettsegetTeljesito: number
    tankotelezettségVege: number
    bejaro: number
    Szakmai_gyakorlaton_tartozkodik: number
    Egyeni_munkarend: number
    Egyeni_munkarend_oka: number
    Egyeni_munkarend_kezdete: number
    Egyeni_munkarend_vege: number
    Vendegtanulo: number
    tandijat_fizeto: number
    teritesi_dijat_fizeto: number
    tanuloszerzodeses: number
    polgari_szerzodeses: number
    iskolai_sportkorben_reszt_vevo_tanulo: number
    evfolyamismetlo: number
    elozo_intezmeny: number
    osztaly1: number
    evfolyam: number
    bizonyitvany_sorszama: number
    okleveles_technikus_képzes: number
    uj_Szkt_agazat_tipusa: number
    uj_szkt_szakma_tipusa: number
    uj_szkt_szakmairany_tipusa: number
    nkt_tanulmanyi_terulet: number
    nkt_szakkepesites: number
    nkt_szakirany: number
    agazat_uj_szkt_reszszakmahoz: number
    szakma_reszszakmahoz: number
    reszszakma: number
    agazat_tanulmanyi_terulet: number
    szakmai_kepzes: number
    agazati_alapoktatas_megnevezese: number
    agazati_alapvizsga_eredmeny: number
    agazati_alapvizsga_teljesitesenek_datuma: number
    agazati_alapvizsga_eredmenye: number
    agazati_alapvizsga_eredmenye_percent: number
    szakkepzesi_munkaszerzodessel: number
    Dualis_kepzohely_neve: number
    Dualis_kepzohely_adoszama: number
    kiemelten_tehetseges: number
    szamitogepet_tanulasi_oktatasi_celra_hasznal: number
    szaboky_adolf_szakkepzesi_osztondijban_reszesul: number
    egesz_napos_iskolai_oktatasban_reszesul: number
    nyelvi_elokeszito: number
    ket_tanitasi_nyelvu: number
    NemzetisegiNevelesOktatas: number
    NemzetisegiNevelesOktatásFajtaja: number
    nemzetisegiNyelv: number
    nemzetisegNyelvenFolyoSzakmaiOktatas: number
    sportosztaly: number
    aranyjanostehetseggondozoprogram: number
    arany_janos_kollegiumi_program: number
    munkarend: number
    alapadatok_id: number
    createAt: number
    createBy: number
    updatedAt: number
    updatedBy: number
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: number
    tanev_kezdete: number
    _all: number
  }


  export type Tanugyi_AdatokAvgAggregateInputType = {
    tanev_kezdete?: true
  }

  export type Tanugyi_AdatokSumAggregateInputType = {
    tanev_kezdete?: true
  }

  export type Tanugyi_AdatokMinAggregateInputType = {
    id?: true
    elotag?: true
    vezeteknev?: true
    utonev?: true
    oktatasiAzonositoja?: true
    osztaly?: true
    szuletesiDatuma?: true
    anyjaSzuletesiDatuma?: true
    tanterv?: true
    naploSorszam?: true
    beiras_naplo_sorszam?: true
    felvetel_taneve?: true
    torzslapszam?: true
    tanulo_jogviszonya?: true
    jogviszony_kezdete?: true
    jogviszony_megszunesenek_varhato_datuma?: true
    jogviszonyátSzunetelteto?: true
    tankotelezettsegetTeljesito?: true
    tankotelezettségVege?: true
    bejaro?: true
    Szakmai_gyakorlaton_tartozkodik?: true
    Egyeni_munkarend?: true
    Egyeni_munkarend_oka?: true
    Egyeni_munkarend_kezdete?: true
    Egyeni_munkarend_vege?: true
    Vendegtanulo?: true
    tandijat_fizeto?: true
    teritesi_dijat_fizeto?: true
    tanuloszerzodeses?: true
    polgari_szerzodeses?: true
    iskolai_sportkorben_reszt_vevo_tanulo?: true
    evfolyamismetlo?: true
    elozo_intezmeny?: true
    osztaly1?: true
    evfolyam?: true
    bizonyitvany_sorszama?: true
    okleveles_technikus_képzes?: true
    uj_Szkt_agazat_tipusa?: true
    uj_szkt_szakma_tipusa?: true
    uj_szkt_szakmairany_tipusa?: true
    nkt_tanulmanyi_terulet?: true
    nkt_szakkepesites?: true
    nkt_szakirany?: true
    agazat_uj_szkt_reszszakmahoz?: true
    szakma_reszszakmahoz?: true
    reszszakma?: true
    agazat_tanulmanyi_terulet?: true
    szakmai_kepzes?: true
    agazati_alapoktatas_megnevezese?: true
    agazati_alapvizsga_eredmeny?: true
    agazati_alapvizsga_teljesitesenek_datuma?: true
    agazati_alapvizsga_eredmenye?: true
    agazati_alapvizsga_eredmenye_percent?: true
    szakkepzesi_munkaszerzodessel?: true
    Dualis_kepzohely_neve?: true
    Dualis_kepzohely_adoszama?: true
    kiemelten_tehetseges?: true
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: true
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: true
    egesz_napos_iskolai_oktatasban_reszesul?: true
    nyelvi_elokeszito?: true
    ket_tanitasi_nyelvu?: true
    NemzetisegiNevelesOktatas?: true
    NemzetisegiNevelesOktatásFajtaja?: true
    nemzetisegiNyelv?: true
    nemzetisegNyelvenFolyoSzakmaiOktatas?: true
    sportosztaly?: true
    aranyjanostehetseggondozoprogram?: true
    arany_janos_kollegiumi_program?: true
    munkarend?: true
    alapadatok_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: true
    tanev_kezdete?: true
  }

  export type Tanugyi_AdatokMaxAggregateInputType = {
    id?: true
    elotag?: true
    vezeteknev?: true
    utonev?: true
    oktatasiAzonositoja?: true
    osztaly?: true
    szuletesiDatuma?: true
    anyjaSzuletesiDatuma?: true
    tanterv?: true
    naploSorszam?: true
    beiras_naplo_sorszam?: true
    felvetel_taneve?: true
    torzslapszam?: true
    tanulo_jogviszonya?: true
    jogviszony_kezdete?: true
    jogviszony_megszunesenek_varhato_datuma?: true
    jogviszonyátSzunetelteto?: true
    tankotelezettsegetTeljesito?: true
    tankotelezettségVege?: true
    bejaro?: true
    Szakmai_gyakorlaton_tartozkodik?: true
    Egyeni_munkarend?: true
    Egyeni_munkarend_oka?: true
    Egyeni_munkarend_kezdete?: true
    Egyeni_munkarend_vege?: true
    Vendegtanulo?: true
    tandijat_fizeto?: true
    teritesi_dijat_fizeto?: true
    tanuloszerzodeses?: true
    polgari_szerzodeses?: true
    iskolai_sportkorben_reszt_vevo_tanulo?: true
    evfolyamismetlo?: true
    elozo_intezmeny?: true
    osztaly1?: true
    evfolyam?: true
    bizonyitvany_sorszama?: true
    okleveles_technikus_képzes?: true
    uj_Szkt_agazat_tipusa?: true
    uj_szkt_szakma_tipusa?: true
    uj_szkt_szakmairany_tipusa?: true
    nkt_tanulmanyi_terulet?: true
    nkt_szakkepesites?: true
    nkt_szakirany?: true
    agazat_uj_szkt_reszszakmahoz?: true
    szakma_reszszakmahoz?: true
    reszszakma?: true
    agazat_tanulmanyi_terulet?: true
    szakmai_kepzes?: true
    agazati_alapoktatas_megnevezese?: true
    agazati_alapvizsga_eredmeny?: true
    agazati_alapvizsga_teljesitesenek_datuma?: true
    agazati_alapvizsga_eredmenye?: true
    agazati_alapvizsga_eredmenye_percent?: true
    szakkepzesi_munkaszerzodessel?: true
    Dualis_kepzohely_neve?: true
    Dualis_kepzohely_adoszama?: true
    kiemelten_tehetseges?: true
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: true
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: true
    egesz_napos_iskolai_oktatasban_reszesul?: true
    nyelvi_elokeszito?: true
    ket_tanitasi_nyelvu?: true
    NemzetisegiNevelesOktatas?: true
    NemzetisegiNevelesOktatásFajtaja?: true
    nemzetisegiNyelv?: true
    nemzetisegNyelvenFolyoSzakmaiOktatas?: true
    sportosztaly?: true
    aranyjanostehetseggondozoprogram?: true
    arany_janos_kollegiumi_program?: true
    munkarend?: true
    alapadatok_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: true
    tanev_kezdete?: true
  }

  export type Tanugyi_AdatokCountAggregateInputType = {
    id?: true
    elotag?: true
    vezeteknev?: true
    utonev?: true
    oktatasiAzonositoja?: true
    osztaly?: true
    szuletesiDatuma?: true
    anyjaSzuletesiDatuma?: true
    tanterv?: true
    naploSorszam?: true
    beiras_naplo_sorszam?: true
    felvetel_taneve?: true
    torzslapszam?: true
    tanulo_jogviszonya?: true
    jogviszony_kezdete?: true
    jogviszony_megszunesenek_varhato_datuma?: true
    jogviszonyátSzunetelteto?: true
    tankotelezettsegetTeljesito?: true
    tankotelezettségVege?: true
    bejaro?: true
    Szakmai_gyakorlaton_tartozkodik?: true
    Egyeni_munkarend?: true
    Egyeni_munkarend_oka?: true
    Egyeni_munkarend_kezdete?: true
    Egyeni_munkarend_vege?: true
    Vendegtanulo?: true
    tandijat_fizeto?: true
    teritesi_dijat_fizeto?: true
    tanuloszerzodeses?: true
    polgari_szerzodeses?: true
    iskolai_sportkorben_reszt_vevo_tanulo?: true
    evfolyamismetlo?: true
    elozo_intezmeny?: true
    osztaly1?: true
    evfolyam?: true
    bizonyitvany_sorszama?: true
    okleveles_technikus_képzes?: true
    uj_Szkt_agazat_tipusa?: true
    uj_szkt_szakma_tipusa?: true
    uj_szkt_szakmairany_tipusa?: true
    nkt_tanulmanyi_terulet?: true
    nkt_szakkepesites?: true
    nkt_szakirany?: true
    agazat_uj_szkt_reszszakmahoz?: true
    szakma_reszszakmahoz?: true
    reszszakma?: true
    agazat_tanulmanyi_terulet?: true
    szakmai_kepzes?: true
    agazati_alapoktatas_megnevezese?: true
    agazati_alapvizsga_eredmeny?: true
    agazati_alapvizsga_teljesitesenek_datuma?: true
    agazati_alapvizsga_eredmenye?: true
    agazati_alapvizsga_eredmenye_percent?: true
    szakkepzesi_munkaszerzodessel?: true
    Dualis_kepzohely_neve?: true
    Dualis_kepzohely_adoszama?: true
    kiemelten_tehetseges?: true
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: true
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: true
    egesz_napos_iskolai_oktatasban_reszesul?: true
    nyelvi_elokeszito?: true
    ket_tanitasi_nyelvu?: true
    NemzetisegiNevelesOktatas?: true
    NemzetisegiNevelesOktatásFajtaja?: true
    nemzetisegiNyelv?: true
    nemzetisegNyelvenFolyoSzakmaiOktatas?: true
    sportosztaly?: true
    aranyjanostehetseggondozoprogram?: true
    arany_janos_kollegiumi_program?: true
    munkarend?: true
    alapadatok_id?: true
    createAt?: true
    createBy?: true
    updatedAt?: true
    updatedBy?: true
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: true
    tanev_kezdete?: true
    _all?: true
  }

  export type Tanugyi_AdatokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanugyi_Adatok to aggregate.
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanugyi_Adatoks to fetch.
     */
    orderBy?: Tanugyi_AdatokOrderByWithRelationInput | Tanugyi_AdatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Tanugyi_AdatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanugyi_Adatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanugyi_Adatoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tanugyi_Adatoks
    **/
    _count?: true | Tanugyi_AdatokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tanugyi_AdatokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tanugyi_AdatokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tanugyi_AdatokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tanugyi_AdatokMaxAggregateInputType
  }

  export type GetTanugyi_AdatokAggregateType<T extends Tanugyi_AdatokAggregateArgs> = {
        [P in keyof T & keyof AggregateTanugyi_Adatok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTanugyi_Adatok[P]>
      : GetScalarType<T[P], AggregateTanugyi_Adatok[P]>
  }




  export type Tanugyi_AdatokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Tanugyi_AdatokWhereInput
    orderBy?: Tanugyi_AdatokOrderByWithAggregationInput | Tanugyi_AdatokOrderByWithAggregationInput[]
    by: Tanugyi_AdatokScalarFieldEnum[] | Tanugyi_AdatokScalarFieldEnum
    having?: Tanugyi_AdatokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tanugyi_AdatokCountAggregateInputType | true
    _avg?: Tanugyi_AdatokAvgAggregateInputType
    _sum?: Tanugyi_AdatokSumAggregateInputType
    _min?: Tanugyi_AdatokMinAggregateInputType
    _max?: Tanugyi_AdatokMaxAggregateInputType
  }

  export type Tanugyi_AdatokGroupByOutputType = {
    id: string
    elotag: string | null
    vezeteknev: string | null
    utonev: string | null
    oktatasiAzonositoja: string | null
    osztaly: string | null
    szuletesiDatuma: string | null
    anyjaSzuletesiDatuma: string | null
    tanterv: string | null
    naploSorszam: string | null
    beiras_naplo_sorszam: string | null
    felvetel_taneve: string | null
    torzslapszam: string | null
    tanulo_jogviszonya: string | null
    jogviszony_kezdete: string | null
    jogviszony_megszunesenek_varhato_datuma: string | null
    jogviszonyátSzunetelteto: string | null
    tankotelezettsegetTeljesito: string | null
    tankotelezettségVege: string | null
    bejaro: string | null
    Szakmai_gyakorlaton_tartozkodik: string | null
    Egyeni_munkarend: string | null
    Egyeni_munkarend_oka: string | null
    Egyeni_munkarend_kezdete: string | null
    Egyeni_munkarend_vege: string | null
    Vendegtanulo: string | null
    tandijat_fizeto: string | null
    teritesi_dijat_fizeto: string | null
    tanuloszerzodeses: string | null
    polgari_szerzodeses: string | null
    iskolai_sportkorben_reszt_vevo_tanulo: string | null
    evfolyamismetlo: string | null
    elozo_intezmeny: string | null
    osztaly1: string | null
    evfolyam: string | null
    bizonyitvany_sorszama: string | null
    okleveles_technikus_képzes: string | null
    uj_Szkt_agazat_tipusa: string | null
    uj_szkt_szakma_tipusa: string | null
    uj_szkt_szakmairany_tipusa: string | null
    nkt_tanulmanyi_terulet: string | null
    nkt_szakkepesites: string | null
    nkt_szakirany: string | null
    agazat_uj_szkt_reszszakmahoz: string | null
    szakma_reszszakmahoz: string | null
    reszszakma: string | null
    agazat_tanulmanyi_terulet: string | null
    szakmai_kepzes: string | null
    agazati_alapoktatas_megnevezese: string | null
    agazati_alapvizsga_eredmeny: string | null
    agazati_alapvizsga_teljesitesenek_datuma: string | null
    agazati_alapvizsga_eredmenye: string | null
    agazati_alapvizsga_eredmenye_percent: string | null
    szakkepzesi_munkaszerzodessel: string | null
    Dualis_kepzohely_neve: string | null
    Dualis_kepzohely_adoszama: string | null
    kiemelten_tehetseges: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul: string | null
    egesz_napos_iskolai_oktatasban_reszesul: string | null
    nyelvi_elokeszito: string | null
    ket_tanitasi_nyelvu: string | null
    NemzetisegiNevelesOktatas: string | null
    NemzetisegiNevelesOktatásFajtaja: string | null
    nemzetisegiNyelv: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas: string | null
    sportosztaly: string | null
    aranyjanostehetseggondozoprogram: string | null
    arany_janos_kollegiumi_program: string | null
    munkarend: string | null
    alapadatok_id: string
    createAt: Date
    createBy: string
    updatedAt: Date | null
    updatedBy: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: string | null
    tanev_kezdete: number
    _count: Tanugyi_AdatokCountAggregateOutputType | null
    _avg: Tanugyi_AdatokAvgAggregateOutputType | null
    _sum: Tanugyi_AdatokSumAggregateOutputType | null
    _min: Tanugyi_AdatokMinAggregateOutputType | null
    _max: Tanugyi_AdatokMaxAggregateOutputType | null
  }

  type GetTanugyi_AdatokGroupByPayload<T extends Tanugyi_AdatokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tanugyi_AdatokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tanugyi_AdatokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tanugyi_AdatokGroupByOutputType[P]>
            : GetScalarType<T[P], Tanugyi_AdatokGroupByOutputType[P]>
        }
      >
    >


  export type Tanugyi_AdatokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    elotag?: boolean
    vezeteknev?: boolean
    utonev?: boolean
    oktatasiAzonositoja?: boolean
    osztaly?: boolean
    szuletesiDatuma?: boolean
    anyjaSzuletesiDatuma?: boolean
    tanterv?: boolean
    naploSorszam?: boolean
    beiras_naplo_sorszam?: boolean
    felvetel_taneve?: boolean
    torzslapszam?: boolean
    tanulo_jogviszonya?: boolean
    jogviszony_kezdete?: boolean
    jogviszony_megszunesenek_varhato_datuma?: boolean
    jogviszonyátSzunetelteto?: boolean
    tankotelezettsegetTeljesito?: boolean
    tankotelezettségVege?: boolean
    bejaro?: boolean
    Szakmai_gyakorlaton_tartozkodik?: boolean
    Egyeni_munkarend?: boolean
    Egyeni_munkarend_oka?: boolean
    Egyeni_munkarend_kezdete?: boolean
    Egyeni_munkarend_vege?: boolean
    Vendegtanulo?: boolean
    tandijat_fizeto?: boolean
    teritesi_dijat_fizeto?: boolean
    tanuloszerzodeses?: boolean
    polgari_szerzodeses?: boolean
    iskolai_sportkorben_reszt_vevo_tanulo?: boolean
    evfolyamismetlo?: boolean
    elozo_intezmeny?: boolean
    osztaly1?: boolean
    evfolyam?: boolean
    bizonyitvany_sorszama?: boolean
    okleveles_technikus_képzes?: boolean
    uj_Szkt_agazat_tipusa?: boolean
    uj_szkt_szakma_tipusa?: boolean
    uj_szkt_szakmairany_tipusa?: boolean
    nkt_tanulmanyi_terulet?: boolean
    nkt_szakkepesites?: boolean
    nkt_szakirany?: boolean
    agazat_uj_szkt_reszszakmahoz?: boolean
    szakma_reszszakmahoz?: boolean
    reszszakma?: boolean
    agazat_tanulmanyi_terulet?: boolean
    szakmai_kepzes?: boolean
    agazati_alapoktatas_megnevezese?: boolean
    agazati_alapvizsga_eredmeny?: boolean
    agazati_alapvizsga_teljesitesenek_datuma?: boolean
    agazati_alapvizsga_eredmenye?: boolean
    agazati_alapvizsga_eredmenye_percent?: boolean
    szakkepzesi_munkaszerzodessel?: boolean
    Dualis_kepzohely_neve?: boolean
    Dualis_kepzohely_adoszama?: boolean
    kiemelten_tehetseges?: boolean
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: boolean
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: boolean
    egesz_napos_iskolai_oktatasban_reszesul?: boolean
    nyelvi_elokeszito?: boolean
    ket_tanitasi_nyelvu?: boolean
    NemzetisegiNevelesOktatas?: boolean
    NemzetisegiNevelesOktatásFajtaja?: boolean
    nemzetisegiNyelv?: boolean
    nemzetisegNyelvenFolyoSzakmaiOktatas?: boolean
    sportosztaly?: boolean
    aranyjanostehetseggondozoprogram?: boolean
    arany_janos_kollegiumi_program?: boolean
    munkarend?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: boolean
    tanev_kezdete?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanugyi_Adatok"]>

  export type Tanugyi_AdatokSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    elotag?: boolean
    vezeteknev?: boolean
    utonev?: boolean
    oktatasiAzonositoja?: boolean
    osztaly?: boolean
    szuletesiDatuma?: boolean
    anyjaSzuletesiDatuma?: boolean
    tanterv?: boolean
    naploSorszam?: boolean
    beiras_naplo_sorszam?: boolean
    felvetel_taneve?: boolean
    torzslapszam?: boolean
    tanulo_jogviszonya?: boolean
    jogviszony_kezdete?: boolean
    jogviszony_megszunesenek_varhato_datuma?: boolean
    jogviszonyátSzunetelteto?: boolean
    tankotelezettsegetTeljesito?: boolean
    tankotelezettségVege?: boolean
    bejaro?: boolean
    Szakmai_gyakorlaton_tartozkodik?: boolean
    Egyeni_munkarend?: boolean
    Egyeni_munkarend_oka?: boolean
    Egyeni_munkarend_kezdete?: boolean
    Egyeni_munkarend_vege?: boolean
    Vendegtanulo?: boolean
    tandijat_fizeto?: boolean
    teritesi_dijat_fizeto?: boolean
    tanuloszerzodeses?: boolean
    polgari_szerzodeses?: boolean
    iskolai_sportkorben_reszt_vevo_tanulo?: boolean
    evfolyamismetlo?: boolean
    elozo_intezmeny?: boolean
    osztaly1?: boolean
    evfolyam?: boolean
    bizonyitvany_sorszama?: boolean
    okleveles_technikus_képzes?: boolean
    uj_Szkt_agazat_tipusa?: boolean
    uj_szkt_szakma_tipusa?: boolean
    uj_szkt_szakmairany_tipusa?: boolean
    nkt_tanulmanyi_terulet?: boolean
    nkt_szakkepesites?: boolean
    nkt_szakirany?: boolean
    agazat_uj_szkt_reszszakmahoz?: boolean
    szakma_reszszakmahoz?: boolean
    reszszakma?: boolean
    agazat_tanulmanyi_terulet?: boolean
    szakmai_kepzes?: boolean
    agazati_alapoktatas_megnevezese?: boolean
    agazati_alapvizsga_eredmeny?: boolean
    agazati_alapvizsga_teljesitesenek_datuma?: boolean
    agazati_alapvizsga_eredmenye?: boolean
    agazati_alapvizsga_eredmenye_percent?: boolean
    szakkepzesi_munkaszerzodessel?: boolean
    Dualis_kepzohely_neve?: boolean
    Dualis_kepzohely_adoszama?: boolean
    kiemelten_tehetseges?: boolean
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: boolean
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: boolean
    egesz_napos_iskolai_oktatasban_reszesul?: boolean
    nyelvi_elokeszito?: boolean
    ket_tanitasi_nyelvu?: boolean
    NemzetisegiNevelesOktatas?: boolean
    NemzetisegiNevelesOktatásFajtaja?: boolean
    nemzetisegiNyelv?: boolean
    nemzetisegNyelvenFolyoSzakmaiOktatas?: boolean
    sportosztaly?: boolean
    aranyjanostehetseggondozoprogram?: boolean
    arany_janos_kollegiumi_program?: boolean
    munkarend?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: boolean
    tanev_kezdete?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanugyi_Adatok"]>

  export type Tanugyi_AdatokSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    elotag?: boolean
    vezeteknev?: boolean
    utonev?: boolean
    oktatasiAzonositoja?: boolean
    osztaly?: boolean
    szuletesiDatuma?: boolean
    anyjaSzuletesiDatuma?: boolean
    tanterv?: boolean
    naploSorszam?: boolean
    beiras_naplo_sorszam?: boolean
    felvetel_taneve?: boolean
    torzslapszam?: boolean
    tanulo_jogviszonya?: boolean
    jogviszony_kezdete?: boolean
    jogviszony_megszunesenek_varhato_datuma?: boolean
    jogviszonyátSzunetelteto?: boolean
    tankotelezettsegetTeljesito?: boolean
    tankotelezettségVege?: boolean
    bejaro?: boolean
    Szakmai_gyakorlaton_tartozkodik?: boolean
    Egyeni_munkarend?: boolean
    Egyeni_munkarend_oka?: boolean
    Egyeni_munkarend_kezdete?: boolean
    Egyeni_munkarend_vege?: boolean
    Vendegtanulo?: boolean
    tandijat_fizeto?: boolean
    teritesi_dijat_fizeto?: boolean
    tanuloszerzodeses?: boolean
    polgari_szerzodeses?: boolean
    iskolai_sportkorben_reszt_vevo_tanulo?: boolean
    evfolyamismetlo?: boolean
    elozo_intezmeny?: boolean
    osztaly1?: boolean
    evfolyam?: boolean
    bizonyitvany_sorszama?: boolean
    okleveles_technikus_képzes?: boolean
    uj_Szkt_agazat_tipusa?: boolean
    uj_szkt_szakma_tipusa?: boolean
    uj_szkt_szakmairany_tipusa?: boolean
    nkt_tanulmanyi_terulet?: boolean
    nkt_szakkepesites?: boolean
    nkt_szakirany?: boolean
    agazat_uj_szkt_reszszakmahoz?: boolean
    szakma_reszszakmahoz?: boolean
    reszszakma?: boolean
    agazat_tanulmanyi_terulet?: boolean
    szakmai_kepzes?: boolean
    agazati_alapoktatas_megnevezese?: boolean
    agazati_alapvizsga_eredmeny?: boolean
    agazati_alapvizsga_teljesitesenek_datuma?: boolean
    agazati_alapvizsga_eredmenye?: boolean
    agazati_alapvizsga_eredmenye_percent?: boolean
    szakkepzesi_munkaszerzodessel?: boolean
    Dualis_kepzohely_neve?: boolean
    Dualis_kepzohely_adoszama?: boolean
    kiemelten_tehetseges?: boolean
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: boolean
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: boolean
    egesz_napos_iskolai_oktatasban_reszesul?: boolean
    nyelvi_elokeszito?: boolean
    ket_tanitasi_nyelvu?: boolean
    NemzetisegiNevelesOktatas?: boolean
    NemzetisegiNevelesOktatásFajtaja?: boolean
    nemzetisegiNyelv?: boolean
    nemzetisegNyelvenFolyoSzakmaiOktatas?: boolean
    sportosztaly?: boolean
    aranyjanostehetseggondozoprogram?: boolean
    arany_janos_kollegiumi_program?: boolean
    munkarend?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: boolean
    tanev_kezdete?: boolean
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanugyi_Adatok"]>

  export type Tanugyi_AdatokSelectScalar = {
    id?: boolean
    elotag?: boolean
    vezeteknev?: boolean
    utonev?: boolean
    oktatasiAzonositoja?: boolean
    osztaly?: boolean
    szuletesiDatuma?: boolean
    anyjaSzuletesiDatuma?: boolean
    tanterv?: boolean
    naploSorszam?: boolean
    beiras_naplo_sorszam?: boolean
    felvetel_taneve?: boolean
    torzslapszam?: boolean
    tanulo_jogviszonya?: boolean
    jogviszony_kezdete?: boolean
    jogviszony_megszunesenek_varhato_datuma?: boolean
    jogviszonyátSzunetelteto?: boolean
    tankotelezettsegetTeljesito?: boolean
    tankotelezettségVege?: boolean
    bejaro?: boolean
    Szakmai_gyakorlaton_tartozkodik?: boolean
    Egyeni_munkarend?: boolean
    Egyeni_munkarend_oka?: boolean
    Egyeni_munkarend_kezdete?: boolean
    Egyeni_munkarend_vege?: boolean
    Vendegtanulo?: boolean
    tandijat_fizeto?: boolean
    teritesi_dijat_fizeto?: boolean
    tanuloszerzodeses?: boolean
    polgari_szerzodeses?: boolean
    iskolai_sportkorben_reszt_vevo_tanulo?: boolean
    evfolyamismetlo?: boolean
    elozo_intezmeny?: boolean
    osztaly1?: boolean
    evfolyam?: boolean
    bizonyitvany_sorszama?: boolean
    okleveles_technikus_képzes?: boolean
    uj_Szkt_agazat_tipusa?: boolean
    uj_szkt_szakma_tipusa?: boolean
    uj_szkt_szakmairany_tipusa?: boolean
    nkt_tanulmanyi_terulet?: boolean
    nkt_szakkepesites?: boolean
    nkt_szakirany?: boolean
    agazat_uj_szkt_reszszakmahoz?: boolean
    szakma_reszszakmahoz?: boolean
    reszszakma?: boolean
    agazat_tanulmanyi_terulet?: boolean
    szakmai_kepzes?: boolean
    agazati_alapoktatas_megnevezese?: boolean
    agazati_alapvizsga_eredmeny?: boolean
    agazati_alapvizsga_teljesitesenek_datuma?: boolean
    agazati_alapvizsga_eredmenye?: boolean
    agazati_alapvizsga_eredmenye_percent?: boolean
    szakkepzesi_munkaszerzodessel?: boolean
    Dualis_kepzohely_neve?: boolean
    Dualis_kepzohely_adoszama?: boolean
    kiemelten_tehetseges?: boolean
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: boolean
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: boolean
    egesz_napos_iskolai_oktatasban_reszesul?: boolean
    nyelvi_elokeszito?: boolean
    ket_tanitasi_nyelvu?: boolean
    NemzetisegiNevelesOktatas?: boolean
    NemzetisegiNevelesOktatásFajtaja?: boolean
    nemzetisegiNyelv?: boolean
    nemzetisegNyelvenFolyoSzakmaiOktatas?: boolean
    sportosztaly?: boolean
    aranyjanostehetseggondozoprogram?: boolean
    arany_janos_kollegiumi_program?: boolean
    munkarend?: boolean
    alapadatok_id?: boolean
    createAt?: boolean
    createBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: boolean
    tanev_kezdete?: boolean
  }

  export type Tanugyi_AdatokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "elotag" | "vezeteknev" | "utonev" | "oktatasiAzonositoja" | "osztaly" | "szuletesiDatuma" | "anyjaSzuletesiDatuma" | "tanterv" | "naploSorszam" | "beiras_naplo_sorszam" | "felvetel_taneve" | "torzslapszam" | "tanulo_jogviszonya" | "jogviszony_kezdete" | "jogviszony_megszunesenek_varhato_datuma" | "jogviszonyátSzunetelteto" | "tankotelezettsegetTeljesito" | "tankotelezettségVege" | "bejaro" | "Szakmai_gyakorlaton_tartozkodik" | "Egyeni_munkarend" | "Egyeni_munkarend_oka" | "Egyeni_munkarend_kezdete" | "Egyeni_munkarend_vege" | "Vendegtanulo" | "tandijat_fizeto" | "teritesi_dijat_fizeto" | "tanuloszerzodeses" | "polgari_szerzodeses" | "iskolai_sportkorben_reszt_vevo_tanulo" | "evfolyamismetlo" | "elozo_intezmeny" | "osztaly1" | "evfolyam" | "bizonyitvany_sorszama" | "okleveles_technikus_képzes" | "uj_Szkt_agazat_tipusa" | "uj_szkt_szakma_tipusa" | "uj_szkt_szakmairany_tipusa" | "nkt_tanulmanyi_terulet" | "nkt_szakkepesites" | "nkt_szakirany" | "agazat_uj_szkt_reszszakmahoz" | "szakma_reszszakmahoz" | "reszszakma" | "agazat_tanulmanyi_terulet" | "szakmai_kepzes" | "agazati_alapoktatas_megnevezese" | "agazati_alapvizsga_eredmeny" | "agazati_alapvizsga_teljesitesenek_datuma" | "agazati_alapvizsga_eredmenye" | "agazati_alapvizsga_eredmenye_percent" | "szakkepzesi_munkaszerzodessel" | "Dualis_kepzohely_neve" | "Dualis_kepzohely_adoszama" | "kiemelten_tehetseges" | "szamitogepet_tanulasi_oktatasi_celra_hasznal" | "szaboky_adolf_szakkepzesi_osztondijban_reszesul" | "egesz_napos_iskolai_oktatasban_reszesul" | "nyelvi_elokeszito" | "ket_tanitasi_nyelvu" | "NemzetisegiNevelesOktatas" | "NemzetisegiNevelesOktatásFajtaja" | "nemzetisegiNyelv" | "nemzetisegNyelvenFolyoSzakmaiOktatas" | "sportosztaly" | "aranyjanostehetseggondozoprogram" | "arany_janos_kollegiumi_program" | "munkarend" | "alapadatok_id" | "createAt" | "createBy" | "updatedAt" | "updatedBy" | "a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte" | "tanev_kezdete", ExtArgs["result"]["tanugyi_Adatok"]>
  export type Tanugyi_AdatokInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }
  export type Tanugyi_AdatokIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }
  export type Tanugyi_AdatokIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alapadatok?: boolean | AlapadatokDefaultArgs<ExtArgs>
  }

  export type $Tanugyi_AdatokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tanugyi_Adatok"
    objects: {
      alapadatok: Prisma.$AlapadatokPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      elotag: string | null
      vezeteknev: string | null
      utonev: string | null
      oktatasiAzonositoja: string | null
      osztaly: string | null
      szuletesiDatuma: string | null
      anyjaSzuletesiDatuma: string | null
      tanterv: string | null
      naploSorszam: string | null
      beiras_naplo_sorszam: string | null
      felvetel_taneve: string | null
      torzslapszam: string | null
      tanulo_jogviszonya: string | null
      jogviszony_kezdete: string | null
      jogviszony_megszunesenek_varhato_datuma: string | null
      jogviszonyátSzunetelteto: string | null
      tankotelezettsegetTeljesito: string | null
      tankotelezettségVege: string | null
      bejaro: string | null
      Szakmai_gyakorlaton_tartozkodik: string | null
      Egyeni_munkarend: string | null
      Egyeni_munkarend_oka: string | null
      Egyeni_munkarend_kezdete: string | null
      Egyeni_munkarend_vege: string | null
      Vendegtanulo: string | null
      tandijat_fizeto: string | null
      teritesi_dijat_fizeto: string | null
      tanuloszerzodeses: string | null
      polgari_szerzodeses: string | null
      iskolai_sportkorben_reszt_vevo_tanulo: string | null
      evfolyamismetlo: string | null
      elozo_intezmeny: string | null
      osztaly1: string | null
      evfolyam: string | null
      bizonyitvany_sorszama: string | null
      okleveles_technikus_képzes: string | null
      uj_Szkt_agazat_tipusa: string | null
      uj_szkt_szakma_tipusa: string | null
      uj_szkt_szakmairany_tipusa: string | null
      nkt_tanulmanyi_terulet: string | null
      nkt_szakkepesites: string | null
      nkt_szakirany: string | null
      agazat_uj_szkt_reszszakmahoz: string | null
      szakma_reszszakmahoz: string | null
      reszszakma: string | null
      agazat_tanulmanyi_terulet: string | null
      szakmai_kepzes: string | null
      agazati_alapoktatas_megnevezese: string | null
      agazati_alapvizsga_eredmeny: string | null
      agazati_alapvizsga_teljesitesenek_datuma: string | null
      agazati_alapvizsga_eredmenye: string | null
      agazati_alapvizsga_eredmenye_percent: string | null
      szakkepzesi_munkaszerzodessel: string | null
      Dualis_kepzohely_neve: string | null
      Dualis_kepzohely_adoszama: string | null
      kiemelten_tehetseges: string | null
      szamitogepet_tanulasi_oktatasi_celra_hasznal: string | null
      szaboky_adolf_szakkepzesi_osztondijban_reszesul: string | null
      egesz_napos_iskolai_oktatasban_reszesul: string | null
      nyelvi_elokeszito: string | null
      ket_tanitasi_nyelvu: string | null
      NemzetisegiNevelesOktatas: string | null
      NemzetisegiNevelesOktatásFajtaja: string | null
      nemzetisegiNyelv: string | null
      nemzetisegNyelvenFolyoSzakmaiOktatas: string | null
      sportosztaly: string | null
      aranyjanostehetseggondozoprogram: string | null
      arany_janos_kollegiumi_program: string | null
      munkarend: string | null
      alapadatok_id: string
      createAt: Date
      createBy: string
      updatedAt: Date | null
      updatedBy: string | null
      a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: string | null
      tanev_kezdete: number
    }, ExtArgs["result"]["tanugyi_Adatok"]>
    composites: {}
  }

  type Tanugyi_AdatokGetPayload<S extends boolean | null | undefined | Tanugyi_AdatokDefaultArgs> = $Result.GetResult<Prisma.$Tanugyi_AdatokPayload, S>

  type Tanugyi_AdatokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Tanugyi_AdatokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tanugyi_AdatokCountAggregateInputType | true
    }

  export interface Tanugyi_AdatokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tanugyi_Adatok'], meta: { name: 'Tanugyi_Adatok' } }
    /**
     * Find zero or one Tanugyi_Adatok that matches the filter.
     * @param {Tanugyi_AdatokFindUniqueArgs} args - Arguments to find a Tanugyi_Adatok
     * @example
     * // Get one Tanugyi_Adatok
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Tanugyi_AdatokFindUniqueArgs>(args: SelectSubset<T, Tanugyi_AdatokFindUniqueArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tanugyi_Adatok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Tanugyi_AdatokFindUniqueOrThrowArgs} args - Arguments to find a Tanugyi_Adatok
     * @example
     * // Get one Tanugyi_Adatok
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Tanugyi_AdatokFindUniqueOrThrowArgs>(args: SelectSubset<T, Tanugyi_AdatokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanugyi_Adatok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokFindFirstArgs} args - Arguments to find a Tanugyi_Adatok
     * @example
     * // Get one Tanugyi_Adatok
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Tanugyi_AdatokFindFirstArgs>(args?: SelectSubset<T, Tanugyi_AdatokFindFirstArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanugyi_Adatok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokFindFirstOrThrowArgs} args - Arguments to find a Tanugyi_Adatok
     * @example
     * // Get one Tanugyi_Adatok
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Tanugyi_AdatokFindFirstOrThrowArgs>(args?: SelectSubset<T, Tanugyi_AdatokFindFirstOrThrowArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tanugyi_Adatoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tanugyi_Adatoks
     * const tanugyi_Adatoks = await prisma.tanugyi_Adatok.findMany()
     * 
     * // Get first 10 Tanugyi_Adatoks
     * const tanugyi_Adatoks = await prisma.tanugyi_Adatok.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tanugyi_AdatokWithIdOnly = await prisma.tanugyi_Adatok.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Tanugyi_AdatokFindManyArgs>(args?: SelectSubset<T, Tanugyi_AdatokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tanugyi_Adatok.
     * @param {Tanugyi_AdatokCreateArgs} args - Arguments to create a Tanugyi_Adatok.
     * @example
     * // Create one Tanugyi_Adatok
     * const Tanugyi_Adatok = await prisma.tanugyi_Adatok.create({
     *   data: {
     *     // ... data to create a Tanugyi_Adatok
     *   }
     * })
     * 
     */
    create<T extends Tanugyi_AdatokCreateArgs>(args: SelectSubset<T, Tanugyi_AdatokCreateArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tanugyi_Adatoks.
     * @param {Tanugyi_AdatokCreateManyArgs} args - Arguments to create many Tanugyi_Adatoks.
     * @example
     * // Create many Tanugyi_Adatoks
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Tanugyi_AdatokCreateManyArgs>(args?: SelectSubset<T, Tanugyi_AdatokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tanugyi_Adatoks and returns the data saved in the database.
     * @param {Tanugyi_AdatokCreateManyAndReturnArgs} args - Arguments to create many Tanugyi_Adatoks.
     * @example
     * // Create many Tanugyi_Adatoks
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tanugyi_Adatoks and only return the `id`
     * const tanugyi_AdatokWithIdOnly = await prisma.tanugyi_Adatok.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Tanugyi_AdatokCreateManyAndReturnArgs>(args?: SelectSubset<T, Tanugyi_AdatokCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tanugyi_Adatok.
     * @param {Tanugyi_AdatokDeleteArgs} args - Arguments to delete one Tanugyi_Adatok.
     * @example
     * // Delete one Tanugyi_Adatok
     * const Tanugyi_Adatok = await prisma.tanugyi_Adatok.delete({
     *   where: {
     *     // ... filter to delete one Tanugyi_Adatok
     *   }
     * })
     * 
     */
    delete<T extends Tanugyi_AdatokDeleteArgs>(args: SelectSubset<T, Tanugyi_AdatokDeleteArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tanugyi_Adatok.
     * @param {Tanugyi_AdatokUpdateArgs} args - Arguments to update one Tanugyi_Adatok.
     * @example
     * // Update one Tanugyi_Adatok
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Tanugyi_AdatokUpdateArgs>(args: SelectSubset<T, Tanugyi_AdatokUpdateArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tanugyi_Adatoks.
     * @param {Tanugyi_AdatokDeleteManyArgs} args - Arguments to filter Tanugyi_Adatoks to delete.
     * @example
     * // Delete a few Tanugyi_Adatoks
     * const { count } = await prisma.tanugyi_Adatok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Tanugyi_AdatokDeleteManyArgs>(args?: SelectSubset<T, Tanugyi_AdatokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanugyi_Adatoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tanugyi_Adatoks
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Tanugyi_AdatokUpdateManyArgs>(args: SelectSubset<T, Tanugyi_AdatokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanugyi_Adatoks and returns the data updated in the database.
     * @param {Tanugyi_AdatokUpdateManyAndReturnArgs} args - Arguments to update many Tanugyi_Adatoks.
     * @example
     * // Update many Tanugyi_Adatoks
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tanugyi_Adatoks and only return the `id`
     * const tanugyi_AdatokWithIdOnly = await prisma.tanugyi_Adatok.updateManyAndReturn({
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
    updateManyAndReturn<T extends Tanugyi_AdatokUpdateManyAndReturnArgs>(args: SelectSubset<T, Tanugyi_AdatokUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tanugyi_Adatok.
     * @param {Tanugyi_AdatokUpsertArgs} args - Arguments to update or create a Tanugyi_Adatok.
     * @example
     * // Update or create a Tanugyi_Adatok
     * const tanugyi_Adatok = await prisma.tanugyi_Adatok.upsert({
     *   create: {
     *     // ... data to create a Tanugyi_Adatok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tanugyi_Adatok we want to update
     *   }
     * })
     */
    upsert<T extends Tanugyi_AdatokUpsertArgs>(args: SelectSubset<T, Tanugyi_AdatokUpsertArgs<ExtArgs>>): Prisma__Tanugyi_AdatokClient<$Result.GetResult<Prisma.$Tanugyi_AdatokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tanugyi_Adatoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokCountArgs} args - Arguments to filter Tanugyi_Adatoks to count.
     * @example
     * // Count the number of Tanugyi_Adatoks
     * const count = await prisma.tanugyi_Adatok.count({
     *   where: {
     *     // ... the filter for the Tanugyi_Adatoks we want to count
     *   }
     * })
    **/
    count<T extends Tanugyi_AdatokCountArgs>(
      args?: Subset<T, Tanugyi_AdatokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tanugyi_AdatokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tanugyi_Adatok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tanugyi_AdatokAggregateArgs>(args: Subset<T, Tanugyi_AdatokAggregateArgs>): Prisma.PrismaPromise<GetTanugyi_AdatokAggregateType<T>>

    /**
     * Group by Tanugyi_Adatok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tanugyi_AdatokGroupByArgs} args - Group by arguments.
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
      T extends Tanugyi_AdatokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Tanugyi_AdatokGroupByArgs['orderBy'] }
        : { orderBy?: Tanugyi_AdatokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Tanugyi_AdatokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTanugyi_AdatokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tanugyi_Adatok model
   */
  readonly fields: Tanugyi_AdatokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tanugyi_Adatok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Tanugyi_AdatokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Tanugyi_Adatok model
   */
  interface Tanugyi_AdatokFieldRefs {
    readonly id: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly elotag: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly vezeteknev: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly utonev: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly oktatasiAzonositoja: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly osztaly: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly szuletesiDatuma: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly anyjaSzuletesiDatuma: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tanterv: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly naploSorszam: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly beiras_naplo_sorszam: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly felvetel_taneve: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly torzslapszam: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tanulo_jogviszonya: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly jogviszony_kezdete: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly jogviszony_megszunesenek_varhato_datuma: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly jogviszonyátSzunetelteto: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tankotelezettsegetTeljesito: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tankotelezettségVege: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly bejaro: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Szakmai_gyakorlaton_tartozkodik: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Egyeni_munkarend: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Egyeni_munkarend_oka: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Egyeni_munkarend_kezdete: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Egyeni_munkarend_vege: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Vendegtanulo: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tandijat_fizeto: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly teritesi_dijat_fizeto: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tanuloszerzodeses: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly polgari_szerzodeses: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly iskolai_sportkorben_reszt_vevo_tanulo: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly evfolyamismetlo: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly elozo_intezmeny: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly osztaly1: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly evfolyam: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly bizonyitvany_sorszama: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly okleveles_technikus_képzes: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly uj_Szkt_agazat_tipusa: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly uj_szkt_szakma_tipusa: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly uj_szkt_szakmairany_tipusa: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly nkt_tanulmanyi_terulet: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly nkt_szakkepesites: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly nkt_szakirany: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazat_uj_szkt_reszszakmahoz: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly szakma_reszszakmahoz: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly reszszakma: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazat_tanulmanyi_terulet: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly szakmai_kepzes: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazati_alapoktatas_megnevezese: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazati_alapvizsga_eredmeny: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazati_alapvizsga_teljesitesenek_datuma: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazati_alapvizsga_eredmenye: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly agazati_alapvizsga_eredmenye_percent: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly szakkepzesi_munkaszerzodessel: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Dualis_kepzohely_neve: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly Dualis_kepzohely_adoszama: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly kiemelten_tehetseges: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly szamitogepet_tanulasi_oktatasi_celra_hasznal: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly szaboky_adolf_szakkepzesi_osztondijban_reszesul: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly egesz_napos_iskolai_oktatasban_reszesul: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly nyelvi_elokeszito: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly ket_tanitasi_nyelvu: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly NemzetisegiNevelesOktatas: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly NemzetisegiNevelesOktatásFajtaja: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly nemzetisegiNyelv: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly nemzetisegNyelvenFolyoSzakmaiOktatas: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly sportosztaly: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly aranyjanostehetseggondozoprogram: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly arany_janos_kollegiumi_program: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly munkarend: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly alapadatok_id: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly createAt: FieldRef<"Tanugyi_Adatok", 'DateTime'>
    readonly createBy: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly updatedAt: FieldRef<"Tanugyi_Adatok", 'DateTime'>
    readonly updatedBy: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: FieldRef<"Tanugyi_Adatok", 'String'>
    readonly tanev_kezdete: FieldRef<"Tanugyi_Adatok", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tanugyi_Adatok findUnique
   */
  export type Tanugyi_AdatokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * Filter, which Tanugyi_Adatok to fetch.
     */
    where: Tanugyi_AdatokWhereUniqueInput
  }

  /**
   * Tanugyi_Adatok findUniqueOrThrow
   */
  export type Tanugyi_AdatokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * Filter, which Tanugyi_Adatok to fetch.
     */
    where: Tanugyi_AdatokWhereUniqueInput
  }

  /**
   * Tanugyi_Adatok findFirst
   */
  export type Tanugyi_AdatokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * Filter, which Tanugyi_Adatok to fetch.
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanugyi_Adatoks to fetch.
     */
    orderBy?: Tanugyi_AdatokOrderByWithRelationInput | Tanugyi_AdatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanugyi_Adatoks.
     */
    cursor?: Tanugyi_AdatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanugyi_Adatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanugyi_Adatoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanugyi_Adatoks.
     */
    distinct?: Tanugyi_AdatokScalarFieldEnum | Tanugyi_AdatokScalarFieldEnum[]
  }

  /**
   * Tanugyi_Adatok findFirstOrThrow
   */
  export type Tanugyi_AdatokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * Filter, which Tanugyi_Adatok to fetch.
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanugyi_Adatoks to fetch.
     */
    orderBy?: Tanugyi_AdatokOrderByWithRelationInput | Tanugyi_AdatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanugyi_Adatoks.
     */
    cursor?: Tanugyi_AdatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanugyi_Adatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanugyi_Adatoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanugyi_Adatoks.
     */
    distinct?: Tanugyi_AdatokScalarFieldEnum | Tanugyi_AdatokScalarFieldEnum[]
  }

  /**
   * Tanugyi_Adatok findMany
   */
  export type Tanugyi_AdatokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * Filter, which Tanugyi_Adatoks to fetch.
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanugyi_Adatoks to fetch.
     */
    orderBy?: Tanugyi_AdatokOrderByWithRelationInput | Tanugyi_AdatokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tanugyi_Adatoks.
     */
    cursor?: Tanugyi_AdatokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanugyi_Adatoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanugyi_Adatoks.
     */
    skip?: number
    distinct?: Tanugyi_AdatokScalarFieldEnum | Tanugyi_AdatokScalarFieldEnum[]
  }

  /**
   * Tanugyi_Adatok create
   */
  export type Tanugyi_AdatokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * The data needed to create a Tanugyi_Adatok.
     */
    data: XOR<Tanugyi_AdatokCreateInput, Tanugyi_AdatokUncheckedCreateInput>
  }

  /**
   * Tanugyi_Adatok createMany
   */
  export type Tanugyi_AdatokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tanugyi_Adatoks.
     */
    data: Tanugyi_AdatokCreateManyInput | Tanugyi_AdatokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tanugyi_Adatok createManyAndReturn
   */
  export type Tanugyi_AdatokCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * The data used to create many Tanugyi_Adatoks.
     */
    data: Tanugyi_AdatokCreateManyInput | Tanugyi_AdatokCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanugyi_Adatok update
   */
  export type Tanugyi_AdatokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * The data needed to update a Tanugyi_Adatok.
     */
    data: XOR<Tanugyi_AdatokUpdateInput, Tanugyi_AdatokUncheckedUpdateInput>
    /**
     * Choose, which Tanugyi_Adatok to update.
     */
    where: Tanugyi_AdatokWhereUniqueInput
  }

  /**
   * Tanugyi_Adatok updateMany
   */
  export type Tanugyi_AdatokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tanugyi_Adatoks.
     */
    data: XOR<Tanugyi_AdatokUpdateManyMutationInput, Tanugyi_AdatokUncheckedUpdateManyInput>
    /**
     * Filter which Tanugyi_Adatoks to update
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * Limit how many Tanugyi_Adatoks to update.
     */
    limit?: number
  }

  /**
   * Tanugyi_Adatok updateManyAndReturn
   */
  export type Tanugyi_AdatokUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * The data used to update Tanugyi_Adatoks.
     */
    data: XOR<Tanugyi_AdatokUpdateManyMutationInput, Tanugyi_AdatokUncheckedUpdateManyInput>
    /**
     * Filter which Tanugyi_Adatoks to update
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * Limit how many Tanugyi_Adatoks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanugyi_Adatok upsert
   */
  export type Tanugyi_AdatokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * The filter to search for the Tanugyi_Adatok to update in case it exists.
     */
    where: Tanugyi_AdatokWhereUniqueInput
    /**
     * In case the Tanugyi_Adatok found by the `where` argument doesn't exist, create a new Tanugyi_Adatok with this data.
     */
    create: XOR<Tanugyi_AdatokCreateInput, Tanugyi_AdatokUncheckedCreateInput>
    /**
     * In case the Tanugyi_Adatok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Tanugyi_AdatokUpdateInput, Tanugyi_AdatokUncheckedUpdateInput>
  }

  /**
   * Tanugyi_Adatok delete
   */
  export type Tanugyi_AdatokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
    /**
     * Filter which Tanugyi_Adatok to delete.
     */
    where: Tanugyi_AdatokWhereUniqueInput
  }

  /**
   * Tanugyi_Adatok deleteMany
   */
  export type Tanugyi_AdatokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanugyi_Adatoks to delete
     */
    where?: Tanugyi_AdatokWhereInput
    /**
     * Limit how many Tanugyi_Adatoks to delete.
     */
    limit?: number
  }

  /**
   * Tanugyi_Adatok without action
   */
  export type Tanugyi_AdatokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanugyi_Adatok
     */
    select?: Tanugyi_AdatokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanugyi_Adatok
     */
    omit?: Tanugyi_AdatokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Tanugyi_AdatokInclude<ExtArgs> | null
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


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    alapadatokId: 'alapadatokId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TableAccessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tableName: 'tableName',
    access: 'access',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TableAccessScalarFieldEnum = (typeof TableAccessScalarFieldEnum)[keyof typeof TableAccessScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    method: 'method',
    path: 'path',
    body: 'body',
    query: 'query',
    headers: 'headers',
    ip: 'ip',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


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
    szakma_id: 'szakma_id',
    createAt: 'createAt',
    createBy: 'createBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type Tanulo_LetszamScalarFieldEnum = (typeof Tanulo_LetszamScalarFieldEnum)[keyof typeof Tanulo_LetszamScalarFieldEnum]


  export const Tanar_LetszamScalarFieldEnum: {
    id: 'id',
    alapadatok_id: 'alapadatok_id',
    tanev_kezdete: 'tanev_kezdete',
    letszam: 'letszam',
    createAt: 'createAt',
    createBy: 'createBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type Tanar_LetszamScalarFieldEnum = (typeof Tanar_LetszamScalarFieldEnum)[keyof typeof Tanar_LetszamScalarFieldEnum]


  export const Felvettek_SzamaScalarFieldEnum: {
    id: 'id',
    alapadatok_id: 'alapadatok_id',
    tanev_kezdete: 'tanev_kezdete',
    szakma_id: 'szakma_id',
    szakiranyId: 'szakiranyId',
    jelentkezo_letszam: 'jelentkezo_letszam',
    felveheto_letszam: 'felveheto_letszam',
    felvett_letszam: 'felvett_letszam',
    createAt: 'createAt',
    createBy: 'createBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type Felvettek_SzamaScalarFieldEnum = (typeof Felvettek_SzamaScalarFieldEnum)[keyof typeof Felvettek_SzamaScalarFieldEnum]


  export const KompetenciaScalarFieldEnum: {
    id: 'id',
    tanev_kezdete: 'tanev_kezdete',
    mat_orsz_p: 'mat_orsz_p',
    szoveg_orsz_p: 'szoveg_orsz_p',
    mat_int_p: 'mat_int_p',
    szoveg_int_p: 'szoveg_int_p',
    kepzes_forma: 'kepzes_forma',
    alapadatok_id: 'alapadatok_id',
    createAt: 'createAt',
    createBy: 'createBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy'
  };

  export type KompetenciaScalarFieldEnum = (typeof KompetenciaScalarFieldEnum)[keyof typeof KompetenciaScalarFieldEnum]


  export const Tanugyi_AdatokScalarFieldEnum: {
    id: 'id',
    elotag: 'elotag',
    vezeteknev: 'vezeteknev',
    utonev: 'utonev',
    oktatasiAzonositoja: 'oktatasiAzonositoja',
    osztaly: 'osztaly',
    szuletesiDatuma: 'szuletesiDatuma',
    anyjaSzuletesiDatuma: 'anyjaSzuletesiDatuma',
    tanterv: 'tanterv',
    naploSorszam: 'naploSorszam',
    beiras_naplo_sorszam: 'beiras_naplo_sorszam',
    felvetel_taneve: 'felvetel_taneve',
    torzslapszam: 'torzslapszam',
    tanulo_jogviszonya: 'tanulo_jogviszonya',
    jogviszony_kezdete: 'jogviszony_kezdete',
    jogviszony_megszunesenek_varhato_datuma: 'jogviszony_megszunesenek_varhato_datuma',
    jogviszonyátSzunetelteto: 'jogviszonyátSzunetelteto',
    tankotelezettsegetTeljesito: 'tankotelezettsegetTeljesito',
    tankotelezettségVege: 'tankotelezettségVege',
    bejaro: 'bejaro',
    Szakmai_gyakorlaton_tartozkodik: 'Szakmai_gyakorlaton_tartozkodik',
    Egyeni_munkarend: 'Egyeni_munkarend',
    Egyeni_munkarend_oka: 'Egyeni_munkarend_oka',
    Egyeni_munkarend_kezdete: 'Egyeni_munkarend_kezdete',
    Egyeni_munkarend_vege: 'Egyeni_munkarend_vege',
    Vendegtanulo: 'Vendegtanulo',
    tandijat_fizeto: 'tandijat_fizeto',
    teritesi_dijat_fizeto: 'teritesi_dijat_fizeto',
    tanuloszerzodeses: 'tanuloszerzodeses',
    polgari_szerzodeses: 'polgari_szerzodeses',
    iskolai_sportkorben_reszt_vevo_tanulo: 'iskolai_sportkorben_reszt_vevo_tanulo',
    evfolyamismetlo: 'evfolyamismetlo',
    elozo_intezmeny: 'elozo_intezmeny',
    osztaly1: 'osztaly1',
    evfolyam: 'evfolyam',
    bizonyitvany_sorszama: 'bizonyitvany_sorszama',
    okleveles_technikus_képzes: 'okleveles_technikus_képzes',
    uj_Szkt_agazat_tipusa: 'uj_Szkt_agazat_tipusa',
    uj_szkt_szakma_tipusa: 'uj_szkt_szakma_tipusa',
    uj_szkt_szakmairany_tipusa: 'uj_szkt_szakmairany_tipusa',
    nkt_tanulmanyi_terulet: 'nkt_tanulmanyi_terulet',
    nkt_szakkepesites: 'nkt_szakkepesites',
    nkt_szakirany: 'nkt_szakirany',
    agazat_uj_szkt_reszszakmahoz: 'agazat_uj_szkt_reszszakmahoz',
    szakma_reszszakmahoz: 'szakma_reszszakmahoz',
    reszszakma: 'reszszakma',
    agazat_tanulmanyi_terulet: 'agazat_tanulmanyi_terulet',
    szakmai_kepzes: 'szakmai_kepzes',
    agazati_alapoktatas_megnevezese: 'agazati_alapoktatas_megnevezese',
    agazati_alapvizsga_eredmeny: 'agazati_alapvizsga_eredmeny',
    agazati_alapvizsga_teljesitesenek_datuma: 'agazati_alapvizsga_teljesitesenek_datuma',
    agazati_alapvizsga_eredmenye: 'agazati_alapvizsga_eredmenye',
    agazati_alapvizsga_eredmenye_percent: 'agazati_alapvizsga_eredmenye_percent',
    szakkepzesi_munkaszerzodessel: 'szakkepzesi_munkaszerzodessel',
    Dualis_kepzohely_neve: 'Dualis_kepzohely_neve',
    Dualis_kepzohely_adoszama: 'Dualis_kepzohely_adoszama',
    kiemelten_tehetseges: 'kiemelten_tehetseges',
    szamitogepet_tanulasi_oktatasi_celra_hasznal: 'szamitogepet_tanulasi_oktatasi_celra_hasznal',
    szaboky_adolf_szakkepzesi_osztondijban_reszesul: 'szaboky_adolf_szakkepzesi_osztondijban_reszesul',
    egesz_napos_iskolai_oktatasban_reszesul: 'egesz_napos_iskolai_oktatasban_reszesul',
    nyelvi_elokeszito: 'nyelvi_elokeszito',
    ket_tanitasi_nyelvu: 'ket_tanitasi_nyelvu',
    NemzetisegiNevelesOktatas: 'NemzetisegiNevelesOktatas',
    NemzetisegiNevelesOktatásFajtaja: 'NemzetisegiNevelesOktatásFajtaja',
    nemzetisegiNyelv: 'nemzetisegiNyelv',
    nemzetisegNyelvenFolyoSzakmaiOktatas: 'nemzetisegNyelvenFolyoSzakmaiOktatas',
    sportosztaly: 'sportosztaly',
    aranyjanostehetseggondozoprogram: 'aranyjanostehetseggondozoprogram',
    arany_janos_kollegiumi_program: 'arany_janos_kollegiumi_program',
    munkarend: 'munkarend',
    alapadatok_id: 'alapadatok_id',
    createAt: 'createAt',
    createBy: 'createBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte: 'a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte',
    tanev_kezdete: 'tanev_kezdete'
  };

  export type Tanugyi_AdatokScalarFieldEnum = (typeof Tanugyi_AdatokScalarFieldEnum)[keyof typeof Tanugyi_AdatokScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    permissions?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    alapadatokId?: UuidNullableFilter<"User"> | string | null
    tableAccess?: TableAccessListRelationFilter
    alapadatok?: XOR<AlapadatokNullableScalarRelationFilter, AlapadatokWhereInput> | null
    logs?: LogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    alapadatokId?: SortOrderInput | SortOrder
    tableAccess?: TableAccessOrderByRelationAggregateInput
    alapadatok?: AlapadatokOrderByWithRelationInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    permissions?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    alapadatokId?: UuidNullableFilter<"User"> | string | null
    tableAccess?: TableAccessListRelationFilter
    alapadatok?: XOR<AlapadatokNullableScalarRelationFilter, AlapadatokWhereInput> | null
    logs?: LogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    alapadatokId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    permissions?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    alapadatokId?: UuidNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TableAccessWhereInput = {
    AND?: TableAccessWhereInput | TableAccessWhereInput[]
    OR?: TableAccessWhereInput[]
    NOT?: TableAccessWhereInput | TableAccessWhereInput[]
    id?: UuidFilter<"TableAccess"> | string
    userId?: UuidNullableFilter<"TableAccess"> | string | null
    tableName?: StringFilter<"TableAccess"> | string
    access?: IntFilter<"TableAccess"> | number
    createdAt?: DateTimeFilter<"TableAccess"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TableAccess"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TableAccessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    tableName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TableAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TableAccessWhereInput | TableAccessWhereInput[]
    OR?: TableAccessWhereInput[]
    NOT?: TableAccessWhereInput | TableAccessWhereInput[]
    userId?: UuidNullableFilter<"TableAccess"> | string | null
    tableName?: StringFilter<"TableAccess"> | string
    access?: IntFilter<"TableAccess"> | number
    createdAt?: DateTimeFilter<"TableAccess"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TableAccess"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TableAccessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    tableName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TableAccessCountOrderByAggregateInput
    _avg?: TableAccessAvgOrderByAggregateInput
    _max?: TableAccessMaxOrderByAggregateInput
    _min?: TableAccessMinOrderByAggregateInput
    _sum?: TableAccessSumOrderByAggregateInput
  }

  export type TableAccessScalarWhereWithAggregatesInput = {
    AND?: TableAccessScalarWhereWithAggregatesInput | TableAccessScalarWhereWithAggregatesInput[]
    OR?: TableAccessScalarWhereWithAggregatesInput[]
    NOT?: TableAccessScalarWhereWithAggregatesInput | TableAccessScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"TableAccess"> | string
    userId?: UuidNullableWithAggregatesFilter<"TableAccess"> | string | null
    tableName?: StringWithAggregatesFilter<"TableAccess"> | string
    access?: IntWithAggregatesFilter<"TableAccess"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TableAccess"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"TableAccess"> | Date | string | null
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: UuidFilter<"Log"> | string
    userId?: UuidNullableFilter<"Log"> | string | null
    method?: StringFilter<"Log"> | string
    path?: StringFilter<"Log"> | string
    body?: JsonNullableFilter<"Log">
    query?: JsonNullableFilter<"Log">
    headers?: JsonNullableFilter<"Log">
    ip?: StringFilter<"Log"> | string
    userAgent?: StringFilter<"Log"> | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    method?: SortOrder
    path?: SortOrder
    body?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    userId?: UuidNullableFilter<"Log"> | string | null
    method?: StringFilter<"Log"> | string
    path?: StringFilter<"Log"> | string
    body?: JsonNullableFilter<"Log">
    query?: JsonNullableFilter<"Log">
    headers?: JsonNullableFilter<"Log">
    ip?: StringFilter<"Log"> | string
    userAgent?: StringFilter<"Log"> | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    method?: SortOrder
    path?: SortOrder
    body?: SortOrderInput | SortOrder
    query?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Log"> | string
    userId?: UuidNullableWithAggregatesFilter<"Log"> | string | null
    method?: StringWithAggregatesFilter<"Log"> | string
    path?: StringWithAggregatesFilter<"Log"> | string
    body?: JsonNullableWithAggregatesFilter<"Log">
    query?: JsonNullableWithAggregatesFilter<"Log">
    headers?: JsonNullableWithAggregatesFilter<"Log">
    ip?: StringWithAggregatesFilter<"Log"> | string
    userAgent?: StringWithAggregatesFilter<"Log"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
  }

  export type AlapadatokWhereInput = {
    AND?: AlapadatokWhereInput | AlapadatokWhereInput[]
    OR?: AlapadatokWhereInput[]
    NOT?: AlapadatokWhereInput | AlapadatokWhereInput[]
    id?: UuidFilter<"Alapadatok"> | string
    iskola_neve?: StringFilter<"Alapadatok"> | string
    intezmeny_tipus?: StringFilter<"Alapadatok"> | string
    felvettek_szama?: Felvettek_SzamaListRelationFilter
    tanar_letszam?: Tanar_LetszamListRelationFilter
    tanugyiAdatok?: Tanugyi_AdatokListRelationFilter
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    kompetencia?: KompetenciaListRelationFilter
    users?: UserListRelationFilter
  }

  export type AlapadatokOrderByWithRelationInput = {
    id?: SortOrder
    iskola_neve?: SortOrder
    intezmeny_tipus?: SortOrder
    felvettek_szama?: Felvettek_SzamaOrderByRelationAggregateInput
    tanar_letszam?: Tanar_LetszamOrderByRelationAggregateInput
    tanugyiAdatok?: Tanugyi_AdatokOrderByRelationAggregateInput
    tanulo_letszam?: Tanulo_LetszamOrderByRelationAggregateInput
    kompetencia?: KompetenciaOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type AlapadatokWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlapadatokWhereInput | AlapadatokWhereInput[]
    OR?: AlapadatokWhereInput[]
    NOT?: AlapadatokWhereInput | AlapadatokWhereInput[]
    iskola_neve?: StringFilter<"Alapadatok"> | string
    intezmeny_tipus?: StringFilter<"Alapadatok"> | string
    felvettek_szama?: Felvettek_SzamaListRelationFilter
    tanar_letszam?: Tanar_LetszamListRelationFilter
    tanugyiAdatok?: Tanugyi_AdatokListRelationFilter
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    kompetencia?: KompetenciaListRelationFilter
    users?: UserListRelationFilter
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
    felvettek_szama?: Felvettek_SzamaListRelationFilter
  }

  export type SzakiranyOrderByWithRelationInput = {
    id?: SortOrder
    nev?: SortOrder
    tanulo_letszam?: Tanulo_LetszamOrderByRelationAggregateInput
    felvettek_szama?: Felvettek_SzamaOrderByRelationAggregateInput
  }

  export type SzakiranyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nev?: string
    AND?: SzakiranyWhereInput | SzakiranyWhereInput[]
    OR?: SzakiranyWhereInput[]
    NOT?: SzakiranyWhereInput | SzakiranyWhereInput[]
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
    felvettek_szama?: Felvettek_SzamaListRelationFilter
  }, "id" | "nev">

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
    felvettek_szama?: Felvettek_SzamaListRelationFilter
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
  }

  export type SzakmaOrderByWithRelationInput = {
    id?: SortOrder
    nev?: SortOrder
    felvettek_szama?: Felvettek_SzamaOrderByRelationAggregateInput
    tanulo_letszam?: Tanulo_LetszamOrderByRelationAggregateInput
  }

  export type SzakmaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nev?: string
    AND?: SzakmaWhereInput | SzakmaWhereInput[]
    OR?: SzakmaWhereInput[]
    NOT?: SzakmaWhereInput | SzakmaWhereInput[]
    felvettek_szama?: Felvettek_SzamaListRelationFilter
    tanulo_letszam?: Tanulo_LetszamListRelationFilter
  }, "id" | "nev">

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
    createAt?: DateTimeFilter<"Tanulo_Letszam"> | Date | string
    createBy?: StringNullableFilter<"Tanulo_Letszam"> | string | null
    updatedAt?: DateTimeNullableFilter<"Tanulo_Letszam"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanulo_Letszam"> | string | null
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
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
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
    createAt?: DateTimeFilter<"Tanulo_Letszam"> | Date | string
    createBy?: StringNullableFilter<"Tanulo_Letszam"> | string | null
    updatedAt?: DateTimeNullableFilter<"Tanulo_Letszam"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanulo_Letszam"> | string | null
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
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
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
    createAt?: DateTimeWithAggregatesFilter<"Tanulo_Letszam"> | Date | string
    createBy?: StringNullableWithAggregatesFilter<"Tanulo_Letszam"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Tanulo_Letszam"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Tanulo_Letszam"> | string | null
  }

  export type Tanar_LetszamWhereInput = {
    AND?: Tanar_LetszamWhereInput | Tanar_LetszamWhereInput[]
    OR?: Tanar_LetszamWhereInput[]
    NOT?: Tanar_LetszamWhereInput | Tanar_LetszamWhereInput[]
    id?: UuidFilter<"Tanar_Letszam"> | string
    alapadatok_id?: UuidFilter<"Tanar_Letszam"> | string
    tanev_kezdete?: IntFilter<"Tanar_Letszam"> | number
    letszam?: IntFilter<"Tanar_Letszam"> | number
    createAt?: DateTimeFilter<"Tanar_Letszam"> | Date | string
    createBy?: StringNullableFilter<"Tanar_Letszam"> | string | null
    updatedAt?: DateTimeNullableFilter<"Tanar_Letszam"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanar_Letszam"> | string | null
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }

  export type Tanar_LetszamOrderByWithRelationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
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
    createAt?: DateTimeFilter<"Tanar_Letszam"> | Date | string
    createBy?: StringNullableFilter<"Tanar_Letszam"> | string | null
    updatedAt?: DateTimeNullableFilter<"Tanar_Letszam"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanar_Letszam"> | string | null
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }, "id">

  export type Tanar_LetszamOrderByWithAggregationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
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
    createAt?: DateTimeWithAggregatesFilter<"Tanar_Letszam"> | Date | string
    createBy?: StringNullableWithAggregatesFilter<"Tanar_Letszam"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Tanar_Letszam"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Tanar_Letszam"> | string | null
  }

  export type Felvettek_SzamaWhereInput = {
    AND?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    OR?: Felvettek_SzamaWhereInput[]
    NOT?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    id?: UuidFilter<"Felvettek_Szama"> | string
    alapadatok_id?: UuidFilter<"Felvettek_Szama"> | string
    tanev_kezdete?: IntFilter<"Felvettek_Szama"> | number
    szakma_id?: UuidFilter<"Felvettek_Szama"> | string
    szakiranyId?: UuidNullableFilter<"Felvettek_Szama"> | string | null
    jelentkezo_letszam?: IntFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntFilter<"Felvettek_Szama"> | number
    createAt?: DateTimeFilter<"Felvettek_Szama"> | Date | string
    createBy?: StringNullableFilter<"Felvettek_Szama"> | string | null
    updatedAt?: DateTimeNullableFilter<"Felvettek_Szama"> | Date | string | null
    updatedBy?: StringNullableFilter<"Felvettek_Szama"> | string | null
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
    szakma?: XOR<SzakmaScalarRelationFilter, SzakmaWhereInput>
    szakirany?: XOR<SzakiranyNullableScalarRelationFilter, SzakiranyWhereInput> | null
  }

  export type Felvettek_SzamaOrderByWithRelationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    szakiranyId?: SortOrderInput | SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    alapadatok?: AlapadatokOrderByWithRelationInput
    szakma?: SzakmaOrderByWithRelationInput
    szakirany?: SzakiranyOrderByWithRelationInput
  }

  export type Felvettek_SzamaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    OR?: Felvettek_SzamaWhereInput[]
    NOT?: Felvettek_SzamaWhereInput | Felvettek_SzamaWhereInput[]
    alapadatok_id?: UuidFilter<"Felvettek_Szama"> | string
    tanev_kezdete?: IntFilter<"Felvettek_Szama"> | number
    szakma_id?: UuidFilter<"Felvettek_Szama"> | string
    szakiranyId?: UuidNullableFilter<"Felvettek_Szama"> | string | null
    jelentkezo_letszam?: IntFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntFilter<"Felvettek_Szama"> | number
    createAt?: DateTimeFilter<"Felvettek_Szama"> | Date | string
    createBy?: StringNullableFilter<"Felvettek_Szama"> | string | null
    updatedAt?: DateTimeNullableFilter<"Felvettek_Szama"> | Date | string | null
    updatedBy?: StringNullableFilter<"Felvettek_Szama"> | string | null
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
    szakma?: XOR<SzakmaScalarRelationFilter, SzakmaWhereInput>
    szakirany?: XOR<SzakiranyNullableScalarRelationFilter, SzakiranyWhereInput> | null
  }, "id">

  export type Felvettek_SzamaOrderByWithAggregationInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    szakiranyId?: SortOrderInput | SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
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
    szakiranyId?: UuidNullableWithAggregatesFilter<"Felvettek_Szama"> | string | null
    jelentkezo_letszam?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntWithAggregatesFilter<"Felvettek_Szama"> | number
    createAt?: DateTimeWithAggregatesFilter<"Felvettek_Szama"> | Date | string
    createBy?: StringNullableWithAggregatesFilter<"Felvettek_Szama"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Felvettek_Szama"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Felvettek_Szama"> | string | null
  }

  export type KompetenciaWhereInput = {
    AND?: KompetenciaWhereInput | KompetenciaWhereInput[]
    OR?: KompetenciaWhereInput[]
    NOT?: KompetenciaWhereInput | KompetenciaWhereInput[]
    id?: UuidFilter<"Kompetencia"> | string
    tanev_kezdete?: IntFilter<"Kompetencia"> | number
    mat_orsz_p?: StringFilter<"Kompetencia"> | string
    szoveg_orsz_p?: StringFilter<"Kompetencia"> | string
    mat_int_p?: StringFilter<"Kompetencia"> | string
    szoveg_int_p?: StringFilter<"Kompetencia"> | string
    kepzes_forma?: StringFilter<"Kompetencia"> | string
    alapadatok_id?: UuidFilter<"Kompetencia"> | string
    createAt?: DateTimeFilter<"Kompetencia"> | Date | string
    createBy?: StringNullableFilter<"Kompetencia"> | string | null
    updatedAt?: DateTimeNullableFilter<"Kompetencia"> | Date | string | null
    updatedBy?: StringNullableFilter<"Kompetencia"> | string | null
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }

  export type KompetenciaOrderByWithRelationInput = {
    id?: SortOrder
    tanev_kezdete?: SortOrder
    mat_orsz_p?: SortOrder
    szoveg_orsz_p?: SortOrder
    mat_int_p?: SortOrder
    szoveg_int_p?: SortOrder
    kepzes_forma?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    alapadatok?: AlapadatokOrderByWithRelationInput
  }

  export type KompetenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KompetenciaWhereInput | KompetenciaWhereInput[]
    OR?: KompetenciaWhereInput[]
    NOT?: KompetenciaWhereInput | KompetenciaWhereInput[]
    tanev_kezdete?: IntFilter<"Kompetencia"> | number
    mat_orsz_p?: StringFilter<"Kompetencia"> | string
    szoveg_orsz_p?: StringFilter<"Kompetencia"> | string
    mat_int_p?: StringFilter<"Kompetencia"> | string
    szoveg_int_p?: StringFilter<"Kompetencia"> | string
    kepzes_forma?: StringFilter<"Kompetencia"> | string
    alapadatok_id?: UuidFilter<"Kompetencia"> | string
    createAt?: DateTimeFilter<"Kompetencia"> | Date | string
    createBy?: StringNullableFilter<"Kompetencia"> | string | null
    updatedAt?: DateTimeNullableFilter<"Kompetencia"> | Date | string | null
    updatedBy?: StringNullableFilter<"Kompetencia"> | string | null
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }, "id">

  export type KompetenciaOrderByWithAggregationInput = {
    id?: SortOrder
    tanev_kezdete?: SortOrder
    mat_orsz_p?: SortOrder
    szoveg_orsz_p?: SortOrder
    mat_int_p?: SortOrder
    szoveg_int_p?: SortOrder
    kepzes_forma?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    _count?: KompetenciaCountOrderByAggregateInput
    _avg?: KompetenciaAvgOrderByAggregateInput
    _max?: KompetenciaMaxOrderByAggregateInput
    _min?: KompetenciaMinOrderByAggregateInput
    _sum?: KompetenciaSumOrderByAggregateInput
  }

  export type KompetenciaScalarWhereWithAggregatesInput = {
    AND?: KompetenciaScalarWhereWithAggregatesInput | KompetenciaScalarWhereWithAggregatesInput[]
    OR?: KompetenciaScalarWhereWithAggregatesInput[]
    NOT?: KompetenciaScalarWhereWithAggregatesInput | KompetenciaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Kompetencia"> | string
    tanev_kezdete?: IntWithAggregatesFilter<"Kompetencia"> | number
    mat_orsz_p?: StringWithAggregatesFilter<"Kompetencia"> | string
    szoveg_orsz_p?: StringWithAggregatesFilter<"Kompetencia"> | string
    mat_int_p?: StringWithAggregatesFilter<"Kompetencia"> | string
    szoveg_int_p?: StringWithAggregatesFilter<"Kompetencia"> | string
    kepzes_forma?: StringWithAggregatesFilter<"Kompetencia"> | string
    alapadatok_id?: UuidWithAggregatesFilter<"Kompetencia"> | string
    createAt?: DateTimeWithAggregatesFilter<"Kompetencia"> | Date | string
    createBy?: StringNullableWithAggregatesFilter<"Kompetencia"> | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Kompetencia"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Kompetencia"> | string | null
  }

  export type Tanugyi_AdatokWhereInput = {
    AND?: Tanugyi_AdatokWhereInput | Tanugyi_AdatokWhereInput[]
    OR?: Tanugyi_AdatokWhereInput[]
    NOT?: Tanugyi_AdatokWhereInput | Tanugyi_AdatokWhereInput[]
    id?: UuidFilter<"Tanugyi_Adatok"> | string
    elotag?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    vezeteknev?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    utonev?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    oktatasiAzonositoja?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    osztaly?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szuletesiDatuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    anyjaSzuletesiDatuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanterv?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    naploSorszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    beiras_naplo_sorszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    felvetel_taneve?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    torzslapszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanulo_jogviszonya?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_kezdete?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_megszunesenek_varhato_datuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszonyátSzunetelteto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettsegetTeljesito?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettségVege?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    bejaro?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Szakmai_gyakorlaton_tartozkodik?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_oka?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_kezdete?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_vege?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Vendegtanulo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tandijat_fizeto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    teritesi_dijat_fizeto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanuloszerzodeses?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    polgari_szerzodeses?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    evfolyamismetlo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    elozo_intezmeny?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    osztaly1?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    evfolyam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    bizonyitvany_sorszama?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    okleveles_technikus_képzes?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_Szkt_agazat_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakma_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakmairany_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_tanulmanyi_terulet?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakkepesites?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakirany?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazat_uj_szkt_reszszakmahoz?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakma_reszszakmahoz?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    reszszakma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazat_tanulmanyi_terulet?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakmai_kepzes?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapoktatas_megnevezese?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmeny?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye_percent?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakkepzesi_munkaszerzodessel?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_neve?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_adoszama?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    kiemelten_tehetseges?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nyelvi_elokeszito?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    ket_tanitasi_nyelvu?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatas?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatásFajtaja?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegiNyelv?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    sportosztaly?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    aranyjanostehetseggondozoprogram?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    arany_janos_kollegiumi_program?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    munkarend?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    alapadatok_id?: UuidFilter<"Tanugyi_Adatok"> | string
    createAt?: DateTimeFilter<"Tanugyi_Adatok"> | Date | string
    createBy?: StringFilter<"Tanugyi_Adatok"> | string
    updatedAt?: DateTimeNullableFilter<"Tanugyi_Adatok"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanev_kezdete?: IntFilter<"Tanugyi_Adatok"> | number
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }

  export type Tanugyi_AdatokOrderByWithRelationInput = {
    id?: SortOrder
    elotag?: SortOrderInput | SortOrder
    vezeteknev?: SortOrderInput | SortOrder
    utonev?: SortOrderInput | SortOrder
    oktatasiAzonositoja?: SortOrderInput | SortOrder
    osztaly?: SortOrderInput | SortOrder
    szuletesiDatuma?: SortOrderInput | SortOrder
    anyjaSzuletesiDatuma?: SortOrderInput | SortOrder
    tanterv?: SortOrderInput | SortOrder
    naploSorszam?: SortOrderInput | SortOrder
    beiras_naplo_sorszam?: SortOrderInput | SortOrder
    felvetel_taneve?: SortOrderInput | SortOrder
    torzslapszam?: SortOrderInput | SortOrder
    tanulo_jogviszonya?: SortOrderInput | SortOrder
    jogviszony_kezdete?: SortOrderInput | SortOrder
    jogviszony_megszunesenek_varhato_datuma?: SortOrderInput | SortOrder
    jogviszonyátSzunetelteto?: SortOrderInput | SortOrder
    tankotelezettsegetTeljesito?: SortOrderInput | SortOrder
    tankotelezettségVege?: SortOrderInput | SortOrder
    bejaro?: SortOrderInput | SortOrder
    Szakmai_gyakorlaton_tartozkodik?: SortOrderInput | SortOrder
    Egyeni_munkarend?: SortOrderInput | SortOrder
    Egyeni_munkarend_oka?: SortOrderInput | SortOrder
    Egyeni_munkarend_kezdete?: SortOrderInput | SortOrder
    Egyeni_munkarend_vege?: SortOrderInput | SortOrder
    Vendegtanulo?: SortOrderInput | SortOrder
    tandijat_fizeto?: SortOrderInput | SortOrder
    teritesi_dijat_fizeto?: SortOrderInput | SortOrder
    tanuloszerzodeses?: SortOrderInput | SortOrder
    polgari_szerzodeses?: SortOrderInput | SortOrder
    iskolai_sportkorben_reszt_vevo_tanulo?: SortOrderInput | SortOrder
    evfolyamismetlo?: SortOrderInput | SortOrder
    elozo_intezmeny?: SortOrderInput | SortOrder
    osztaly1?: SortOrderInput | SortOrder
    evfolyam?: SortOrderInput | SortOrder
    bizonyitvany_sorszama?: SortOrderInput | SortOrder
    okleveles_technikus_képzes?: SortOrderInput | SortOrder
    uj_Szkt_agazat_tipusa?: SortOrderInput | SortOrder
    uj_szkt_szakma_tipusa?: SortOrderInput | SortOrder
    uj_szkt_szakmairany_tipusa?: SortOrderInput | SortOrder
    nkt_tanulmanyi_terulet?: SortOrderInput | SortOrder
    nkt_szakkepesites?: SortOrderInput | SortOrder
    nkt_szakirany?: SortOrderInput | SortOrder
    agazat_uj_szkt_reszszakmahoz?: SortOrderInput | SortOrder
    szakma_reszszakmahoz?: SortOrderInput | SortOrder
    reszszakma?: SortOrderInput | SortOrder
    agazat_tanulmanyi_terulet?: SortOrderInput | SortOrder
    szakmai_kepzes?: SortOrderInput | SortOrder
    agazati_alapoktatas_megnevezese?: SortOrderInput | SortOrder
    agazati_alapvizsga_eredmeny?: SortOrderInput | SortOrder
    agazati_alapvizsga_teljesitesenek_datuma?: SortOrderInput | SortOrder
    agazati_alapvizsga_eredmenye?: SortOrderInput | SortOrder
    agazati_alapvizsga_eredmenye_percent?: SortOrderInput | SortOrder
    szakkepzesi_munkaszerzodessel?: SortOrderInput | SortOrder
    Dualis_kepzohely_neve?: SortOrderInput | SortOrder
    Dualis_kepzohely_adoszama?: SortOrderInput | SortOrder
    kiemelten_tehetseges?: SortOrderInput | SortOrder
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: SortOrderInput | SortOrder
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: SortOrderInput | SortOrder
    egesz_napos_iskolai_oktatasban_reszesul?: SortOrderInput | SortOrder
    nyelvi_elokeszito?: SortOrderInput | SortOrder
    ket_tanitasi_nyelvu?: SortOrderInput | SortOrder
    NemzetisegiNevelesOktatas?: SortOrderInput | SortOrder
    NemzetisegiNevelesOktatásFajtaja?: SortOrderInput | SortOrder
    nemzetisegiNyelv?: SortOrderInput | SortOrder
    nemzetisegNyelvenFolyoSzakmaiOktatas?: SortOrderInput | SortOrder
    sportosztaly?: SortOrderInput | SortOrder
    aranyjanostehetseggondozoprogram?: SortOrderInput | SortOrder
    arany_janos_kollegiumi_program?: SortOrderInput | SortOrder
    munkarend?: SortOrderInput | SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: SortOrderInput | SortOrder
    tanev_kezdete?: SortOrder
    alapadatok?: AlapadatokOrderByWithRelationInput
  }

  export type Tanugyi_AdatokWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Tanugyi_AdatokWhereInput | Tanugyi_AdatokWhereInput[]
    OR?: Tanugyi_AdatokWhereInput[]
    NOT?: Tanugyi_AdatokWhereInput | Tanugyi_AdatokWhereInput[]
    elotag?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    vezeteknev?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    utonev?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    oktatasiAzonositoja?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    osztaly?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szuletesiDatuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    anyjaSzuletesiDatuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanterv?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    naploSorszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    beiras_naplo_sorszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    felvetel_taneve?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    torzslapszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanulo_jogviszonya?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_kezdete?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_megszunesenek_varhato_datuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszonyátSzunetelteto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettsegetTeljesito?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettségVege?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    bejaro?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Szakmai_gyakorlaton_tartozkodik?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_oka?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_kezdete?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_vege?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Vendegtanulo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tandijat_fizeto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    teritesi_dijat_fizeto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanuloszerzodeses?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    polgari_szerzodeses?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    evfolyamismetlo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    elozo_intezmeny?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    osztaly1?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    evfolyam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    bizonyitvany_sorszama?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    okleveles_technikus_képzes?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_Szkt_agazat_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakma_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakmairany_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_tanulmanyi_terulet?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakkepesites?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakirany?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazat_uj_szkt_reszszakmahoz?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakma_reszszakmahoz?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    reszszakma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazat_tanulmanyi_terulet?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakmai_kepzes?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapoktatas_megnevezese?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmeny?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye_percent?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakkepzesi_munkaszerzodessel?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_neve?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_adoszama?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    kiemelten_tehetseges?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nyelvi_elokeszito?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    ket_tanitasi_nyelvu?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatas?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatásFajtaja?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegiNyelv?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    sportosztaly?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    aranyjanostehetseggondozoprogram?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    arany_janos_kollegiumi_program?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    munkarend?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    alapadatok_id?: UuidFilter<"Tanugyi_Adatok"> | string
    createAt?: DateTimeFilter<"Tanugyi_Adatok"> | Date | string
    createBy?: StringFilter<"Tanugyi_Adatok"> | string
    updatedAt?: DateTimeNullableFilter<"Tanugyi_Adatok"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanev_kezdete?: IntFilter<"Tanugyi_Adatok"> | number
    alapadatok?: XOR<AlapadatokScalarRelationFilter, AlapadatokWhereInput>
  }, "id">

  export type Tanugyi_AdatokOrderByWithAggregationInput = {
    id?: SortOrder
    elotag?: SortOrderInput | SortOrder
    vezeteknev?: SortOrderInput | SortOrder
    utonev?: SortOrderInput | SortOrder
    oktatasiAzonositoja?: SortOrderInput | SortOrder
    osztaly?: SortOrderInput | SortOrder
    szuletesiDatuma?: SortOrderInput | SortOrder
    anyjaSzuletesiDatuma?: SortOrderInput | SortOrder
    tanterv?: SortOrderInput | SortOrder
    naploSorszam?: SortOrderInput | SortOrder
    beiras_naplo_sorszam?: SortOrderInput | SortOrder
    felvetel_taneve?: SortOrderInput | SortOrder
    torzslapszam?: SortOrderInput | SortOrder
    tanulo_jogviszonya?: SortOrderInput | SortOrder
    jogviszony_kezdete?: SortOrderInput | SortOrder
    jogviszony_megszunesenek_varhato_datuma?: SortOrderInput | SortOrder
    jogviszonyátSzunetelteto?: SortOrderInput | SortOrder
    tankotelezettsegetTeljesito?: SortOrderInput | SortOrder
    tankotelezettségVege?: SortOrderInput | SortOrder
    bejaro?: SortOrderInput | SortOrder
    Szakmai_gyakorlaton_tartozkodik?: SortOrderInput | SortOrder
    Egyeni_munkarend?: SortOrderInput | SortOrder
    Egyeni_munkarend_oka?: SortOrderInput | SortOrder
    Egyeni_munkarend_kezdete?: SortOrderInput | SortOrder
    Egyeni_munkarend_vege?: SortOrderInput | SortOrder
    Vendegtanulo?: SortOrderInput | SortOrder
    tandijat_fizeto?: SortOrderInput | SortOrder
    teritesi_dijat_fizeto?: SortOrderInput | SortOrder
    tanuloszerzodeses?: SortOrderInput | SortOrder
    polgari_szerzodeses?: SortOrderInput | SortOrder
    iskolai_sportkorben_reszt_vevo_tanulo?: SortOrderInput | SortOrder
    evfolyamismetlo?: SortOrderInput | SortOrder
    elozo_intezmeny?: SortOrderInput | SortOrder
    osztaly1?: SortOrderInput | SortOrder
    evfolyam?: SortOrderInput | SortOrder
    bizonyitvany_sorszama?: SortOrderInput | SortOrder
    okleveles_technikus_képzes?: SortOrderInput | SortOrder
    uj_Szkt_agazat_tipusa?: SortOrderInput | SortOrder
    uj_szkt_szakma_tipusa?: SortOrderInput | SortOrder
    uj_szkt_szakmairany_tipusa?: SortOrderInput | SortOrder
    nkt_tanulmanyi_terulet?: SortOrderInput | SortOrder
    nkt_szakkepesites?: SortOrderInput | SortOrder
    nkt_szakirany?: SortOrderInput | SortOrder
    agazat_uj_szkt_reszszakmahoz?: SortOrderInput | SortOrder
    szakma_reszszakmahoz?: SortOrderInput | SortOrder
    reszszakma?: SortOrderInput | SortOrder
    agazat_tanulmanyi_terulet?: SortOrderInput | SortOrder
    szakmai_kepzes?: SortOrderInput | SortOrder
    agazati_alapoktatas_megnevezese?: SortOrderInput | SortOrder
    agazati_alapvizsga_eredmeny?: SortOrderInput | SortOrder
    agazati_alapvizsga_teljesitesenek_datuma?: SortOrderInput | SortOrder
    agazati_alapvizsga_eredmenye?: SortOrderInput | SortOrder
    agazati_alapvizsga_eredmenye_percent?: SortOrderInput | SortOrder
    szakkepzesi_munkaszerzodessel?: SortOrderInput | SortOrder
    Dualis_kepzohely_neve?: SortOrderInput | SortOrder
    Dualis_kepzohely_adoszama?: SortOrderInput | SortOrder
    kiemelten_tehetseges?: SortOrderInput | SortOrder
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: SortOrderInput | SortOrder
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: SortOrderInput | SortOrder
    egesz_napos_iskolai_oktatasban_reszesul?: SortOrderInput | SortOrder
    nyelvi_elokeszito?: SortOrderInput | SortOrder
    ket_tanitasi_nyelvu?: SortOrderInput | SortOrder
    NemzetisegiNevelesOktatas?: SortOrderInput | SortOrder
    NemzetisegiNevelesOktatásFajtaja?: SortOrderInput | SortOrder
    nemzetisegiNyelv?: SortOrderInput | SortOrder
    nemzetisegNyelvenFolyoSzakmaiOktatas?: SortOrderInput | SortOrder
    sportosztaly?: SortOrderInput | SortOrder
    aranyjanostehetseggondozoprogram?: SortOrderInput | SortOrder
    arany_janos_kollegiumi_program?: SortOrderInput | SortOrder
    munkarend?: SortOrderInput | SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    updatedBy?: SortOrderInput | SortOrder
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: SortOrderInput | SortOrder
    tanev_kezdete?: SortOrder
    _count?: Tanugyi_AdatokCountOrderByAggregateInput
    _avg?: Tanugyi_AdatokAvgOrderByAggregateInput
    _max?: Tanugyi_AdatokMaxOrderByAggregateInput
    _min?: Tanugyi_AdatokMinOrderByAggregateInput
    _sum?: Tanugyi_AdatokSumOrderByAggregateInput
  }

  export type Tanugyi_AdatokScalarWhereWithAggregatesInput = {
    AND?: Tanugyi_AdatokScalarWhereWithAggregatesInput | Tanugyi_AdatokScalarWhereWithAggregatesInput[]
    OR?: Tanugyi_AdatokScalarWhereWithAggregatesInput[]
    NOT?: Tanugyi_AdatokScalarWhereWithAggregatesInput | Tanugyi_AdatokScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tanugyi_Adatok"> | string
    elotag?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    vezeteknev?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    utonev?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    oktatasiAzonositoja?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    osztaly?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    szuletesiDatuma?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    anyjaSzuletesiDatuma?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tanterv?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    naploSorszam?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    beiras_naplo_sorszam?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    felvetel_taneve?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    torzslapszam?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tanulo_jogviszonya?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_kezdete?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_megszunesenek_varhato_datuma?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    jogviszonyátSzunetelteto?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettsegetTeljesito?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettségVege?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    bejaro?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Szakmai_gyakorlaton_tartozkodik?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_oka?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_kezdete?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_vege?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Vendegtanulo?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tandijat_fizeto?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    teritesi_dijat_fizeto?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tanuloszerzodeses?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    polgari_szerzodeses?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    evfolyamismetlo?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    elozo_intezmeny?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    osztaly1?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    evfolyam?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    bizonyitvany_sorszama?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    okleveles_technikus_képzes?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    uj_Szkt_agazat_tipusa?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakma_tipusa?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakmairany_tipusa?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    nkt_tanulmanyi_terulet?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakkepesites?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakirany?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazat_uj_szkt_reszszakmahoz?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    szakma_reszszakmahoz?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    reszszakma?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazat_tanulmanyi_terulet?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    szakmai_kepzes?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapoktatas_megnevezese?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmeny?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye_percent?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    szakkepzesi_munkaszerzodessel?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_neve?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_adoszama?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    kiemelten_tehetseges?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    nyelvi_elokeszito?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    ket_tanitasi_nyelvu?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatas?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatásFajtaja?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegiNyelv?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    sportosztaly?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    aranyjanostehetseggondozoprogram?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    arany_janos_kollegiumi_program?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    munkarend?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    alapadatok_id?: UuidWithAggregatesFilter<"Tanugyi_Adatok"> | string
    createAt?: DateTimeWithAggregatesFilter<"Tanugyi_Adatok"> | Date | string
    createBy?: StringWithAggregatesFilter<"Tanugyi_Adatok"> | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Tanugyi_Adatok"> | Date | string | null
    updatedBy?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: StringNullableWithAggregatesFilter<"Tanugyi_Adatok"> | string | null
    tanev_kezdete?: IntWithAggregatesFilter<"Tanugyi_Adatok"> | number
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tableAccess?: TableAccessCreateNestedManyWithoutUserInput
    alapadatok?: AlapadatokCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alapadatokId?: string | null
    tableAccess?: TableAccessUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tableAccess?: TableAccessUpdateManyWithoutUserNestedInput
    alapadatok?: AlapadatokUpdateOneWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alapadatokId?: NullableStringFieldUpdateOperationsInput | string | null
    tableAccess?: TableAccessUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alapadatokId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alapadatokId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TableAccessCreateInput = {
    id?: string
    tableName: string
    access?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutTableAccessInput
  }

  export type TableAccessUncheckedCreateInput = {
    id?: string
    userId?: string | null
    tableName: string
    access?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TableAccessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutTableAccessNestedInput
  }

  export type TableAccessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableAccessCreateManyInput = {
    id?: string
    userId?: string | null
    tableName: string
    access?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TableAccessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableAccessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogCreateInput = {
    id?: string
    method: string
    path: string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    userAgent: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    method: string
    path: string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    userAgent: string
    createdAt?: Date | string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogCreateManyInput = {
    id?: string
    userId?: string | null
    method: string
    path: string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    userAgent: string
    createdAt?: Date | string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlapadatokCreateInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaCreateNestedManyWithoutAlapadatokInput
    users?: UserCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput
    users?: UserUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUpdateManyWithoutAlapadatokNestedInput
    users?: UserUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput
    users?: UserUncheckedUpdateManyWithoutAlapadatokNestedInput
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
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyUncheckedCreateInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakiranyInput
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutSzakiranyNestedInput
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutSzakiranyNestedInput
  }

  export type SzakiranyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyNestedInput
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutSzakiranyNestedInput
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
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutSzakmaInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaUncheckedCreateInput = {
    id?: string
    nev: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakmaInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakmaInput
  }

  export type SzakmaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutSzakmaNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutSzakmaNestedInput
  }

  export type SzakmaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaNestedInput
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
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
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
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanulo_LetszamCreateManyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanulo_LetszamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    szakma_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanar_LetszamCreateInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    alapadatok: AlapadatokCreateNestedOneWithoutTanar_letszamInput
  }

  export type Tanar_LetszamUncheckedCreateInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanar_LetszamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok?: AlapadatokUpdateOneRequiredWithoutTanar_letszamNestedInput
  }

  export type Tanar_LetszamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanar_LetszamCreateManyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanar_LetszamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanar_LetszamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaCreateInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    alapadatok: AlapadatokCreateNestedOneWithoutFelvettek_szamaInput
    szakma: SzakmaCreateNestedOneWithoutFelvettek_szamaInput
    szakirany?: SzakiranyCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    szakiranyId?: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok?: AlapadatokUpdateOneRequiredWithoutFelvettek_szamaNestedInput
    szakma?: SzakmaUpdateOneRequiredWithoutFelvettek_szamaNestedInput
    szakirany?: SzakiranyUpdateOneWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    szakiranyId?: NullableStringFieldUpdateOperationsInput | string | null
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaCreateManyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    szakiranyId?: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    szakiranyId?: NullableStringFieldUpdateOperationsInput | string | null
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetenciaCreateInput = {
    id?: string
    tanev_kezdete?: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    alapadatok: AlapadatokCreateNestedOneWithoutKompetenciaInput
  }

  export type KompetenciaUncheckedCreateInput = {
    id?: string
    tanev_kezdete?: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    alapadatok_id: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type KompetenciaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok?: AlapadatokUpdateOneRequiredWithoutKompetenciaNestedInput
  }

  export type KompetenciaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetenciaCreateManyInput = {
    id?: string
    tanev_kezdete?: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    alapadatok_id: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type KompetenciaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetenciaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanugyi_AdatokCreateInput = {
    id?: string
    elotag?: string | null
    vezeteknev?: string | null
    utonev?: string | null
    oktatasiAzonositoja?: string | null
    osztaly?: string | null
    szuletesiDatuma?: string | null
    anyjaSzuletesiDatuma?: string | null
    tanterv?: string | null
    naploSorszam?: string | null
    beiras_naplo_sorszam?: string | null
    felvetel_taneve?: string | null
    torzslapszam?: string | null
    tanulo_jogviszonya?: string | null
    jogviszony_kezdete?: string | null
    jogviszony_megszunesenek_varhato_datuma?: string | null
    jogviszonyátSzunetelteto?: string | null
    tankotelezettsegetTeljesito?: string | null
    tankotelezettségVege?: string | null
    bejaro?: string | null
    Szakmai_gyakorlaton_tartozkodik?: string | null
    Egyeni_munkarend?: string | null
    Egyeni_munkarend_oka?: string | null
    Egyeni_munkarend_kezdete?: string | null
    Egyeni_munkarend_vege?: string | null
    Vendegtanulo?: string | null
    tandijat_fizeto?: string | null
    teritesi_dijat_fizeto?: string | null
    tanuloszerzodeses?: string | null
    polgari_szerzodeses?: string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: string | null
    evfolyamismetlo?: string | null
    elozo_intezmeny?: string | null
    osztaly1?: string | null
    evfolyam?: string | null
    bizonyitvany_sorszama?: string | null
    okleveles_technikus_képzes?: string | null
    uj_Szkt_agazat_tipusa?: string | null
    uj_szkt_szakma_tipusa?: string | null
    uj_szkt_szakmairany_tipusa?: string | null
    nkt_tanulmanyi_terulet?: string | null
    nkt_szakkepesites?: string | null
    nkt_szakirany?: string | null
    agazat_uj_szkt_reszszakmahoz?: string | null
    szakma_reszszakmahoz?: string | null
    reszszakma?: string | null
    agazat_tanulmanyi_terulet?: string | null
    szakmai_kepzes?: string | null
    agazati_alapoktatas_megnevezese?: string | null
    agazati_alapvizsga_eredmeny?: string | null
    agazati_alapvizsga_teljesitesenek_datuma?: string | null
    agazati_alapvizsga_eredmenye?: string | null
    agazati_alapvizsga_eredmenye_percent?: string | null
    szakkepzesi_munkaszerzodessel?: string | null
    Dualis_kepzohely_neve?: string | null
    Dualis_kepzohely_adoszama?: string | null
    kiemelten_tehetseges?: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: string | null
    egesz_napos_iskolai_oktatasban_reszesul?: string | null
    nyelvi_elokeszito?: string | null
    ket_tanitasi_nyelvu?: string | null
    NemzetisegiNevelesOktatas?: string | null
    NemzetisegiNevelesOktatásFajtaja?: string | null
    nemzetisegiNyelv?: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: string | null
    sportosztaly?: string | null
    aranyjanostehetseggondozoprogram?: string | null
    arany_janos_kollegiumi_program?: string | null
    munkarend?: string | null
    createAt?: Date | string
    createBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: string | null
    tanev_kezdete?: number
    alapadatok: AlapadatokCreateNestedOneWithoutTanugyiAdatokInput
  }

  export type Tanugyi_AdatokUncheckedCreateInput = {
    id?: string
    elotag?: string | null
    vezeteknev?: string | null
    utonev?: string | null
    oktatasiAzonositoja?: string | null
    osztaly?: string | null
    szuletesiDatuma?: string | null
    anyjaSzuletesiDatuma?: string | null
    tanterv?: string | null
    naploSorszam?: string | null
    beiras_naplo_sorszam?: string | null
    felvetel_taneve?: string | null
    torzslapszam?: string | null
    tanulo_jogviszonya?: string | null
    jogviszony_kezdete?: string | null
    jogviszony_megszunesenek_varhato_datuma?: string | null
    jogviszonyátSzunetelteto?: string | null
    tankotelezettsegetTeljesito?: string | null
    tankotelezettségVege?: string | null
    bejaro?: string | null
    Szakmai_gyakorlaton_tartozkodik?: string | null
    Egyeni_munkarend?: string | null
    Egyeni_munkarend_oka?: string | null
    Egyeni_munkarend_kezdete?: string | null
    Egyeni_munkarend_vege?: string | null
    Vendegtanulo?: string | null
    tandijat_fizeto?: string | null
    teritesi_dijat_fizeto?: string | null
    tanuloszerzodeses?: string | null
    polgari_szerzodeses?: string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: string | null
    evfolyamismetlo?: string | null
    elozo_intezmeny?: string | null
    osztaly1?: string | null
    evfolyam?: string | null
    bizonyitvany_sorszama?: string | null
    okleveles_technikus_képzes?: string | null
    uj_Szkt_agazat_tipusa?: string | null
    uj_szkt_szakma_tipusa?: string | null
    uj_szkt_szakmairany_tipusa?: string | null
    nkt_tanulmanyi_terulet?: string | null
    nkt_szakkepesites?: string | null
    nkt_szakirany?: string | null
    agazat_uj_szkt_reszszakmahoz?: string | null
    szakma_reszszakmahoz?: string | null
    reszszakma?: string | null
    agazat_tanulmanyi_terulet?: string | null
    szakmai_kepzes?: string | null
    agazati_alapoktatas_megnevezese?: string | null
    agazati_alapvizsga_eredmeny?: string | null
    agazati_alapvizsga_teljesitesenek_datuma?: string | null
    agazati_alapvizsga_eredmenye?: string | null
    agazati_alapvizsga_eredmenye_percent?: string | null
    szakkepzesi_munkaszerzodessel?: string | null
    Dualis_kepzohely_neve?: string | null
    Dualis_kepzohely_adoszama?: string | null
    kiemelten_tehetseges?: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: string | null
    egesz_napos_iskolai_oktatasban_reszesul?: string | null
    nyelvi_elokeszito?: string | null
    ket_tanitasi_nyelvu?: string | null
    NemzetisegiNevelesOktatas?: string | null
    NemzetisegiNevelesOktatásFajtaja?: string | null
    nemzetisegiNyelv?: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: string | null
    sportosztaly?: string | null
    aranyjanostehetseggondozoprogram?: string | null
    arany_janos_kollegiumi_program?: string | null
    munkarend?: string | null
    alapadatok_id: string
    createAt?: Date | string
    createBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: string | null
    tanev_kezdete?: number
  }

  export type Tanugyi_AdatokUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    alapadatok?: AlapadatokUpdateOneRequiredWithoutTanugyiAdatokNestedInput
  }

  export type Tanugyi_AdatokUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
  }

  export type Tanugyi_AdatokCreateManyInput = {
    id?: string
    elotag?: string | null
    vezeteknev?: string | null
    utonev?: string | null
    oktatasiAzonositoja?: string | null
    osztaly?: string | null
    szuletesiDatuma?: string | null
    anyjaSzuletesiDatuma?: string | null
    tanterv?: string | null
    naploSorszam?: string | null
    beiras_naplo_sorszam?: string | null
    felvetel_taneve?: string | null
    torzslapszam?: string | null
    tanulo_jogviszonya?: string | null
    jogviszony_kezdete?: string | null
    jogviszony_megszunesenek_varhato_datuma?: string | null
    jogviszonyátSzunetelteto?: string | null
    tankotelezettsegetTeljesito?: string | null
    tankotelezettségVege?: string | null
    bejaro?: string | null
    Szakmai_gyakorlaton_tartozkodik?: string | null
    Egyeni_munkarend?: string | null
    Egyeni_munkarend_oka?: string | null
    Egyeni_munkarend_kezdete?: string | null
    Egyeni_munkarend_vege?: string | null
    Vendegtanulo?: string | null
    tandijat_fizeto?: string | null
    teritesi_dijat_fizeto?: string | null
    tanuloszerzodeses?: string | null
    polgari_szerzodeses?: string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: string | null
    evfolyamismetlo?: string | null
    elozo_intezmeny?: string | null
    osztaly1?: string | null
    evfolyam?: string | null
    bizonyitvany_sorszama?: string | null
    okleveles_technikus_képzes?: string | null
    uj_Szkt_agazat_tipusa?: string | null
    uj_szkt_szakma_tipusa?: string | null
    uj_szkt_szakmairany_tipusa?: string | null
    nkt_tanulmanyi_terulet?: string | null
    nkt_szakkepesites?: string | null
    nkt_szakirany?: string | null
    agazat_uj_szkt_reszszakmahoz?: string | null
    szakma_reszszakmahoz?: string | null
    reszszakma?: string | null
    agazat_tanulmanyi_terulet?: string | null
    szakmai_kepzes?: string | null
    agazati_alapoktatas_megnevezese?: string | null
    agazati_alapvizsga_eredmeny?: string | null
    agazati_alapvizsga_teljesitesenek_datuma?: string | null
    agazati_alapvizsga_eredmenye?: string | null
    agazati_alapvizsga_eredmenye_percent?: string | null
    szakkepzesi_munkaszerzodessel?: string | null
    Dualis_kepzohely_neve?: string | null
    Dualis_kepzohely_adoszama?: string | null
    kiemelten_tehetseges?: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: string | null
    egesz_napos_iskolai_oktatasban_reszesul?: string | null
    nyelvi_elokeszito?: string | null
    ket_tanitasi_nyelvu?: string | null
    NemzetisegiNevelesOktatas?: string | null
    NemzetisegiNevelesOktatásFajtaja?: string | null
    nemzetisegiNyelv?: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: string | null
    sportosztaly?: string | null
    aranyjanostehetseggondozoprogram?: string | null
    arany_janos_kollegiumi_program?: string | null
    munkarend?: string | null
    alapadatok_id: string
    createAt?: Date | string
    createBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: string | null
    tanev_kezdete?: number
  }

  export type Tanugyi_AdatokUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
  }

  export type Tanugyi_AdatokUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type TableAccessListRelationFilter = {
    every?: TableAccessWhereInput
    some?: TableAccessWhereInput
    none?: TableAccessWhereInput
  }

  export type AlapadatokNullableScalarRelationFilter = {
    is?: AlapadatokWhereInput | null
    isNot?: AlapadatokWhereInput | null
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TableAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alapadatokId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    permissions?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alapadatokId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    alapadatokId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    permissions?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TableAccessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tableName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableAccessAvgOrderByAggregateInput = {
    access?: SortOrder
  }

  export type TableAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tableName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableAccessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tableName?: SortOrder
    access?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TableAccessSumOrderByAggregateInput = {
    access?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    body?: SortOrder
    query?: SortOrder
    headers?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    path?: SortOrder
    ip?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Felvettek_SzamaListRelationFilter = {
    every?: Felvettek_SzamaWhereInput
    some?: Felvettek_SzamaWhereInput
    none?: Felvettek_SzamaWhereInput
  }

  export type Tanar_LetszamListRelationFilter = {
    every?: Tanar_LetszamWhereInput
    some?: Tanar_LetszamWhereInput
    none?: Tanar_LetszamWhereInput
  }

  export type Tanugyi_AdatokListRelationFilter = {
    every?: Tanugyi_AdatokWhereInput
    some?: Tanugyi_AdatokWhereInput
    none?: Tanugyi_AdatokWhereInput
  }

  export type Tanulo_LetszamListRelationFilter = {
    every?: Tanulo_LetszamWhereInput
    some?: Tanulo_LetszamWhereInput
    none?: Tanulo_LetszamWhereInput
  }

  export type KompetenciaListRelationFilter = {
    every?: KompetenciaWhereInput
    some?: KompetenciaWhereInput
    none?: KompetenciaWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type Felvettek_SzamaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tanar_LetszamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tanugyi_AdatokOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Tanulo_LetszamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KompetenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
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
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
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
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type Tanulo_LetszamMinOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
    szakirany_id?: SortOrder
    szakma_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type Tanulo_LetszamSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    jogv_tipus?: SortOrder
    letszam?: SortOrder
  }

  export type Tanar_LetszamCountOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
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
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type Tanar_LetszamMinOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type Tanar_LetszamSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    letszam?: SortOrder
  }

  export type SzakiranyNullableScalarRelationFilter = {
    is?: SzakiranyWhereInput | null
    isNot?: SzakiranyWhereInput | null
  }

  export type Felvettek_SzamaCountOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    szakiranyId?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
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
    szakiranyId?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type Felvettek_SzamaMinOrderByAggregateInput = {
    id?: SortOrder
    alapadatok_id?: SortOrder
    tanev_kezdete?: SortOrder
    szakma_id?: SortOrder
    szakiranyId?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type Felvettek_SzamaSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
    jelentkezo_letszam?: SortOrder
    felveheto_letszam?: SortOrder
    felvett_letszam?: SortOrder
  }

  export type KompetenciaCountOrderByAggregateInput = {
    id?: SortOrder
    tanev_kezdete?: SortOrder
    mat_orsz_p?: SortOrder
    szoveg_orsz_p?: SortOrder
    mat_int_p?: SortOrder
    szoveg_int_p?: SortOrder
    kepzes_forma?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type KompetenciaAvgOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
  }

  export type KompetenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    tanev_kezdete?: SortOrder
    mat_orsz_p?: SortOrder
    szoveg_orsz_p?: SortOrder
    mat_int_p?: SortOrder
    szoveg_int_p?: SortOrder
    kepzes_forma?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type KompetenciaMinOrderByAggregateInput = {
    id?: SortOrder
    tanev_kezdete?: SortOrder
    mat_orsz_p?: SortOrder
    szoveg_orsz_p?: SortOrder
    mat_int_p?: SortOrder
    szoveg_int_p?: SortOrder
    kepzes_forma?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
  }

  export type KompetenciaSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
  }

  export type Tanugyi_AdatokCountOrderByAggregateInput = {
    id?: SortOrder
    elotag?: SortOrder
    vezeteknev?: SortOrder
    utonev?: SortOrder
    oktatasiAzonositoja?: SortOrder
    osztaly?: SortOrder
    szuletesiDatuma?: SortOrder
    anyjaSzuletesiDatuma?: SortOrder
    tanterv?: SortOrder
    naploSorszam?: SortOrder
    beiras_naplo_sorszam?: SortOrder
    felvetel_taneve?: SortOrder
    torzslapszam?: SortOrder
    tanulo_jogviszonya?: SortOrder
    jogviszony_kezdete?: SortOrder
    jogviszony_megszunesenek_varhato_datuma?: SortOrder
    jogviszonyátSzunetelteto?: SortOrder
    tankotelezettsegetTeljesito?: SortOrder
    tankotelezettségVege?: SortOrder
    bejaro?: SortOrder
    Szakmai_gyakorlaton_tartozkodik?: SortOrder
    Egyeni_munkarend?: SortOrder
    Egyeni_munkarend_oka?: SortOrder
    Egyeni_munkarend_kezdete?: SortOrder
    Egyeni_munkarend_vege?: SortOrder
    Vendegtanulo?: SortOrder
    tandijat_fizeto?: SortOrder
    teritesi_dijat_fizeto?: SortOrder
    tanuloszerzodeses?: SortOrder
    polgari_szerzodeses?: SortOrder
    iskolai_sportkorben_reszt_vevo_tanulo?: SortOrder
    evfolyamismetlo?: SortOrder
    elozo_intezmeny?: SortOrder
    osztaly1?: SortOrder
    evfolyam?: SortOrder
    bizonyitvany_sorszama?: SortOrder
    okleveles_technikus_képzes?: SortOrder
    uj_Szkt_agazat_tipusa?: SortOrder
    uj_szkt_szakma_tipusa?: SortOrder
    uj_szkt_szakmairany_tipusa?: SortOrder
    nkt_tanulmanyi_terulet?: SortOrder
    nkt_szakkepesites?: SortOrder
    nkt_szakirany?: SortOrder
    agazat_uj_szkt_reszszakmahoz?: SortOrder
    szakma_reszszakmahoz?: SortOrder
    reszszakma?: SortOrder
    agazat_tanulmanyi_terulet?: SortOrder
    szakmai_kepzes?: SortOrder
    agazati_alapoktatas_megnevezese?: SortOrder
    agazati_alapvizsga_eredmeny?: SortOrder
    agazati_alapvizsga_teljesitesenek_datuma?: SortOrder
    agazati_alapvizsga_eredmenye?: SortOrder
    agazati_alapvizsga_eredmenye_percent?: SortOrder
    szakkepzesi_munkaszerzodessel?: SortOrder
    Dualis_kepzohely_neve?: SortOrder
    Dualis_kepzohely_adoszama?: SortOrder
    kiemelten_tehetseges?: SortOrder
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: SortOrder
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: SortOrder
    egesz_napos_iskolai_oktatasban_reszesul?: SortOrder
    nyelvi_elokeszito?: SortOrder
    ket_tanitasi_nyelvu?: SortOrder
    NemzetisegiNevelesOktatas?: SortOrder
    NemzetisegiNevelesOktatásFajtaja?: SortOrder
    nemzetisegiNyelv?: SortOrder
    nemzetisegNyelvenFolyoSzakmaiOktatas?: SortOrder
    sportosztaly?: SortOrder
    aranyjanostehetseggondozoprogram?: SortOrder
    arany_janos_kollegiumi_program?: SortOrder
    munkarend?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: SortOrder
    tanev_kezdete?: SortOrder
  }

  export type Tanugyi_AdatokAvgOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
  }

  export type Tanugyi_AdatokMaxOrderByAggregateInput = {
    id?: SortOrder
    elotag?: SortOrder
    vezeteknev?: SortOrder
    utonev?: SortOrder
    oktatasiAzonositoja?: SortOrder
    osztaly?: SortOrder
    szuletesiDatuma?: SortOrder
    anyjaSzuletesiDatuma?: SortOrder
    tanterv?: SortOrder
    naploSorszam?: SortOrder
    beiras_naplo_sorszam?: SortOrder
    felvetel_taneve?: SortOrder
    torzslapszam?: SortOrder
    tanulo_jogviszonya?: SortOrder
    jogviszony_kezdete?: SortOrder
    jogviszony_megszunesenek_varhato_datuma?: SortOrder
    jogviszonyátSzunetelteto?: SortOrder
    tankotelezettsegetTeljesito?: SortOrder
    tankotelezettségVege?: SortOrder
    bejaro?: SortOrder
    Szakmai_gyakorlaton_tartozkodik?: SortOrder
    Egyeni_munkarend?: SortOrder
    Egyeni_munkarend_oka?: SortOrder
    Egyeni_munkarend_kezdete?: SortOrder
    Egyeni_munkarend_vege?: SortOrder
    Vendegtanulo?: SortOrder
    tandijat_fizeto?: SortOrder
    teritesi_dijat_fizeto?: SortOrder
    tanuloszerzodeses?: SortOrder
    polgari_szerzodeses?: SortOrder
    iskolai_sportkorben_reszt_vevo_tanulo?: SortOrder
    evfolyamismetlo?: SortOrder
    elozo_intezmeny?: SortOrder
    osztaly1?: SortOrder
    evfolyam?: SortOrder
    bizonyitvany_sorszama?: SortOrder
    okleveles_technikus_képzes?: SortOrder
    uj_Szkt_agazat_tipusa?: SortOrder
    uj_szkt_szakma_tipusa?: SortOrder
    uj_szkt_szakmairany_tipusa?: SortOrder
    nkt_tanulmanyi_terulet?: SortOrder
    nkt_szakkepesites?: SortOrder
    nkt_szakirany?: SortOrder
    agazat_uj_szkt_reszszakmahoz?: SortOrder
    szakma_reszszakmahoz?: SortOrder
    reszszakma?: SortOrder
    agazat_tanulmanyi_terulet?: SortOrder
    szakmai_kepzes?: SortOrder
    agazati_alapoktatas_megnevezese?: SortOrder
    agazati_alapvizsga_eredmeny?: SortOrder
    agazati_alapvizsga_teljesitesenek_datuma?: SortOrder
    agazati_alapvizsga_eredmenye?: SortOrder
    agazati_alapvizsga_eredmenye_percent?: SortOrder
    szakkepzesi_munkaszerzodessel?: SortOrder
    Dualis_kepzohely_neve?: SortOrder
    Dualis_kepzohely_adoszama?: SortOrder
    kiemelten_tehetseges?: SortOrder
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: SortOrder
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: SortOrder
    egesz_napos_iskolai_oktatasban_reszesul?: SortOrder
    nyelvi_elokeszito?: SortOrder
    ket_tanitasi_nyelvu?: SortOrder
    NemzetisegiNevelesOktatas?: SortOrder
    NemzetisegiNevelesOktatásFajtaja?: SortOrder
    nemzetisegiNyelv?: SortOrder
    nemzetisegNyelvenFolyoSzakmaiOktatas?: SortOrder
    sportosztaly?: SortOrder
    aranyjanostehetseggondozoprogram?: SortOrder
    arany_janos_kollegiumi_program?: SortOrder
    munkarend?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: SortOrder
    tanev_kezdete?: SortOrder
  }

  export type Tanugyi_AdatokMinOrderByAggregateInput = {
    id?: SortOrder
    elotag?: SortOrder
    vezeteknev?: SortOrder
    utonev?: SortOrder
    oktatasiAzonositoja?: SortOrder
    osztaly?: SortOrder
    szuletesiDatuma?: SortOrder
    anyjaSzuletesiDatuma?: SortOrder
    tanterv?: SortOrder
    naploSorszam?: SortOrder
    beiras_naplo_sorszam?: SortOrder
    felvetel_taneve?: SortOrder
    torzslapszam?: SortOrder
    tanulo_jogviszonya?: SortOrder
    jogviszony_kezdete?: SortOrder
    jogviszony_megszunesenek_varhato_datuma?: SortOrder
    jogviszonyátSzunetelteto?: SortOrder
    tankotelezettsegetTeljesito?: SortOrder
    tankotelezettségVege?: SortOrder
    bejaro?: SortOrder
    Szakmai_gyakorlaton_tartozkodik?: SortOrder
    Egyeni_munkarend?: SortOrder
    Egyeni_munkarend_oka?: SortOrder
    Egyeni_munkarend_kezdete?: SortOrder
    Egyeni_munkarend_vege?: SortOrder
    Vendegtanulo?: SortOrder
    tandijat_fizeto?: SortOrder
    teritesi_dijat_fizeto?: SortOrder
    tanuloszerzodeses?: SortOrder
    polgari_szerzodeses?: SortOrder
    iskolai_sportkorben_reszt_vevo_tanulo?: SortOrder
    evfolyamismetlo?: SortOrder
    elozo_intezmeny?: SortOrder
    osztaly1?: SortOrder
    evfolyam?: SortOrder
    bizonyitvany_sorszama?: SortOrder
    okleveles_technikus_képzes?: SortOrder
    uj_Szkt_agazat_tipusa?: SortOrder
    uj_szkt_szakma_tipusa?: SortOrder
    uj_szkt_szakmairany_tipusa?: SortOrder
    nkt_tanulmanyi_terulet?: SortOrder
    nkt_szakkepesites?: SortOrder
    nkt_szakirany?: SortOrder
    agazat_uj_szkt_reszszakmahoz?: SortOrder
    szakma_reszszakmahoz?: SortOrder
    reszszakma?: SortOrder
    agazat_tanulmanyi_terulet?: SortOrder
    szakmai_kepzes?: SortOrder
    agazati_alapoktatas_megnevezese?: SortOrder
    agazati_alapvizsga_eredmeny?: SortOrder
    agazati_alapvizsga_teljesitesenek_datuma?: SortOrder
    agazati_alapvizsga_eredmenye?: SortOrder
    agazati_alapvizsga_eredmenye_percent?: SortOrder
    szakkepzesi_munkaszerzodessel?: SortOrder
    Dualis_kepzohely_neve?: SortOrder
    Dualis_kepzohely_adoszama?: SortOrder
    kiemelten_tehetseges?: SortOrder
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: SortOrder
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: SortOrder
    egesz_napos_iskolai_oktatasban_reszesul?: SortOrder
    nyelvi_elokeszito?: SortOrder
    ket_tanitasi_nyelvu?: SortOrder
    NemzetisegiNevelesOktatas?: SortOrder
    NemzetisegiNevelesOktatásFajtaja?: SortOrder
    nemzetisegiNyelv?: SortOrder
    nemzetisegNyelvenFolyoSzakmaiOktatas?: SortOrder
    sportosztaly?: SortOrder
    aranyjanostehetseggondozoprogram?: SortOrder
    arany_janos_kollegiumi_program?: SortOrder
    munkarend?: SortOrder
    alapadatok_id?: SortOrder
    createAt?: SortOrder
    createBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: SortOrder
    tanev_kezdete?: SortOrder
  }

  export type Tanugyi_AdatokSumOrderByAggregateInput = {
    tanev_kezdete?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TableAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<TableAccessCreateWithoutUserInput, TableAccessUncheckedCreateWithoutUserInput> | TableAccessCreateWithoutUserInput[] | TableAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TableAccessCreateOrConnectWithoutUserInput | TableAccessCreateOrConnectWithoutUserInput[]
    createMany?: TableAccessCreateManyUserInputEnvelope
    connect?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
  }

  export type AlapadatokCreateNestedOneWithoutUsersInput = {
    create?: XOR<AlapadatokCreateWithoutUsersInput, AlapadatokUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutUsersInput
    connect?: AlapadatokWhereUniqueInput
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type TableAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TableAccessCreateWithoutUserInput, TableAccessUncheckedCreateWithoutUserInput> | TableAccessCreateWithoutUserInput[] | TableAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TableAccessCreateOrConnectWithoutUserInput | TableAccessCreateOrConnectWithoutUserInput[]
    createMany?: TableAccessCreateManyUserInputEnvelope
    connect?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TableAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<TableAccessCreateWithoutUserInput, TableAccessUncheckedCreateWithoutUserInput> | TableAccessCreateWithoutUserInput[] | TableAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TableAccessCreateOrConnectWithoutUserInput | TableAccessCreateOrConnectWithoutUserInput[]
    upsert?: TableAccessUpsertWithWhereUniqueWithoutUserInput | TableAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TableAccessCreateManyUserInputEnvelope
    set?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    disconnect?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    delete?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    connect?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    update?: TableAccessUpdateWithWhereUniqueWithoutUserInput | TableAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TableAccessUpdateManyWithWhereWithoutUserInput | TableAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TableAccessScalarWhereInput | TableAccessScalarWhereInput[]
  }

  export type AlapadatokUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AlapadatokCreateWithoutUsersInput, AlapadatokUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutUsersInput
    upsert?: AlapadatokUpsertWithoutUsersInput
    disconnect?: AlapadatokWhereInput | boolean
    delete?: AlapadatokWhereInput | boolean
    connect?: AlapadatokWhereUniqueInput
    update?: XOR<XOR<AlapadatokUpdateToOneWithWhereWithoutUsersInput, AlapadatokUpdateWithoutUsersInput>, AlapadatokUncheckedUpdateWithoutUsersInput>
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type TableAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TableAccessCreateWithoutUserInput, TableAccessUncheckedCreateWithoutUserInput> | TableAccessCreateWithoutUserInput[] | TableAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TableAccessCreateOrConnectWithoutUserInput | TableAccessCreateOrConnectWithoutUserInput[]
    upsert?: TableAccessUpsertWithWhereUniqueWithoutUserInput | TableAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TableAccessCreateManyUserInputEnvelope
    set?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    disconnect?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    delete?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    connect?: TableAccessWhereUniqueInput | TableAccessWhereUniqueInput[]
    update?: TableAccessUpdateWithWhereUniqueWithoutUserInput | TableAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TableAccessUpdateManyWithWhereWithoutUserInput | TableAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TableAccessScalarWhereInput | TableAccessScalarWhereInput[]
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTableAccessInput = {
    create?: XOR<UserCreateWithoutTableAccessInput, UserUncheckedCreateWithoutTableAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutTableAccessInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutTableAccessNestedInput = {
    create?: XOR<UserCreateWithoutTableAccessInput, UserUncheckedCreateWithoutTableAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutTableAccessInput
    upsert?: UserUpsertWithoutTableAccessInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTableAccessInput, UserUpdateWithoutTableAccessInput>, UserUncheckedUpdateWithoutTableAccessInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput> | Felvettek_SzamaCreateWithoutAlapadatokInput[] | Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput | Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Felvettek_SzamaCreateManyAlapadatokInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanar_LetszamCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanar_LetszamCreateWithoutAlapadatokInput[] | Tanar_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanar_LetszamCreateOrConnectWithoutAlapadatokInput | Tanar_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanar_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
  }

  export type Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanugyi_AdatokCreateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput> | Tanugyi_AdatokCreateWithoutAlapadatokInput[] | Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput | Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanugyi_AdatokCreateManyAlapadatokInputEnvelope
    connect?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
  }

  export type Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanulo_LetszamCreateWithoutAlapadatokInput[] | Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput | Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanulo_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type KompetenciaCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<KompetenciaCreateWithoutAlapadatokInput, KompetenciaUncheckedCreateWithoutAlapadatokInput> | KompetenciaCreateWithoutAlapadatokInput[] | KompetenciaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: KompetenciaCreateOrConnectWithoutAlapadatokInput | KompetenciaCreateOrConnectWithoutAlapadatokInput[]
    createMany?: KompetenciaCreateManyAlapadatokInputEnvelope
    connect?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<UserCreateWithoutAlapadatokInput, UserUncheckedCreateWithoutAlapadatokInput> | UserCreateWithoutAlapadatokInput[] | UserUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAlapadatokInput | UserCreateOrConnectWithoutAlapadatokInput[]
    createMany?: UserCreateManyAlapadatokInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput> | Felvettek_SzamaCreateWithoutAlapadatokInput[] | Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput | Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Felvettek_SzamaCreateManyAlapadatokInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanar_LetszamCreateWithoutAlapadatokInput[] | Tanar_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanar_LetszamCreateOrConnectWithoutAlapadatokInput | Tanar_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanar_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanar_LetszamWhereUniqueInput | Tanar_LetszamWhereUniqueInput[]
  }

  export type Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanugyi_AdatokCreateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput> | Tanugyi_AdatokCreateWithoutAlapadatokInput[] | Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput | Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanugyi_AdatokCreateManyAlapadatokInputEnvelope
    connect?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
  }

  export type Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput> | Tanulo_LetszamCreateWithoutAlapadatokInput[] | Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput | Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput[]
    createMany?: Tanulo_LetszamCreateManyAlapadatokInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<KompetenciaCreateWithoutAlapadatokInput, KompetenciaUncheckedCreateWithoutAlapadatokInput> | KompetenciaCreateWithoutAlapadatokInput[] | KompetenciaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: KompetenciaCreateOrConnectWithoutAlapadatokInput | KompetenciaCreateOrConnectWithoutAlapadatokInput[]
    createMany?: KompetenciaCreateManyAlapadatokInputEnvelope
    connect?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAlapadatokInput = {
    create?: XOR<UserCreateWithoutAlapadatokInput, UserUncheckedCreateWithoutAlapadatokInput> | UserCreateWithoutAlapadatokInput[] | UserUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAlapadatokInput | UserCreateOrConnectWithoutAlapadatokInput[]
    createMany?: UserCreateManyAlapadatokInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
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

  export type Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Tanugyi_AdatokCreateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput> | Tanugyi_AdatokCreateWithoutAlapadatokInput[] | Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput | Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Tanugyi_AdatokUpsertWithWhereUniqueWithoutAlapadatokInput | Tanugyi_AdatokUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Tanugyi_AdatokCreateManyAlapadatokInputEnvelope
    set?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    disconnect?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    delete?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    connect?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    update?: Tanugyi_AdatokUpdateWithWhereUniqueWithoutAlapadatokInput | Tanugyi_AdatokUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Tanugyi_AdatokUpdateManyWithWhereWithoutAlapadatokInput | Tanugyi_AdatokUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Tanugyi_AdatokScalarWhereInput | Tanugyi_AdatokScalarWhereInput[]
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

  export type KompetenciaUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<KompetenciaCreateWithoutAlapadatokInput, KompetenciaUncheckedCreateWithoutAlapadatokInput> | KompetenciaCreateWithoutAlapadatokInput[] | KompetenciaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: KompetenciaCreateOrConnectWithoutAlapadatokInput | KompetenciaCreateOrConnectWithoutAlapadatokInput[]
    upsert?: KompetenciaUpsertWithWhereUniqueWithoutAlapadatokInput | KompetenciaUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: KompetenciaCreateManyAlapadatokInputEnvelope
    set?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    disconnect?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    delete?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    connect?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    update?: KompetenciaUpdateWithWhereUniqueWithoutAlapadatokInput | KompetenciaUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: KompetenciaUpdateManyWithWhereWithoutAlapadatokInput | KompetenciaUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: KompetenciaScalarWhereInput | KompetenciaScalarWhereInput[]
  }

  export type UserUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<UserCreateWithoutAlapadatokInput, UserUncheckedCreateWithoutAlapadatokInput> | UserCreateWithoutAlapadatokInput[] | UserUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAlapadatokInput | UserCreateOrConnectWithoutAlapadatokInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAlapadatokInput | UserUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: UserCreateManyAlapadatokInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAlapadatokInput | UserUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAlapadatokInput | UserUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
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

  export type Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<Tanugyi_AdatokCreateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput> | Tanugyi_AdatokCreateWithoutAlapadatokInput[] | Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput | Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput[]
    upsert?: Tanugyi_AdatokUpsertWithWhereUniqueWithoutAlapadatokInput | Tanugyi_AdatokUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: Tanugyi_AdatokCreateManyAlapadatokInputEnvelope
    set?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    disconnect?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    delete?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    connect?: Tanugyi_AdatokWhereUniqueInput | Tanugyi_AdatokWhereUniqueInput[]
    update?: Tanugyi_AdatokUpdateWithWhereUniqueWithoutAlapadatokInput | Tanugyi_AdatokUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: Tanugyi_AdatokUpdateManyWithWhereWithoutAlapadatokInput | Tanugyi_AdatokUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: Tanugyi_AdatokScalarWhereInput | Tanugyi_AdatokScalarWhereInput[]
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

  export type KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<KompetenciaCreateWithoutAlapadatokInput, KompetenciaUncheckedCreateWithoutAlapadatokInput> | KompetenciaCreateWithoutAlapadatokInput[] | KompetenciaUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: KompetenciaCreateOrConnectWithoutAlapadatokInput | KompetenciaCreateOrConnectWithoutAlapadatokInput[]
    upsert?: KompetenciaUpsertWithWhereUniqueWithoutAlapadatokInput | KompetenciaUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: KompetenciaCreateManyAlapadatokInputEnvelope
    set?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    disconnect?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    delete?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    connect?: KompetenciaWhereUniqueInput | KompetenciaWhereUniqueInput[]
    update?: KompetenciaUpdateWithWhereUniqueWithoutAlapadatokInput | KompetenciaUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: KompetenciaUpdateManyWithWhereWithoutAlapadatokInput | KompetenciaUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: KompetenciaScalarWhereInput | KompetenciaScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAlapadatokNestedInput = {
    create?: XOR<UserCreateWithoutAlapadatokInput, UserUncheckedCreateWithoutAlapadatokInput> | UserCreateWithoutAlapadatokInput[] | UserUncheckedCreateWithoutAlapadatokInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAlapadatokInput | UserCreateOrConnectWithoutAlapadatokInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAlapadatokInput | UserUpsertWithWhereUniqueWithoutAlapadatokInput[]
    createMany?: UserCreateManyAlapadatokInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAlapadatokInput | UserUpdateWithWhereUniqueWithoutAlapadatokInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAlapadatokInput | UserUpdateManyWithWhereWithoutAlapadatokInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type Tanulo_LetszamCreateNestedManyWithoutSzakiranyInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput> | Tanulo_LetszamCreateWithoutSzakiranyInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput | Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput[]
    createMany?: Tanulo_LetszamCreateManySzakiranyInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Felvettek_SzamaCreateNestedManyWithoutSzakiranyInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakiranyInput, Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput> | Felvettek_SzamaCreateWithoutSzakiranyInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput | Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput[]
    createMany?: Felvettek_SzamaCreateManySzakiranyInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakiranyInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput> | Tanulo_LetszamCreateWithoutSzakiranyInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput | Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput[]
    createMany?: Tanulo_LetszamCreateManySzakiranyInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
  }

  export type Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakiranyInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakiranyInput, Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput> | Felvettek_SzamaCreateWithoutSzakiranyInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput | Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput[]
    createMany?: Felvettek_SzamaCreateManySzakiranyInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
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

  export type Felvettek_SzamaUpdateManyWithoutSzakiranyNestedInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakiranyInput, Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput> | Felvettek_SzamaCreateWithoutSzakiranyInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput | Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput[]
    upsert?: Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakiranyInput | Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakiranyInput[]
    createMany?: Felvettek_SzamaCreateManySzakiranyInputEnvelope
    set?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    disconnect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    delete?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    update?: Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakiranyInput | Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakiranyInput[]
    updateMany?: Felvettek_SzamaUpdateManyWithWhereWithoutSzakiranyInput | Felvettek_SzamaUpdateManyWithWhereWithoutSzakiranyInput[]
    deleteMany?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
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

  export type Felvettek_SzamaUncheckedUpdateManyWithoutSzakiranyNestedInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakiranyInput, Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput> | Felvettek_SzamaCreateWithoutSzakiranyInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput | Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput[]
    upsert?: Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakiranyInput | Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakiranyInput[]
    createMany?: Felvettek_SzamaCreateManySzakiranyInputEnvelope
    set?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    disconnect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    delete?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
    update?: Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakiranyInput | Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakiranyInput[]
    updateMany?: Felvettek_SzamaUpdateManyWithWhereWithoutSzakiranyInput | Felvettek_SzamaUpdateManyWithWhereWithoutSzakiranyInput[]
    deleteMany?: Felvettek_SzamaScalarWhereInput | Felvettek_SzamaScalarWhereInput[]
  }

  export type Felvettek_SzamaCreateNestedManyWithoutSzakmaInput = {
    create?: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput> | Felvettek_SzamaCreateWithoutSzakmaInput[] | Felvettek_SzamaUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Felvettek_SzamaCreateOrConnectWithoutSzakmaInput | Felvettek_SzamaCreateOrConnectWithoutSzakmaInput[]
    createMany?: Felvettek_SzamaCreateManySzakmaInputEnvelope
    connect?: Felvettek_SzamaWhereUniqueInput | Felvettek_SzamaWhereUniqueInput[]
  }

  export type Tanulo_LetszamCreateNestedManyWithoutSzakmaInput = {
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

  export type Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakmaInput = {
    create?: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput> | Tanulo_LetszamCreateWithoutSzakmaInput[] | Tanulo_LetszamUncheckedCreateWithoutSzakmaInput[]
    connectOrCreate?: Tanulo_LetszamCreateOrConnectWithoutSzakmaInput | Tanulo_LetszamCreateOrConnectWithoutSzakmaInput[]
    createMany?: Tanulo_LetszamCreateManySzakmaInputEnvelope
    connect?: Tanulo_LetszamWhereUniqueInput | Tanulo_LetszamWhereUniqueInput[]
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

  export type SzakiranyCreateNestedOneWithoutFelvettek_szamaInput = {
    create?: XOR<SzakiranyCreateWithoutFelvettek_szamaInput, SzakiranyUncheckedCreateWithoutFelvettek_szamaInput>
    connectOrCreate?: SzakiranyCreateOrConnectWithoutFelvettek_szamaInput
    connect?: SzakiranyWhereUniqueInput
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

  export type SzakiranyUpdateOneWithoutFelvettek_szamaNestedInput = {
    create?: XOR<SzakiranyCreateWithoutFelvettek_szamaInput, SzakiranyUncheckedCreateWithoutFelvettek_szamaInput>
    connectOrCreate?: SzakiranyCreateOrConnectWithoutFelvettek_szamaInput
    upsert?: SzakiranyUpsertWithoutFelvettek_szamaInput
    disconnect?: SzakiranyWhereInput | boolean
    delete?: SzakiranyWhereInput | boolean
    connect?: SzakiranyWhereUniqueInput
    update?: XOR<XOR<SzakiranyUpdateToOneWithWhereWithoutFelvettek_szamaInput, SzakiranyUpdateWithoutFelvettek_szamaInput>, SzakiranyUncheckedUpdateWithoutFelvettek_szamaInput>
  }

  export type AlapadatokCreateNestedOneWithoutKompetenciaInput = {
    create?: XOR<AlapadatokCreateWithoutKompetenciaInput, AlapadatokUncheckedCreateWithoutKompetenciaInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutKompetenciaInput
    connect?: AlapadatokWhereUniqueInput
  }

  export type AlapadatokUpdateOneRequiredWithoutKompetenciaNestedInput = {
    create?: XOR<AlapadatokCreateWithoutKompetenciaInput, AlapadatokUncheckedCreateWithoutKompetenciaInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutKompetenciaInput
    upsert?: AlapadatokUpsertWithoutKompetenciaInput
    connect?: AlapadatokWhereUniqueInput
    update?: XOR<XOR<AlapadatokUpdateToOneWithWhereWithoutKompetenciaInput, AlapadatokUpdateWithoutKompetenciaInput>, AlapadatokUncheckedUpdateWithoutKompetenciaInput>
  }

  export type AlapadatokCreateNestedOneWithoutTanugyiAdatokInput = {
    create?: XOR<AlapadatokCreateWithoutTanugyiAdatokInput, AlapadatokUncheckedCreateWithoutTanugyiAdatokInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutTanugyiAdatokInput
    connect?: AlapadatokWhereUniqueInput
  }

  export type AlapadatokUpdateOneRequiredWithoutTanugyiAdatokNestedInput = {
    create?: XOR<AlapadatokCreateWithoutTanugyiAdatokInput, AlapadatokUncheckedCreateWithoutTanugyiAdatokInput>
    connectOrCreate?: AlapadatokCreateOrConnectWithoutTanugyiAdatokInput
    upsert?: AlapadatokUpsertWithoutTanugyiAdatokInput
    connect?: AlapadatokWhereUniqueInput
    update?: XOR<XOR<AlapadatokUpdateToOneWithWhereWithoutTanugyiAdatokInput, AlapadatokUpdateWithoutTanugyiAdatokInput>, AlapadatokUncheckedUpdateWithoutTanugyiAdatokInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TableAccessCreateWithoutUserInput = {
    id?: string
    tableName: string
    access?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TableAccessUncheckedCreateWithoutUserInput = {
    id?: string
    tableName: string
    access?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TableAccessCreateOrConnectWithoutUserInput = {
    where: TableAccessWhereUniqueInput
    create: XOR<TableAccessCreateWithoutUserInput, TableAccessUncheckedCreateWithoutUserInput>
  }

  export type TableAccessCreateManyUserInputEnvelope = {
    data: TableAccessCreateManyUserInput | TableAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlapadatokCreateWithoutUsersInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutUsersInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutUsersInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutUsersInput, AlapadatokUncheckedCreateWithoutUsersInput>
  }

  export type LogCreateWithoutUserInput = {
    id?: string
    method: string
    path: string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    userAgent: string
    createdAt?: Date | string
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: string
    method: string
    path: string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    userAgent: string
    createdAt?: Date | string
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TableAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: TableAccessWhereUniqueInput
    update: XOR<TableAccessUpdateWithoutUserInput, TableAccessUncheckedUpdateWithoutUserInput>
    create: XOR<TableAccessCreateWithoutUserInput, TableAccessUncheckedCreateWithoutUserInput>
  }

  export type TableAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: TableAccessWhereUniqueInput
    data: XOR<TableAccessUpdateWithoutUserInput, TableAccessUncheckedUpdateWithoutUserInput>
  }

  export type TableAccessUpdateManyWithWhereWithoutUserInput = {
    where: TableAccessScalarWhereInput
    data: XOR<TableAccessUpdateManyMutationInput, TableAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type TableAccessScalarWhereInput = {
    AND?: TableAccessScalarWhereInput | TableAccessScalarWhereInput[]
    OR?: TableAccessScalarWhereInput[]
    NOT?: TableAccessScalarWhereInput | TableAccessScalarWhereInput[]
    id?: UuidFilter<"TableAccess"> | string
    userId?: UuidNullableFilter<"TableAccess"> | string | null
    tableName?: StringFilter<"TableAccess"> | string
    access?: IntFilter<"TableAccess"> | number
    createdAt?: DateTimeFilter<"TableAccess"> | Date | string
    updatedAt?: DateTimeNullableFilter<"TableAccess"> | Date | string | null
  }

  export type AlapadatokUpsertWithoutUsersInput = {
    update: XOR<AlapadatokUpdateWithoutUsersInput, AlapadatokUncheckedUpdateWithoutUsersInput>
    create: XOR<AlapadatokCreateWithoutUsersInput, AlapadatokUncheckedCreateWithoutUsersInput>
    where?: AlapadatokWhereInput
  }

  export type AlapadatokUpdateToOneWithWhereWithoutUsersInput = {
    where?: AlapadatokWhereInput
    data: XOR<AlapadatokUpdateWithoutUsersInput, AlapadatokUncheckedUpdateWithoutUsersInput>
  }

  export type AlapadatokUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: UuidFilter<"Log"> | string
    userId?: UuidNullableFilter<"Log"> | string | null
    method?: StringFilter<"Log"> | string
    path?: StringFilter<"Log"> | string
    body?: JsonNullableFilter<"Log">
    query?: JsonNullableFilter<"Log">
    headers?: JsonNullableFilter<"Log">
    ip?: StringFilter<"Log"> | string
    userAgent?: StringFilter<"Log"> | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
  }

  export type UserCreateWithoutTableAccessInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alapadatok?: AlapadatokCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTableAccessInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alapadatokId?: string | null
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTableAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTableAccessInput, UserUncheckedCreateWithoutTableAccessInput>
  }

  export type UserUpsertWithoutTableAccessInput = {
    update: XOR<UserUpdateWithoutTableAccessInput, UserUncheckedUpdateWithoutTableAccessInput>
    create: XOR<UserCreateWithoutTableAccessInput, UserUncheckedCreateWithoutTableAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTableAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTableAccessInput, UserUncheckedUpdateWithoutTableAccessInput>
  }

  export type UserUpdateWithoutTableAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alapadatok?: AlapadatokUpdateOneWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTableAccessInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alapadatokId?: NullableStringFieldUpdateOperationsInput | string | null
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tableAccess?: TableAccessCreateNestedManyWithoutUserInput
    alapadatok?: AlapadatokCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    alapadatokId?: string | null
    tableAccess?: TableAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tableAccess?: TableAccessUpdateManyWithoutUserNestedInput
    alapadatok?: AlapadatokUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    alapadatokId?: NullableStringFieldUpdateOperationsInput | string | null
    tableAccess?: TableAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Felvettek_SzamaCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    szakma: SzakmaCreateNestedOneWithoutFelvettek_szamaInput
    szakirany?: SzakiranyCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    szakma_id: string
    szakiranyId?: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaCreateOrConnectWithoutAlapadatokInput = {
    where: Felvettek_SzamaWhereUniqueInput
    create: XOR<Felvettek_SzamaCreateWithoutAlapadatokInput, Felvettek_SzamaUncheckedCreateWithoutAlapadatokInput>
  }

  export type Felvettek_SzamaCreateManyAlapadatokInputEnvelope = {
    data: Felvettek_SzamaCreateManyAlapadatokInput | Felvettek_SzamaCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type Tanar_LetszamCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanar_LetszamUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanar_LetszamCreateOrConnectWithoutAlapadatokInput = {
    where: Tanar_LetszamWhereUniqueInput
    create: XOR<Tanar_LetszamCreateWithoutAlapadatokInput, Tanar_LetszamUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanar_LetszamCreateManyAlapadatokInputEnvelope = {
    data: Tanar_LetszamCreateManyAlapadatokInput | Tanar_LetszamCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type Tanugyi_AdatokCreateWithoutAlapadatokInput = {
    id?: string
    elotag?: string | null
    vezeteknev?: string | null
    utonev?: string | null
    oktatasiAzonositoja?: string | null
    osztaly?: string | null
    szuletesiDatuma?: string | null
    anyjaSzuletesiDatuma?: string | null
    tanterv?: string | null
    naploSorszam?: string | null
    beiras_naplo_sorszam?: string | null
    felvetel_taneve?: string | null
    torzslapszam?: string | null
    tanulo_jogviszonya?: string | null
    jogviszony_kezdete?: string | null
    jogviszony_megszunesenek_varhato_datuma?: string | null
    jogviszonyátSzunetelteto?: string | null
    tankotelezettsegetTeljesito?: string | null
    tankotelezettségVege?: string | null
    bejaro?: string | null
    Szakmai_gyakorlaton_tartozkodik?: string | null
    Egyeni_munkarend?: string | null
    Egyeni_munkarend_oka?: string | null
    Egyeni_munkarend_kezdete?: string | null
    Egyeni_munkarend_vege?: string | null
    Vendegtanulo?: string | null
    tandijat_fizeto?: string | null
    teritesi_dijat_fizeto?: string | null
    tanuloszerzodeses?: string | null
    polgari_szerzodeses?: string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: string | null
    evfolyamismetlo?: string | null
    elozo_intezmeny?: string | null
    osztaly1?: string | null
    evfolyam?: string | null
    bizonyitvany_sorszama?: string | null
    okleveles_technikus_képzes?: string | null
    uj_Szkt_agazat_tipusa?: string | null
    uj_szkt_szakma_tipusa?: string | null
    uj_szkt_szakmairany_tipusa?: string | null
    nkt_tanulmanyi_terulet?: string | null
    nkt_szakkepesites?: string | null
    nkt_szakirany?: string | null
    agazat_uj_szkt_reszszakmahoz?: string | null
    szakma_reszszakmahoz?: string | null
    reszszakma?: string | null
    agazat_tanulmanyi_terulet?: string | null
    szakmai_kepzes?: string | null
    agazati_alapoktatas_megnevezese?: string | null
    agazati_alapvizsga_eredmeny?: string | null
    agazati_alapvizsga_teljesitesenek_datuma?: string | null
    agazati_alapvizsga_eredmenye?: string | null
    agazati_alapvizsga_eredmenye_percent?: string | null
    szakkepzesi_munkaszerzodessel?: string | null
    Dualis_kepzohely_neve?: string | null
    Dualis_kepzohely_adoszama?: string | null
    kiemelten_tehetseges?: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: string | null
    egesz_napos_iskolai_oktatasban_reszesul?: string | null
    nyelvi_elokeszito?: string | null
    ket_tanitasi_nyelvu?: string | null
    NemzetisegiNevelesOktatas?: string | null
    NemzetisegiNevelesOktatásFajtaja?: string | null
    nemzetisegiNyelv?: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: string | null
    sportosztaly?: string | null
    aranyjanostehetseggondozoprogram?: string | null
    arany_janos_kollegiumi_program?: string | null
    munkarend?: string | null
    createAt?: Date | string
    createBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: string | null
    tanev_kezdete?: number
  }

  export type Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    elotag?: string | null
    vezeteknev?: string | null
    utonev?: string | null
    oktatasiAzonositoja?: string | null
    osztaly?: string | null
    szuletesiDatuma?: string | null
    anyjaSzuletesiDatuma?: string | null
    tanterv?: string | null
    naploSorszam?: string | null
    beiras_naplo_sorszam?: string | null
    felvetel_taneve?: string | null
    torzslapszam?: string | null
    tanulo_jogviszonya?: string | null
    jogviszony_kezdete?: string | null
    jogviszony_megszunesenek_varhato_datuma?: string | null
    jogviszonyátSzunetelteto?: string | null
    tankotelezettsegetTeljesito?: string | null
    tankotelezettségVege?: string | null
    bejaro?: string | null
    Szakmai_gyakorlaton_tartozkodik?: string | null
    Egyeni_munkarend?: string | null
    Egyeni_munkarend_oka?: string | null
    Egyeni_munkarend_kezdete?: string | null
    Egyeni_munkarend_vege?: string | null
    Vendegtanulo?: string | null
    tandijat_fizeto?: string | null
    teritesi_dijat_fizeto?: string | null
    tanuloszerzodeses?: string | null
    polgari_szerzodeses?: string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: string | null
    evfolyamismetlo?: string | null
    elozo_intezmeny?: string | null
    osztaly1?: string | null
    evfolyam?: string | null
    bizonyitvany_sorszama?: string | null
    okleveles_technikus_képzes?: string | null
    uj_Szkt_agazat_tipusa?: string | null
    uj_szkt_szakma_tipusa?: string | null
    uj_szkt_szakmairany_tipusa?: string | null
    nkt_tanulmanyi_terulet?: string | null
    nkt_szakkepesites?: string | null
    nkt_szakirany?: string | null
    agazat_uj_szkt_reszszakmahoz?: string | null
    szakma_reszszakmahoz?: string | null
    reszszakma?: string | null
    agazat_tanulmanyi_terulet?: string | null
    szakmai_kepzes?: string | null
    agazati_alapoktatas_megnevezese?: string | null
    agazati_alapvizsga_eredmeny?: string | null
    agazati_alapvizsga_teljesitesenek_datuma?: string | null
    agazati_alapvizsga_eredmenye?: string | null
    agazati_alapvizsga_eredmenye_percent?: string | null
    szakkepzesi_munkaszerzodessel?: string | null
    Dualis_kepzohely_neve?: string | null
    Dualis_kepzohely_adoszama?: string | null
    kiemelten_tehetseges?: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: string | null
    egesz_napos_iskolai_oktatasban_reszesul?: string | null
    nyelvi_elokeszito?: string | null
    ket_tanitasi_nyelvu?: string | null
    NemzetisegiNevelesOktatas?: string | null
    NemzetisegiNevelesOktatásFajtaja?: string | null
    nemzetisegiNyelv?: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: string | null
    sportosztaly?: string | null
    aranyjanostehetseggondozoprogram?: string | null
    arany_janos_kollegiumi_program?: string | null
    munkarend?: string | null
    createAt?: Date | string
    createBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: string | null
    tanev_kezdete?: number
  }

  export type Tanugyi_AdatokCreateOrConnectWithoutAlapadatokInput = {
    where: Tanugyi_AdatokWhereUniqueInput
    create: XOR<Tanugyi_AdatokCreateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanugyi_AdatokCreateManyAlapadatokInputEnvelope = {
    data: Tanugyi_AdatokCreateManyAlapadatokInput | Tanugyi_AdatokCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type Tanulo_LetszamCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
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
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamCreateOrConnectWithoutAlapadatokInput = {
    where: Tanulo_LetszamWhereUniqueInput
    create: XOR<Tanulo_LetszamCreateWithoutAlapadatokInput, Tanulo_LetszamUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanulo_LetszamCreateManyAlapadatokInputEnvelope = {
    data: Tanulo_LetszamCreateManyAlapadatokInput | Tanulo_LetszamCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type KompetenciaCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete?: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type KompetenciaUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    tanev_kezdete?: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type KompetenciaCreateOrConnectWithoutAlapadatokInput = {
    where: KompetenciaWhereUniqueInput
    create: XOR<KompetenciaCreateWithoutAlapadatokInput, KompetenciaUncheckedCreateWithoutAlapadatokInput>
  }

  export type KompetenciaCreateManyAlapadatokInputEnvelope = {
    data: KompetenciaCreateManyAlapadatokInput | KompetenciaCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAlapadatokInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tableAccess?: TableAccessCreateNestedManyWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlapadatokInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    tableAccess?: TableAccessUncheckedCreateNestedManyWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlapadatokInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlapadatokInput, UserUncheckedCreateWithoutAlapadatokInput>
  }

  export type UserCreateManyAlapadatokInputEnvelope = {
    data: UserCreateManyAlapadatokInput | UserCreateManyAlapadatokInput[]
    skipDuplicates?: boolean
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
    szakiranyId?: UuidNullableFilter<"Felvettek_Szama"> | string | null
    jelentkezo_letszam?: IntFilter<"Felvettek_Szama"> | number
    felveheto_letszam?: IntFilter<"Felvettek_Szama"> | number
    felvett_letszam?: IntFilter<"Felvettek_Szama"> | number
    createAt?: DateTimeFilter<"Felvettek_Szama"> | Date | string
    createBy?: StringNullableFilter<"Felvettek_Szama"> | string | null
    updatedAt?: DateTimeNullableFilter<"Felvettek_Szama"> | Date | string | null
    updatedBy?: StringNullableFilter<"Felvettek_Szama"> | string | null
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
    createAt?: DateTimeFilter<"Tanar_Letszam"> | Date | string
    createBy?: StringNullableFilter<"Tanar_Letszam"> | string | null
    updatedAt?: DateTimeNullableFilter<"Tanar_Letszam"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanar_Letszam"> | string | null
  }

  export type Tanugyi_AdatokUpsertWithWhereUniqueWithoutAlapadatokInput = {
    where: Tanugyi_AdatokWhereUniqueInput
    update: XOR<Tanugyi_AdatokUpdateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedUpdateWithoutAlapadatokInput>
    create: XOR<Tanugyi_AdatokCreateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedCreateWithoutAlapadatokInput>
  }

  export type Tanugyi_AdatokUpdateWithWhereUniqueWithoutAlapadatokInput = {
    where: Tanugyi_AdatokWhereUniqueInput
    data: XOR<Tanugyi_AdatokUpdateWithoutAlapadatokInput, Tanugyi_AdatokUncheckedUpdateWithoutAlapadatokInput>
  }

  export type Tanugyi_AdatokUpdateManyWithWhereWithoutAlapadatokInput = {
    where: Tanugyi_AdatokScalarWhereInput
    data: XOR<Tanugyi_AdatokUpdateManyMutationInput, Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokInput>
  }

  export type Tanugyi_AdatokScalarWhereInput = {
    AND?: Tanugyi_AdatokScalarWhereInput | Tanugyi_AdatokScalarWhereInput[]
    OR?: Tanugyi_AdatokScalarWhereInput[]
    NOT?: Tanugyi_AdatokScalarWhereInput | Tanugyi_AdatokScalarWhereInput[]
    id?: UuidFilter<"Tanugyi_Adatok"> | string
    elotag?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    vezeteknev?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    utonev?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    oktatasiAzonositoja?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    osztaly?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szuletesiDatuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    anyjaSzuletesiDatuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanterv?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    naploSorszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    beiras_naplo_sorszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    felvetel_taneve?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    torzslapszam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanulo_jogviszonya?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_kezdete?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszony_megszunesenek_varhato_datuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    jogviszonyátSzunetelteto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettsegetTeljesito?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tankotelezettségVege?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    bejaro?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Szakmai_gyakorlaton_tartozkodik?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_oka?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_kezdete?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Egyeni_munkarend_vege?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Vendegtanulo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tandijat_fizeto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    teritesi_dijat_fizeto?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanuloszerzodeses?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    polgari_szerzodeses?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    evfolyamismetlo?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    elozo_intezmeny?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    osztaly1?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    evfolyam?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    bizonyitvany_sorszama?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    okleveles_technikus_képzes?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_Szkt_agazat_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakma_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    uj_szkt_szakmairany_tipusa?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_tanulmanyi_terulet?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakkepesites?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nkt_szakirany?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazat_uj_szkt_reszszakmahoz?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakma_reszszakmahoz?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    reszszakma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazat_tanulmanyi_terulet?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakmai_kepzes?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapoktatas_megnevezese?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmeny?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    agazati_alapvizsga_eredmenye_percent?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szakkepzesi_munkaszerzodessel?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_neve?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    Dualis_kepzohely_adoszama?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    kiemelten_tehetseges?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nyelvi_elokeszito?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    ket_tanitasi_nyelvu?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatas?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    NemzetisegiNevelesOktatásFajtaja?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegiNyelv?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    sportosztaly?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    aranyjanostehetseggondozoprogram?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    arany_janos_kollegiumi_program?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    munkarend?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    alapadatok_id?: UuidFilter<"Tanugyi_Adatok"> | string
    createAt?: DateTimeFilter<"Tanugyi_Adatok"> | Date | string
    createBy?: StringFilter<"Tanugyi_Adatok"> | string
    updatedAt?: DateTimeNullableFilter<"Tanugyi_Adatok"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: StringNullableFilter<"Tanugyi_Adatok"> | string | null
    tanev_kezdete?: IntFilter<"Tanugyi_Adatok"> | number
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
    createAt?: DateTimeFilter<"Tanulo_Letszam"> | Date | string
    createBy?: StringNullableFilter<"Tanulo_Letszam"> | string | null
    updatedAt?: DateTimeNullableFilter<"Tanulo_Letszam"> | Date | string | null
    updatedBy?: StringNullableFilter<"Tanulo_Letszam"> | string | null
  }

  export type KompetenciaUpsertWithWhereUniqueWithoutAlapadatokInput = {
    where: KompetenciaWhereUniqueInput
    update: XOR<KompetenciaUpdateWithoutAlapadatokInput, KompetenciaUncheckedUpdateWithoutAlapadatokInput>
    create: XOR<KompetenciaCreateWithoutAlapadatokInput, KompetenciaUncheckedCreateWithoutAlapadatokInput>
  }

  export type KompetenciaUpdateWithWhereUniqueWithoutAlapadatokInput = {
    where: KompetenciaWhereUniqueInput
    data: XOR<KompetenciaUpdateWithoutAlapadatokInput, KompetenciaUncheckedUpdateWithoutAlapadatokInput>
  }

  export type KompetenciaUpdateManyWithWhereWithoutAlapadatokInput = {
    where: KompetenciaScalarWhereInput
    data: XOR<KompetenciaUpdateManyMutationInput, KompetenciaUncheckedUpdateManyWithoutAlapadatokInput>
  }

  export type KompetenciaScalarWhereInput = {
    AND?: KompetenciaScalarWhereInput | KompetenciaScalarWhereInput[]
    OR?: KompetenciaScalarWhereInput[]
    NOT?: KompetenciaScalarWhereInput | KompetenciaScalarWhereInput[]
    id?: UuidFilter<"Kompetencia"> | string
    tanev_kezdete?: IntFilter<"Kompetencia"> | number
    mat_orsz_p?: StringFilter<"Kompetencia"> | string
    szoveg_orsz_p?: StringFilter<"Kompetencia"> | string
    mat_int_p?: StringFilter<"Kompetencia"> | string
    szoveg_int_p?: StringFilter<"Kompetencia"> | string
    kepzes_forma?: StringFilter<"Kompetencia"> | string
    alapadatok_id?: UuidFilter<"Kompetencia"> | string
    createAt?: DateTimeFilter<"Kompetencia"> | Date | string
    createBy?: StringNullableFilter<"Kompetencia"> | string | null
    updatedAt?: DateTimeNullableFilter<"Kompetencia"> | Date | string | null
    updatedBy?: StringNullableFilter<"Kompetencia"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutAlapadatokInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAlapadatokInput, UserUncheckedUpdateWithoutAlapadatokInput>
    create: XOR<UserCreateWithoutAlapadatokInput, UserUncheckedCreateWithoutAlapadatokInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAlapadatokInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAlapadatokInput, UserUncheckedUpdateWithoutAlapadatokInput>
  }

  export type UserUpdateManyWithWhereWithoutAlapadatokInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAlapadatokInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    permissions?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    alapadatokId?: UuidNullableFilter<"User"> | string | null
  }

  export type Tanulo_LetszamCreateWithoutSzakiranyInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
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
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamCreateOrConnectWithoutSzakiranyInput = {
    where: Tanulo_LetszamWhereUniqueInput
    create: XOR<Tanulo_LetszamCreateWithoutSzakiranyInput, Tanulo_LetszamUncheckedCreateWithoutSzakiranyInput>
  }

  export type Tanulo_LetszamCreateManySzakiranyInputEnvelope = {
    data: Tanulo_LetszamCreateManySzakiranyInput | Tanulo_LetszamCreateManySzakiranyInput[]
    skipDuplicates?: boolean
  }

  export type Felvettek_SzamaCreateWithoutSzakiranyInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    alapadatok: AlapadatokCreateNestedOneWithoutFelvettek_szamaInput
    szakma: SzakmaCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaCreateOrConnectWithoutSzakiranyInput = {
    where: Felvettek_SzamaWhereUniqueInput
    create: XOR<Felvettek_SzamaCreateWithoutSzakiranyInput, Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput>
  }

  export type Felvettek_SzamaCreateManySzakiranyInputEnvelope = {
    data: Felvettek_SzamaCreateManySzakiranyInput | Felvettek_SzamaCreateManySzakiranyInput[]
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

  export type Felvettek_SzamaUpsertWithWhereUniqueWithoutSzakiranyInput = {
    where: Felvettek_SzamaWhereUniqueInput
    update: XOR<Felvettek_SzamaUpdateWithoutSzakiranyInput, Felvettek_SzamaUncheckedUpdateWithoutSzakiranyInput>
    create: XOR<Felvettek_SzamaCreateWithoutSzakiranyInput, Felvettek_SzamaUncheckedCreateWithoutSzakiranyInput>
  }

  export type Felvettek_SzamaUpdateWithWhereUniqueWithoutSzakiranyInput = {
    where: Felvettek_SzamaWhereUniqueInput
    data: XOR<Felvettek_SzamaUpdateWithoutSzakiranyInput, Felvettek_SzamaUncheckedUpdateWithoutSzakiranyInput>
  }

  export type Felvettek_SzamaUpdateManyWithWhereWithoutSzakiranyInput = {
    where: Felvettek_SzamaScalarWhereInput
    data: XOR<Felvettek_SzamaUpdateManyMutationInput, Felvettek_SzamaUncheckedUpdateManyWithoutSzakiranyInput>
  }

  export type Felvettek_SzamaCreateWithoutSzakmaInput = {
    id?: string
    tanev_kezdete: number
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
    alapadatok: AlapadatokCreateNestedOneWithoutFelvettek_szamaInput
    szakirany?: SzakiranyCreateNestedOneWithoutFelvettek_szamaInput
  }

  export type Felvettek_SzamaUncheckedCreateWithoutSzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakiranyId?: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaCreateOrConnectWithoutSzakmaInput = {
    where: Felvettek_SzamaWhereUniqueInput
    create: XOR<Felvettek_SzamaCreateWithoutSzakmaInput, Felvettek_SzamaUncheckedCreateWithoutSzakmaInput>
  }

  export type Felvettek_SzamaCreateManySzakmaInputEnvelope = {
    data: Felvettek_SzamaCreateManySzakmaInput | Felvettek_SzamaCreateManySzakmaInput[]
    skipDuplicates?: boolean
  }

  export type Tanulo_LetszamCreateWithoutSzakmaInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
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
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamCreateOrConnectWithoutSzakmaInput = {
    where: Tanulo_LetszamWhereUniqueInput
    create: XOR<Tanulo_LetszamCreateWithoutSzakmaInput, Tanulo_LetszamUncheckedCreateWithoutSzakmaInput>
  }

  export type Tanulo_LetszamCreateManySzakmaInputEnvelope = {
    data: Tanulo_LetszamCreateManySzakmaInput | Tanulo_LetszamCreateManySzakmaInput[]
    skipDuplicates?: boolean
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

  export type AlapadatokCreateWithoutTanulo_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaCreateNestedManyWithoutAlapadatokInput
    users?: UserCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutTanulo_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput
    users?: UserUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutTanulo_letszamInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutTanulo_letszamInput, AlapadatokUncheckedCreateWithoutTanulo_letszamInput>
  }

  export type SzakiranyCreateWithoutTanulo_letszamInput = {
    id?: string
    nev: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyUncheckedCreateWithoutTanulo_letszamInput = {
    id?: string
    nev: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutSzakiranyInput
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
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUpdateManyWithoutAlapadatokNestedInput
    users?: UserUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput
    users?: UserUncheckedUpdateManyWithoutAlapadatokNestedInput
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
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutSzakiranyNestedInput
  }

  export type SzakiranyUncheckedUpdateWithoutTanulo_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutSzakiranyNestedInput
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
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaCreateNestedManyWithoutAlapadatokInput
    users?: UserCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutTanar_letszamInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput
    users?: UserUncheckedCreateNestedManyWithoutAlapadatokInput
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
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUpdateManyWithoutAlapadatokNestedInput
    users?: UserUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutTanar_letszamInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput
    users?: UserUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokCreateWithoutFelvettek_szamaInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaCreateNestedManyWithoutAlapadatokInput
    users?: UserCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutFelvettek_szamaInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput
    users?: UserUncheckedCreateNestedManyWithoutAlapadatokInput
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

  export type SzakiranyCreateWithoutFelvettek_szamaInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyUncheckedCreateWithoutFelvettek_szamaInput = {
    id?: string
    nev: string
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutSzakiranyInput
  }

  export type SzakiranyCreateOrConnectWithoutFelvettek_szamaInput = {
    where: SzakiranyWhereUniqueInput
    create: XOR<SzakiranyCreateWithoutFelvettek_szamaInput, SzakiranyUncheckedCreateWithoutFelvettek_szamaInput>
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
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUpdateManyWithoutAlapadatokNestedInput
    users?: UserUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput
    users?: UserUncheckedUpdateManyWithoutAlapadatokNestedInput
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

  export type SzakiranyUpsertWithoutFelvettek_szamaInput = {
    update: XOR<SzakiranyUpdateWithoutFelvettek_szamaInput, SzakiranyUncheckedUpdateWithoutFelvettek_szamaInput>
    create: XOR<SzakiranyCreateWithoutFelvettek_szamaInput, SzakiranyUncheckedCreateWithoutFelvettek_szamaInput>
    where?: SzakiranyWhereInput
  }

  export type SzakiranyUpdateToOneWithWhereWithoutFelvettek_szamaInput = {
    where?: SzakiranyWhereInput
    data: XOR<SzakiranyUpdateWithoutFelvettek_szamaInput, SzakiranyUncheckedUpdateWithoutFelvettek_szamaInput>
  }

  export type SzakiranyUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutSzakiranyNestedInput
  }

  export type SzakiranyUncheckedUpdateWithoutFelvettek_szamaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nev?: StringFieldUpdateOperationsInput | string
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyNestedInput
  }

  export type AlapadatokCreateWithoutKompetenciaInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    users?: UserCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutKompetenciaInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    users?: UserUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutKompetenciaInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutKompetenciaInput, AlapadatokUncheckedCreateWithoutKompetenciaInput>
  }

  export type AlapadatokUpsertWithoutKompetenciaInput = {
    update: XOR<AlapadatokUpdateWithoutKompetenciaInput, AlapadatokUncheckedUpdateWithoutKompetenciaInput>
    create: XOR<AlapadatokCreateWithoutKompetenciaInput, AlapadatokUncheckedCreateWithoutKompetenciaInput>
    where?: AlapadatokWhereInput
  }

  export type AlapadatokUpdateToOneWithWhereWithoutKompetenciaInput = {
    where?: AlapadatokWhereInput
    data: XOR<AlapadatokUpdateWithoutKompetenciaInput, AlapadatokUncheckedUpdateWithoutKompetenciaInput>
  }

  export type AlapadatokUpdateWithoutKompetenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    users?: UserUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutKompetenciaInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanugyiAdatok?: Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    users?: UserUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokCreateWithoutTanugyiAdatokInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaCreateNestedManyWithoutAlapadatokInput
    users?: UserCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokUncheckedCreateWithoutTanugyiAdatokInput = {
    id?: string
    iskola_neve: string
    intezmeny_tipus: string
    felvettek_szama?: Felvettek_SzamaUncheckedCreateNestedManyWithoutAlapadatokInput
    tanar_letszam?: Tanar_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    tanulo_letszam?: Tanulo_LetszamUncheckedCreateNestedManyWithoutAlapadatokInput
    kompetencia?: KompetenciaUncheckedCreateNestedManyWithoutAlapadatokInput
    users?: UserUncheckedCreateNestedManyWithoutAlapadatokInput
  }

  export type AlapadatokCreateOrConnectWithoutTanugyiAdatokInput = {
    where: AlapadatokWhereUniqueInput
    create: XOR<AlapadatokCreateWithoutTanugyiAdatokInput, AlapadatokUncheckedCreateWithoutTanugyiAdatokInput>
  }

  export type AlapadatokUpsertWithoutTanugyiAdatokInput = {
    update: XOR<AlapadatokUpdateWithoutTanugyiAdatokInput, AlapadatokUncheckedUpdateWithoutTanugyiAdatokInput>
    create: XOR<AlapadatokCreateWithoutTanugyiAdatokInput, AlapadatokUncheckedCreateWithoutTanugyiAdatokInput>
    where?: AlapadatokWhereInput
  }

  export type AlapadatokUpdateToOneWithWhereWithoutTanugyiAdatokInput = {
    where?: AlapadatokWhereInput
    data: XOR<AlapadatokUpdateWithoutTanugyiAdatokInput, AlapadatokUncheckedUpdateWithoutTanugyiAdatokInput>
  }

  export type AlapadatokUpdateWithoutTanugyiAdatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUpdateManyWithoutAlapadatokNestedInput
    users?: UserUpdateManyWithoutAlapadatokNestedInput
  }

  export type AlapadatokUncheckedUpdateWithoutTanugyiAdatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    iskola_neve?: StringFieldUpdateOperationsInput | string
    intezmeny_tipus?: StringFieldUpdateOperationsInput | string
    felvettek_szama?: Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanar_letszam?: Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    tanulo_letszam?: Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokNestedInput
    kompetencia?: KompetenciaUncheckedUpdateManyWithoutAlapadatokNestedInput
    users?: UserUncheckedUpdateManyWithoutAlapadatokNestedInput
  }

  export type TableAccessCreateManyUserInput = {
    id?: string
    tableName: string
    access?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LogCreateManyUserInput = {
    id?: string
    method: string
    path: string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip: string
    userAgent: string
    createdAt?: Date | string
  }

  export type TableAccessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableAccessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TableAccessUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    access?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    body?: NullableJsonNullValueInput | InputJsonValue
    query?: NullableJsonNullValueInput | InputJsonValue
    headers?: NullableJsonNullValueInput | InputJsonValue
    ip?: StringFieldUpdateOperationsInput | string
    userAgent?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Felvettek_SzamaCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    szakma_id: string
    szakiranyId?: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanar_LetszamCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanugyi_AdatokCreateManyAlapadatokInput = {
    id?: string
    elotag?: string | null
    vezeteknev?: string | null
    utonev?: string | null
    oktatasiAzonositoja?: string | null
    osztaly?: string | null
    szuletesiDatuma?: string | null
    anyjaSzuletesiDatuma?: string | null
    tanterv?: string | null
    naploSorszam?: string | null
    beiras_naplo_sorszam?: string | null
    felvetel_taneve?: string | null
    torzslapszam?: string | null
    tanulo_jogviszonya?: string | null
    jogviszony_kezdete?: string | null
    jogviszony_megszunesenek_varhato_datuma?: string | null
    jogviszonyátSzunetelteto?: string | null
    tankotelezettsegetTeljesito?: string | null
    tankotelezettségVege?: string | null
    bejaro?: string | null
    Szakmai_gyakorlaton_tartozkodik?: string | null
    Egyeni_munkarend?: string | null
    Egyeni_munkarend_oka?: string | null
    Egyeni_munkarend_kezdete?: string | null
    Egyeni_munkarend_vege?: string | null
    Vendegtanulo?: string | null
    tandijat_fizeto?: string | null
    teritesi_dijat_fizeto?: string | null
    tanuloszerzodeses?: string | null
    polgari_szerzodeses?: string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: string | null
    evfolyamismetlo?: string | null
    elozo_intezmeny?: string | null
    osztaly1?: string | null
    evfolyam?: string | null
    bizonyitvany_sorszama?: string | null
    okleveles_technikus_képzes?: string | null
    uj_Szkt_agazat_tipusa?: string | null
    uj_szkt_szakma_tipusa?: string | null
    uj_szkt_szakmairany_tipusa?: string | null
    nkt_tanulmanyi_terulet?: string | null
    nkt_szakkepesites?: string | null
    nkt_szakirany?: string | null
    agazat_uj_szkt_reszszakmahoz?: string | null
    szakma_reszszakmahoz?: string | null
    reszszakma?: string | null
    agazat_tanulmanyi_terulet?: string | null
    szakmai_kepzes?: string | null
    agazati_alapoktatas_megnevezese?: string | null
    agazati_alapvizsga_eredmeny?: string | null
    agazati_alapvizsga_teljesitesenek_datuma?: string | null
    agazati_alapvizsga_eredmenye?: string | null
    agazati_alapvizsga_eredmenye_percent?: string | null
    szakkepzesi_munkaszerzodessel?: string | null
    Dualis_kepzohely_neve?: string | null
    Dualis_kepzohely_adoszama?: string | null
    kiemelten_tehetseges?: string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: string | null
    egesz_napos_iskolai_oktatasban_reszesul?: string | null
    nyelvi_elokeszito?: string | null
    ket_tanitasi_nyelvu?: string | null
    NemzetisegiNevelesOktatas?: string | null
    NemzetisegiNevelesOktatásFajtaja?: string | null
    nemzetisegiNyelv?: string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: string | null
    sportosztaly?: string | null
    aranyjanostehetseggondozoprogram?: string | null
    arany_janos_kollegiumi_program?: string | null
    munkarend?: string | null
    createAt?: Date | string
    createBy: string
    updatedAt?: Date | string | null
    updatedBy?: string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: string | null
    tanev_kezdete?: number
  }

  export type Tanulo_LetszamCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    szakma_id: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type KompetenciaCreateManyAlapadatokInput = {
    id?: string
    tanev_kezdete?: number
    mat_orsz_p: string
    szoveg_orsz_p: string
    mat_int_p: string
    szoveg_int_p: string
    kepzes_forma: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type UserCreateManyAlapadatokInput = {
    id?: string
    email: string
    name?: string | null
    password?: string | null
    permissions?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type Felvettek_SzamaUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    szakma?: SzakmaUpdateOneRequiredWithoutFelvettek_szamaNestedInput
    szakirany?: SzakiranyUpdateOneWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    szakiranyId?: NullableStringFieldUpdateOperationsInput | string | null
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    szakiranyId?: NullableStringFieldUpdateOperationsInput | string | null
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanar_LetszamUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanar_LetszamUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanar_LetszamUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanugyi_AdatokUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
  }

  export type Tanugyi_AdatokUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
  }

  export type Tanugyi_AdatokUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    elotag?: NullableStringFieldUpdateOperationsInput | string | null
    vezeteknev?: NullableStringFieldUpdateOperationsInput | string | null
    utonev?: NullableStringFieldUpdateOperationsInput | string | null
    oktatasiAzonositoja?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly?: NullableStringFieldUpdateOperationsInput | string | null
    szuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    anyjaSzuletesiDatuma?: NullableStringFieldUpdateOperationsInput | string | null
    tanterv?: NullableStringFieldUpdateOperationsInput | string | null
    naploSorszam?: NullableStringFieldUpdateOperationsInput | string | null
    beiras_naplo_sorszam?: NullableStringFieldUpdateOperationsInput | string | null
    felvetel_taneve?: NullableStringFieldUpdateOperationsInput | string | null
    torzslapszam?: NullableStringFieldUpdateOperationsInput | string | null
    tanulo_jogviszonya?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszony_megszunesenek_varhato_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    jogviszonyátSzunetelteto?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettsegetTeljesito?: NullableStringFieldUpdateOperationsInput | string | null
    tankotelezettségVege?: NullableStringFieldUpdateOperationsInput | string | null
    bejaro?: NullableStringFieldUpdateOperationsInput | string | null
    Szakmai_gyakorlaton_tartozkodik?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_oka?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_kezdete?: NullableStringFieldUpdateOperationsInput | string | null
    Egyeni_munkarend_vege?: NullableStringFieldUpdateOperationsInput | string | null
    Vendegtanulo?: NullableStringFieldUpdateOperationsInput | string | null
    tandijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    teritesi_dijat_fizeto?: NullableStringFieldUpdateOperationsInput | string | null
    tanuloszerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    polgari_szerzodeses?: NullableStringFieldUpdateOperationsInput | string | null
    iskolai_sportkorben_reszt_vevo_tanulo?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyamismetlo?: NullableStringFieldUpdateOperationsInput | string | null
    elozo_intezmeny?: NullableStringFieldUpdateOperationsInput | string | null
    osztaly1?: NullableStringFieldUpdateOperationsInput | string | null
    evfolyam?: NullableStringFieldUpdateOperationsInput | string | null
    bizonyitvany_sorszama?: NullableStringFieldUpdateOperationsInput | string | null
    okleveles_technikus_képzes?: NullableStringFieldUpdateOperationsInput | string | null
    uj_Szkt_agazat_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakma_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    uj_szkt_szakmairany_tipusa?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakkepesites?: NullableStringFieldUpdateOperationsInput | string | null
    nkt_szakirany?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_uj_szkt_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    szakma_reszszakmahoz?: NullableStringFieldUpdateOperationsInput | string | null
    reszszakma?: NullableStringFieldUpdateOperationsInput | string | null
    agazat_tanulmanyi_terulet?: NullableStringFieldUpdateOperationsInput | string | null
    szakmai_kepzes?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapoktatas_megnevezese?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmeny?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_teljesitesenek_datuma?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye?: NullableStringFieldUpdateOperationsInput | string | null
    agazati_alapvizsga_eredmenye_percent?: NullableStringFieldUpdateOperationsInput | string | null
    szakkepzesi_munkaszerzodessel?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_neve?: NullableStringFieldUpdateOperationsInput | string | null
    Dualis_kepzohely_adoszama?: NullableStringFieldUpdateOperationsInput | string | null
    kiemelten_tehetseges?: NullableStringFieldUpdateOperationsInput | string | null
    szamitogepet_tanulasi_oktatasi_celra_hasznal?: NullableStringFieldUpdateOperationsInput | string | null
    szaboky_adolf_szakkepzesi_osztondijban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    egesz_napos_iskolai_oktatasban_reszesul?: NullableStringFieldUpdateOperationsInput | string | null
    nyelvi_elokeszito?: NullableStringFieldUpdateOperationsInput | string | null
    ket_tanitasi_nyelvu?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    NemzetisegiNevelesOktatásFajtaja?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegiNyelv?: NullableStringFieldUpdateOperationsInput | string | null
    nemzetisegNyelvenFolyoSzakmaiOktatas?: NullableStringFieldUpdateOperationsInput | string | null
    sportosztaly?: NullableStringFieldUpdateOperationsInput | string | null
    aranyjanostehetseggondozoprogram?: NullableStringFieldUpdateOperationsInput | string | null
    arany_janos_kollegiumi_program?: NullableStringFieldUpdateOperationsInput | string | null
    munkarend?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: StringFieldUpdateOperationsInput | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    a_9_evfolyamosok_kozul_a_8_evfolyamot_az_elozo_tanevben_vegezte?: NullableStringFieldUpdateOperationsInput | string | null
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
  }

  export type Tanulo_LetszamUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    szakma_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetenciaUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetenciaUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KompetenciaUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    mat_orsz_p?: StringFieldUpdateOperationsInput | string
    szoveg_orsz_p?: StringFieldUpdateOperationsInput | string
    mat_int_p?: StringFieldUpdateOperationsInput | string
    szoveg_int_p?: StringFieldUpdateOperationsInput | string
    kepzes_forma?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tableAccess?: TableAccessUpdateManyWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tableAccess?: TableAccessUncheckedUpdateManyWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAlapadatokInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Tanulo_LetszamCreateManySzakiranyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakma_id: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaCreateManySzakiranyInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakma_id: string
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamUpdateWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaUpdateWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok?: AlapadatokUpdateOneRequiredWithoutFelvettek_szamaNestedInput
    szakma?: SzakmaUpdateOneRequiredWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutSzakiranyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakma_id?: StringFieldUpdateOperationsInput | string
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaCreateManySzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    szakiranyId?: string | null
    jelentkezo_letszam: number
    felveheto_letszam: number
    felvett_letszam: number
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Tanulo_LetszamCreateManySzakmaInput = {
    id?: string
    alapadatok_id: string
    tanev_kezdete: number
    jogv_tipus: number
    letszam: number
    szakirany_id: string
    createAt?: Date | string
    createBy?: string | null
    updatedAt?: Date | string | null
    updatedBy?: string | null
  }

  export type Felvettek_SzamaUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    alapadatok?: AlapadatokUpdateOneRequiredWithoutFelvettek_szamaNestedInput
    szakirany?: SzakiranyUpdateOneWithoutFelvettek_szamaNestedInput
  }

  export type Felvettek_SzamaUncheckedUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakiranyId?: NullableStringFieldUpdateOperationsInput | string | null
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Felvettek_SzamaUncheckedUpdateManyWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    szakiranyId?: NullableStringFieldUpdateOperationsInput | string | null
    jelentkezo_letszam?: IntFieldUpdateOperationsInput | number
    felveheto_letszam?: IntFieldUpdateOperationsInput | number
    felvett_letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanulo_LetszamUpdateWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Tanulo_LetszamUncheckedUpdateManyWithoutSzakmaInput = {
    id?: StringFieldUpdateOperationsInput | string
    alapadatok_id?: StringFieldUpdateOperationsInput | string
    tanev_kezdete?: IntFieldUpdateOperationsInput | number
    jogv_tipus?: IntFieldUpdateOperationsInput | number
    letszam?: IntFieldUpdateOperationsInput | number
    szakirany_id?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
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