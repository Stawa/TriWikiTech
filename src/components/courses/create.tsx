import { Locale } from "@default/i18n/config";
import { DataTypeItem } from "@components/courses/template/types";
import { SingleItemProps } from "@components/courses/template/single";
import { VariableItem } from "@components/courses/template/variable";
import { MultipleItem } from "@components/courses/template/multiple";
import { InputOutputType } from "@components/courses/template/input";

type LocalizedString = {
  [key in Locale]: string;
};

interface Course {
  title: string;
  description: string;
  link: string;
  icon: JSX.Element;
}

interface LocaleProps {
  language: Locale;
}

class CreateCourseItems {
  private locale: LocaleProps;

  constructor(locale: LocaleProps) {
    this.locale = locale;
  }

  private localizeProps<T extends Record<string, any>>(localizedProps: {
    [K in keyof T]?: LocalizedString;
  }): Partial<T> {
    return Object.fromEntries(
      Object.entries(localizedProps).map(([key, value]) => [
        key,
        value?.[this.locale.language] ?? "",
      ])
    ) as Partial<T>;
  }

  private createItem<T extends Record<string, any>>(
    localizedProps: { [K in keyof T]?: LocalizedString },
    additionalProps: Partial<T>
  ): T {
    return {
      ...this.localizeProps<T>(localizedProps),
      ...additionalProps,
    } as T;
  }

  createDataTypeItem(props: {
    title: LocalizedString;
    description: LocalizedString;
    example: string;
    output: string;
    explanation: LocalizedString;
    formatSpecifier?: string;
    dataType?: string;
    range?: string;
    size?: string;
    bestUseCase: LocalizedString;
  }): DataTypeItem {
    const { title, description, explanation, bestUseCase, ...rest } = props;
    return this.createItem<DataTypeItem>(
      { title, description, explanation, bestUseCase },
      rest
    );
  }

  createSingleItem(props: {
    title: LocalizedString;
    description: LocalizedString;
    example: string;
    output: string;
    explanation: LocalizedString;
    bestUseCase: LocalizedString;
  }): SingleItemProps {
    const { title, description, explanation, bestUseCase, ...rest } = props;
    return this.createItem<SingleItemProps>(
      { title, description, explanation, bestUseCase },
      rest
    );
  }

  createVariableItem(props: {
    title: LocalizedString;
    description: LocalizedString;
    steps: LocalizedString[];
    example: string;
    explanation: LocalizedString;
    wrongExample: string;
    wrongExplanation: LocalizedString;
    tips: LocalizedString[];
    syntax: LocalizedString;
  }): VariableItem {
    const {
      title,
      description,
      explanation,
      wrongExplanation,
      syntax,
      steps,
      tips,
      ...rest
    } = props;
    return this.createItem<VariableItem>(
      { title, description, explanation, wrongExplanation, syntax },
      {
        ...rest,
        steps: steps.map((step) => step[this.locale.language]),
        tips: tips.map((tip) => tip[this.locale.language]),
      }
    );
  }

  createMultipleItem(props: {
    type: string;
    examples: {
      name: LocalizedString;
      description: LocalizedString;
      example: string;
      output: string;
      explanation: LocalizedString;
    }[];
  }): MultipleItem {
    const { type, examples } = props;
    return {
      type,
      examples: examples.map((example) => ({
        ...example,
        name: example.name[this.locale.language],
        description: example.description[this.locale.language],
        explanation: example.explanation[this.locale.language],
      })),
    };
  }

  createInputOutputItem(props: {
    type: string;
    examples: {
      function: string;
      description: LocalizedString;
      example: string;
      formatSpecifier?: string;
      safetyNote?: string;
      tip?: string;
      explanation: LocalizedString;
      bestUseCase: LocalizedString;
    }[];
  }): InputOutputType {
    const { type, examples } = props;
    return {
      type,
      examples: examples.map((example) => ({
        ...example,
        description: example.description[this.locale.language],
        explanation: example.explanation[this.locale.language],
        bestUseCase: example.bestUseCase[this.locale.language],
      })),
    };
  }

  createNavigationItem(props: {
    title: LocalizedString;
    description: LocalizedString;
    link: string;
    icon: JSX.Element;
  }): Course {
    return {
      title: props.title[this.locale.language],
      description: props.description[this.locale.language],
      link: props.link,
      icon: props.icon,
    };
  }
}

export default CreateCourseItems;
