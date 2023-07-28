/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/**
 * Babel Parser Options
 *
 * <https://github.com/babel/babel/blob/main/packages/babel-parser/typings/babel-parser.d.ts>
 */
export interface ParserOptions {
  sourceType?: 'script' | 'module' | 'unambiguous' | undefined
  sourceFilename?: string
}
export interface ParseResult {
  program: string
  errors: Array<string>
}
/**
 * Parse without returning anything.
 * For benchmark purposes such as measuring the napi communication overhead.
 *
 * # Panics
 *
 * * File extension is invalid
 * * Serde JSON serialization
 */
export function parseWithoutReturn(sourceText: string, options?: ParserOptions | undefined | null): void
/**
 * # Panics
 *
 * * File extension is invalid
 * * Serde JSON serialization
 */
export function parseSync(sourceText: string, options?: ParserOptions | undefined | null): ParseResult
/**
 * # Panics
 * * Tokio crashes
 */
export function parseAsync(sourceText: string, options?: ParserOptions | undefined | null): Promise<ParseResult>
