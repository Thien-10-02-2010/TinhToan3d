export function tinhLapPhuong(a) {
  return {
    xq: 4 * a * a,
    tp: 6 * a * a,
    v: a ** 3,
    congThuc: {
      xq: '4 × a²',
      tp: '6 × a²',
      v: 'a³'
    }
  };
}

export function tinhHopChuNhat(d, r, c) {
  return {
    xq: 2 * c * (d + r),
    tp: 2 * (d * r + d * c + r * c),
    v: d * r * c,
    congThuc: {
      xq: '2 × c × (d + r)',
      tp: '2 × (d×r + d×c + r×c)',
      v: 'd × r × c'
    }
  };
}

export function tinhHinhCau(r) {
  return {
    xq: 0, // không có xq riêng
    tp: 4 * Math.PI * r * r,
    v: (4 / 3) * Math.PI * r ** 3,
    congThuc: {
      xq: '—',
      tp: '4πr²',
      v: '(4/3)πr³'
    }
  };
}
