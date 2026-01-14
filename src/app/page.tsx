'use client';

import Link from 'next/link';
import { useState } from 'react';

interface TransportInfo {
  type: 'walking' | 'driving' | 'subway' | 'taxi';
  time: string;
  distance: string;
  icon: string;
  label: string;
}

interface ExhibitionCard {
  title: string;
  description: string;
  tags: string[];
  navUrl: string;
  category: 'exhibition' | 'food' | 'scenery';
  transports: TransportInfo[];
}

const exhibitions: ExhibitionCard[] = [
  {
    title: '🏛️ 闵行博物馆 · 丝路新展',
    description: '最新特展：新疆丝绸之路璀璨文明。2026年开年大戏，国家级文物。',
    tags: ['免费 / 公众号预约', '推荐打卡'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=闵行博物馆',
    category: 'exhibition',
    transports: [
      { type: 'driving', time: '约15分钟', distance: '5.5公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约15分钟', distance: '5.5公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约35分钟', distance: '12站', icon: '🚇', label: '地铁' },
      { type: 'walking', time: '约60分钟', distance: '5.5公里', icon: '🚶', label: '步行' },
    ],
  },
  {
    title: '🎨 宝龙美术馆 · 八周年特展',
    description: '现代艺术大师林风眠、徐悲鸿原作展。',
    tags: ['付费 / 需购票'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=宝龙美术馆',
    category: 'exhibition',
    transports: [
      { type: 'driving', time: '约12分钟', distance: '4.2公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约12分钟', distance: '4.2公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约30分钟', distance: '10站', icon: '🚇', label: '地铁' },
      { type: 'walking', time: '约50分钟', distance: '4.2公里', icon: '🚶', label: '步行' },
    ],
  },
  {
    title: '🏙️ 浦东美术馆 · 毕加索',
    description: '80件毕加索真迹。顶楼露台是上海最美外滩取景位。',
    tags: ['推荐打卡 / 热门'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=浦东美术馆',
    category: 'exhibition',
    transports: [
      { type: 'driving', time: '约35分钟', distance: '25公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约35分钟', distance: '25公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约55分钟', distance: '20站', icon: '🚇', label: '地铁' },
    ],
  },
  {
    title: '📚 上海博物馆东馆',
    description: '新开放的综合博物馆，常设展"古代中国"震撼亮相。',
    tags: ['热门', '免费预约'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=上海博物馆东馆',
    category: 'exhibition',
    transports: [
      { type: 'driving', time: '约40分钟', distance: '28公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约40分钟', distance: '28公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约60分钟', distance: '22站', icon: '🚇', label: '地铁' },
    ],
  },
  {
    title: '🎭 中华艺术宫',
    description: '原世博会中国馆，上海当代艺术殿堂。',
    tags: ['推荐'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=中华艺术宫',
    category: 'exhibition',
    transports: [
      { type: 'driving', time: '约30分钟', distance: '22公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约30分钟', distance: '22公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约50分钟', distance: '18站', icon: '🚇', label: '地铁' },
    ],
  },
  {
    title: '🍜 七宝古镇 · 老街美食',
    description: '七宝汤团、海棠糕、羊肉面等传统美食。',
    tags: ['美食', '免费'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=七宝古镇',
    category: 'food',
    transports: [
      { type: 'driving', time: '约18分钟', distance: '6.5公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约18分钟', distance: '6.5公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约20分钟', distance: '8站', icon: '🚇', label: '地铁' },
      { type: 'walking', time: '约70分钟', distance: '6.5公里', icon: '🚶', label: '步行' },
    ],
  },
  {
    title: '🥢 中庚漫游城 · 地道美食',
    description: '酒店楼下购物中心，汇聚各地美食。',
    tags: ['美食', '步行可达'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=中庚漫游城',
    category: 'food',
    transports: [
      { type: 'walking', time: '约5分钟', distance: '400米', icon: '🚶', label: '步行' },
      { type: 'driving', time: '约2分钟', distance: '400米', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约2分钟', distance: '400米', icon: '🚕', label: '打车' },
    ],
  },
  {
    title: '🌸 闵行文化公园',
    description: '春季樱花盛开，适合休闲散步。',
    tags: ['自然', '免费'],
    navUrl: 'https://m.amap.com/search/mapview/keywords=闵行文化公园',
    category: 'scenery',
    transports: [
      { type: 'driving', time: '约20分钟', distance: '7.2公里', icon: '🚗', label: '驾车' },
      { type: 'taxi', time: '约20分钟', distance: '7.2公里', icon: '🚕', label: '打车' },
      { type: 'subway', time: '约30分钟', distance: '11站', icon: '🚇', label: '地铁' },
      { type: 'walking', time: '约80分钟', distance: '7.2公里', icon: '🚶', label: '步行' },
    ],
  },
];

const getCategoryColor = (category: ExhibitionCard['category']) => {
  switch (category) {
    case 'exhibition':
      return 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-300';
    case 'food':
      return 'bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-300';
    case 'scenery':
      return 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-300';
    default:
      return 'bg-gray-50 text-gray-600 dark:bg-gray-950 dark:text-gray-300';
  }
};

const getCategoryLabel = (category: ExhibitionCard['category']) => {
  switch (category) {
    case 'exhibition':
      return '展览打卡';
    case 'food':
      return '美食推荐';
    case 'scenery':
      return '自然景点';
    default:
      return '推荐';
  }
};

const getTransportColor = (type: TransportInfo['type']) => {
  switch (type) {
    case 'walking':
      return 'bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400';
    case 'driving':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400';
    case 'subway':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-400';
    case 'taxi':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-400';
    default:
      return 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400';
  }
};

function TransportInfoCard({ transport }: { transport: TransportInfo }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${getTransportColor(transport.type)}`}>
      <span className="text-xl">{transport.icon}</span>
      <div className="flex-1">
        <div className="text-xs opacity-80">{transport.label}</div>
        <div className="text-sm font-semibold">{transport.time}</div>
      </div>
      <div className="text-xs opacity-60">{transport.distance}</div>
    </div>
  );
}

export default function Home() {
  const [selectedTransport, setSelectedTransport] = useState<'walking' | 'driving' | 'subway' | 'taxi'>('driving');

  const transportOptions = [
    { type: 'walking' as const, icon: '🚶', label: '步行' },
    { type: 'driving' as const, icon: '🚗', label: '驾车' },
    { type: 'subway' as const, icon: '🚇', label: '地铁' },
    { type: 'taxi' as const, icon: '🚕', label: '打车' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900">
      {/* 头部区域 */}
      <header className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-amber-100 px-4 py-6 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-2 tracking-wide">
            中庚聚龙·漫游指南
          </h1>
          <p className="text-sm text-zinc-300 opacity-90">
            2026年1月 · 周边展览与美食打卡导览
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs bg-zinc-800/50 px-3 py-1.5 rounded-full">
            <span>📍</span>
            <span>上海中庚聚龙酒店周边</span>
          </div>
        </div>
      </header>

      {/* 交通方式选择器 */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-700 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-1">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-2">出行方式：</span>
            {transportOptions.map((option) => (
              <button
                key={option.type}
                onClick={() => setSelectedTransport(option.type)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTransport === option.type
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                    : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                <span>{option.icon}</span>
                <span className="hidden sm:inline">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容区 */}
      <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
        {exhibitions.map((item, index) => {
          const selectedInfo = item.transports.find((t) => t.type === selectedTransport);
          
          return (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-zinc-200/50 dark:border-zinc-700"
            >
              {/* 标题和分类标签 */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  {item.title}
                </h2>
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium shrink-0 ${getCategoryColor(item.category)}`}
                >
                  {getCategoryLabel(item.category)}
                </span>
              </div>

              {/* 描述 */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* 交通信息卡片 */}
              {selectedInfo && (
                <div className="mb-4">
                  <div className="text-xs text-zinc-400 dark:text-zinc-500 mb-2">从酒店出发：</div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {item.transports.map((transport, idx) => (
                      <div
                        key={idx}
                        className={`transition-all ${
                          selectedTransport === transport.type
                            ? 'ring-2 ring-zinc-400 dark:ring-zinc-600 scale-105'
                            : 'opacity-60 hover:opacity-100'
                        }`}
                      >
                        <TransportInfoCard transport={transport} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${
                      item.category === 'food'
                        ? 'bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300'
                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 导航按钮 */}
              <Link
                href={item.navUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-zinc-900 hover:bg-zinc-800 text-white text-center py-3 rounded-xl font-medium transition-colors text-sm"
              >
                点击导航 (高德地图) →
              </Link>
            </div>
          );
        })}
      </main>

      {/* 底部版权 */}
      <footer className="text-center py-6 text-xs text-zinc-400 dark:text-zinc-600">
        <p>© AI 智慧导览助手 · 祝您游览愉快</p>
      </footer>
    </div>
  );
}
