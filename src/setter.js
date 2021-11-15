import { selector, selectorFamily } from 'recoil';

export function setter(settings) {
  return selector({
    ...settings,
    get: ThrowSetterOnly,
  });
}

export function setterFamily(settings) {
  return selectorFamily({
    ...settings,
    get: ThrowSetterOnly,
  });
}

function ThrowSetterOnly() {
    throw new Error('Setter Only');
}
