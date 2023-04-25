import { chakra } from "@chakra-ui/system";
import * as React from "react";
import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@clinia-ui/react";

export default {
  title: "Components / Disclosure / Tabs",
  decorators: [
    (story: Function) => (
      <chakra.div maxWidth="500px" mt="100px" mx="auto">
        {story()}
      </chakra.div>
    ),
  ],
};

const variants = [
  "line",
  "enclosed",
  "enclosed-colored",
  "soft-rounded",
  "solid-rounded",
] as const;

export const Variants = () =>
  variants.map((variant) => (
    <chakra.div key={variant} my="10">
      <pre>variant = {variant}</pre>
      <Tabs variant={variant} mt="3">
        <TabList>
          <Tab>Settings</Tab>
          <Tab>Billings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Settings</TabPanel>
          <TabPanel>Billings</TabPanel>
        </TabPanels>
      </Tabs>
    </chakra.div>
  ));

const sizes = ["sm", "md", "lg"] as const;

export const Sizes = () =>
  sizes.map((size) => (
    <chakra.div key={size} my="10">
      <pre>size = {size}</pre>
      <Tabs size={size} mt="3">
        <TabList>
          <Tab>Settings</Tab>
          <Tab>Billings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Settings</TabPanel>
          <TabPanel>Billings</TabPanel>
        </TabPanels>
      </Tabs>
    </chakra.div>
  ));

export const automatic = () => (
  <>
    <p>manual</p>
    <Tabs isManual>
      <TabList>
        <Tab>Settings</Tab>
        <Tab isDisabled>Billings</Tab>
        <Tab isDisabled>Preferences</Tab>
        <Tab>Shut Down</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Settings</TabPanel>
        <TabPanel>Billings</TabPanel>
        <TabPanel>Preferences</TabPanel>
        <TabPanel>Shut Down</TabPanel>
      </TabPanels>
    </Tabs>
    <br />
    <p>auto</p>
    <Tabs>
      <TabList>
        <Tab>Settings</Tab>
        <Tab isDisabled>Billings</Tab>
        <Tab isDisabled>Preferences</Tab>
        <Tab>Shut Down</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Settings</TabPanel>
        <TabPanel>Billings</TabPanel>
        <TabPanel>Preferences</TabPanel>
        <TabPanel>Shut Down</TabPanel>
      </TabPanels>
    </Tabs>
  </>
);

export const manual = () => (
  <Tabs isManual>
    <TabList>
      <Tab>Settings</Tab>
      <Tab>Billings</Tab>
      <Tab isDisabled>Preferences</Tab>
      <Tab>Shut Down</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Settings</TabPanel>
      <TabPanel>Billings</TabPanel>
      <TabPanel>Preferences</TabPanel>
      <TabPanel>Shut Down</TabPanel>
    </TabPanels>
  </Tabs>
);

export const withIndicator = () => (
  <Tabs variant="unstyled" isManual>
    <TabList>
      <Tab>Settings</Tab>
      <Tab _disabled={{ color: "gray.400" }} isDisabled>
        Billings
      </Tab>
      <Tab>Preferences</Tab>
      <Tab>Shut Down</Tab>
    </TabList>

    <TabIndicator mt="-36px" zIndex={-1} height="34px" bg="primary.100" />

    <TabPanels>
      <TabPanel>Settings</TabPanel>
      <TabPanel>Billings</TabPanel>
      <TabPanel>Preferences</TabPanel>
      <TabPanel>Shut Down</TabPanel>
    </TabPanels>
  </Tabs>
);

export const withIndicatorAndLongTabText = () => (
  <>
    <Tabs variant="unstyled" isManual>
      <TabList>
        <Tab>Tab with long text</Tab>
        <Tab>Billings</Tab>
        <Tab>Preferences</Tab>
        <Tab>Shut Down</Tab>
      </TabList>
      <TabIndicator mt="-36px" zIndex={-1} height="34px" bg="primary.100" />
      <TabPanels>
        <TabPanel>Tab with long text</TabPanel>
        <TabPanel>Billings</TabPanel>
        <TabPanel>Preferences</TabPanel>
        <TabPanel>Shut Down</TabPanel>
      </TabPanels>
    </Tabs>
  </>
);

