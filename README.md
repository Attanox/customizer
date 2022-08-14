# customizer

Most of the code taken from [https://github.com/drcmda/floating-shoe](https://github.com/drcmda/floating-shoe), just generalized and turnt into package.

Not meant to be used in production!

If to be used, one has to compress `GLTF` file into `GLB` via:

```
npx gltf-pipeline -i <model>.gltf -o <model>.glb --draco.compressionLevel=10
```
