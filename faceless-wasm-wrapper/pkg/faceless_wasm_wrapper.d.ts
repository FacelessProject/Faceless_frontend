/* tslint:disable */
/* eslint-disable */
/**
*/
export function greet(): void;
/**
*/
export function encrypt(): void;
/**
*/
export class IbeWrapper {
  free(): void;
/**
* @returns {IbeWrapper}
*/
  static new(): IbeWrapper;
/**
* @returns {string}
*/
  random_scalar(): string;
/**
* Convert a master secret key to its master public key.
* @param {string} msk
* @returns {string}
*/
  static msk_to_mpk(msk: string): string;
/**
* @returns {KeyPair}
*/
  generate_key(): KeyPair;
/**
* @param {string} id
* @param {string} msk
* @returns {string}
*/
  extract(id: string, msk: string): string;
/**
* Seems that u64 does not work on the JS side, don't know why it converts it to bigint
* @param {number} msg
* @param {string} id
* @param {string} mpk
* @returns {string}
*/
  encrypt(msg: number, id: string, mpk: string): string;
/**
* @param {number} msg
* @param {string} id
* @param {string} mpk
* @param {string} r
* @returns {string}
*/
  encrypt_with_randomness(msg: number, id: string, mpk: string, r: string): string;
/**
* @param {string} ct
* @param {string} id
* @param {string} sk
* @param {number} bound
* @returns {number}
*/
  decrypt(ct: string, id: string, sk: string, bound: number): number;
/**
* @param {string} ct1
* @param {string} ct2
* @returns {string}
*/
  static add_ciphers(ct1: string, ct2: string): string;
/**
* @param {string} mpk
* @param {string} id
* @returns {string}
*/
  static pk_id(mpk: string, id: string): string;
}
/**
*/
export class KeyPair {
  free(): void;
/**
* @returns {string}
*/
  msk(): string;
/**
* @returns {string}
*/
  mpk(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly greet: () => void;
  readonly encrypt: () => void;
  readonly __wbg_ibewrapper_free: (a: number) => void;
  readonly ibewrapper_new: () => number;
  readonly ibewrapper_random_scalar: (a: number, b: number) => void;
  readonly ibewrapper_msk_to_mpk: (a: number, b: number, c: number) => void;
  readonly ibewrapper_generate_key: (a: number) => number;
  readonly ibewrapper_extract: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly ibewrapper_encrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => void;
  readonly ibewrapper_encrypt_with_randomness: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
  readonly ibewrapper_decrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly ibewrapper_add_ciphers: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly ibewrapper_pk_id: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbg_keypair_free: (a: number) => void;
  readonly keypair_msk: (a: number, b: number) => void;
  readonly keypair_mpk: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