export const withVerticalTabs = () => (
  <Tabs orientation="vertical">
    <TabList>
      <Tab>Settings</Tab>
      <Tab>Billings</Tab>
      <Tab isDisabled>Preferences</Tab>
      <Tab>Shut Down</Tab>
    </TabList>
    <TabPanels bg="red.200">
      <TabPanel>Settings</TabPanel>
      <TabPanel>Billings</TabPanel>
      <TabPanel>Preferences</TabPanel>
      <TabPanel>Shut Down</TabPanel>
    </TabPanels>
  </Tabs>
);

export const withLazyTabs = () => (
  <Tabs isLazy>
    <TabList>
      <Tab>Interval 1</Tab>
      <Tab>Interval 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Interval 1:</TabPanel>
      <TabPanel>Interval 2:</TabPanel>
    </TabPanels>
  </Tabs>
);

export const withLazyTabsMounted = () => (
  <Tabs isLazy lazyBehavior="keepMounted">
    <TabList>
      <Tab>Interval 1</Tab>
      <Tab>Interval 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Interval 1:</TabPanel>
      <TabPanel>Interval 2:</TabPanel>
    </TabPanels>
  </Tabs>
);

export const WithSwappedTabs = () => {
  const initialData = [
    { id: "a", value: 1 },
    { id: "b", value: 5 },
  ];

  const TabView: React.FC<{
    items: typeof initialData;
    selectedItemId: string;
    setSelectedItemId: (id: string) => void;
  }> = ({ items, selectedItemId, setSelectedItemId }) => {
    // Derive current tab index from id
    const tabIndex = React.useMemo(() => {
      return items.findIndex((x) => x.id === selectedItemId);
    }, [items, selectedItemId]);

    // Update current selected item id
    const onTabChange = (idx: number) => {
      console.log("onTabChange", idx, items[idx].id);
      const { id } = items[idx];
      setSelectedItemId(id);
    };

    return (
      <Tabs
        index={tabIndex}
        onChange={onTabChange}
        orientation="vertical"
        variant="enclosed-colored"
      >
        <TabList minW="100px">
          {items.map((x) => (
            <Tab key={x.id}>
              {x.id}: {x.value}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {items.map((x) => (
            <TabPanel key={x.id}>
              {x.id}: {x.value}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  };

  const [items, setItems] = React.useState(initialData);
  const [selectedItemId, setSelectedItemId] = React.useState("a");

  const swapData = () => {
    setItems((items) => {
      const [a, b] = items;
      return [b, a];
    });
  };

  console.log(
    { selectedItemId },
    items.map((x) => x.id)
  );

  return (
    <chakra.div m={4}>
      <button onClick={swapData}>Swap tab order</button>
      <TabView
        items={items}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
      />
    </chakra.div>
  );
};

export const withinDrawer = () => (
  <Drawer isOpen onClose={console.log}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Tabs variant="unstyled" isManual>
            <TabList>
              <Tab>Settings</Tab>
              <Tab>Billings</Tab>
              <Tab>Preferences</Tab>
            </TabList>

            <TabIndicator zIndex={-1} height="4px" bg="primary.100" />

            <TabPanels>
              <TabPanel>Settings</TabPanel>
              <TabPanel>Billings</TabPanel>
              <TabPanel>Preferences</TabPanel>
            </TabPanels>
          </Tabs>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export const WithTabPanelWrapper = () => (
  <Tabs>
    <TabList>
      <Tab>FIrst Tab</Tab>
      <Tab>Second Tab</Tab>
      <Tab>Third Tab</Tab>
    </TabList>
    <TabPanels>
      <div>
        <TabPanel>Tab panel 1</TabPanel>
      </div>
      <div>
        <TabPanel>Tab panel 2</TabPanel>
      </div>
      <div>
        <TabPanel>Tab panel 3</TabPanel>
      </div>
    </TabPanels>
  </Tabs>
);
