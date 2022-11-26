#!/usr/bin/env bash

echo "=====[Snoocord: Chore]====="

echo "[chore.sh] Running deno fmt..."
deno fmt

echo "[chore.sh] Running deno lint..."
deno lint

echo "[chore.sh] Done."