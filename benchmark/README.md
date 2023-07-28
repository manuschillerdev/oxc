# Benchmarks

This benchmark does not compare against Rome because the rules do not match.

## Initialize

```bash
./init.sh
```

## Bench

```bash
./bench.sh
```

## Results

The benchmark uses the `vscode/src` directory, which contains 3629 lintable files.

### Single Run

Using the shell `time` command for cpu utilization

* oxc: 638% cpu
* ESLint: 161% cpu

### Hyperfine

## Intel i7 6-cores

```
Benchmark 1: oxc
  Time (mean ± σ):     366.6 ms ±  16.8 ms    [User: 3116.9 ms, System: 507.3 ms]
  Range (min … max):   343.6 ms … 399.8 ms    10 runs

Benchmark 2: eslint
  Time (mean ± σ):     50.486 s ±  1.975 s    [User: 82.670 s, System: 3.590 s]
  Range (min … max):   47.101 s … 54.417 s    10 runs

Summary
  'oxc' ran
  137.70 ± 8.28 times faster than 'eslint'
```

## M2 8-cores

```
Benchmark 1: oxc
  Time (mean ± σ):     297.0 ms ±  31.7 ms    [User: 1772.3 ms, System: 205.7 ms]
  Range (min … max):   269.8 ms … 379.7 ms    10 runs

  Warning: Ignoring non-zero exit code.

Benchmark 2: eslint
  Time (mean ± σ):     22.722 s ±  0.470 s    [User: 39.437 s, System: 1.705 s]
  Range (min … max):   22.177 s … 23.805 s    10 runs

  Warning: Ignoring non-zero exit code.

Summary
  'oxc' ran
   76.50 ± 8.32 times faster than 'eslint'
```

## AMD 5800H 8-cores

```
Benchmark 1: oxc
  Time (mean ± σ):     239.6 ms ±   2.3 ms    [User: 3113.7 ms, System: 153.3 ms]
  Range (min … max):   236.8 ms … 244.1 ms    10 runs

  Warning: Ignoring non-zero exit code.

Benchmark 2: eslint
  Time (mean ± σ):      16.318 s ±  0.566 s   [User: 16.324 s, System: 0.723 s]
  Range (min … max):    15.624 s … 16.965 s   10 runs

  Warning: Ignoring non-zero exit code.

Summary
  oxc ran
   68.09 ± 2.45 times faster than eslint
```